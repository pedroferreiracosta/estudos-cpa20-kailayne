/* =========================================================
   Rumo à CPA-20 · C-Pro R — app de estudos
   SPA sem build: roteamento por hash + localStorage
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- Dados ---------------- */
  const Q = (window.QUESTOES || []).slice();
  const QMAP = Object.fromEntries(Q.map(q => [q.id, q]));
  const BLOCOS = window.CONTEUDO.blocos;
  const BMAP = Object.fromEntries(BLOCOS.map(b => [b.id, b]));
  const TOPICOS = BLOCOS.flatMap(b => b.topicos.map(t => ({ ...t, bloco: b.id })));
  const TMAP = Object.fromEntries(TOPICOS.map(t => [t.id, t]));
  const FLASH = (window.FLASHCARDS || []).map((f, i) => ({ id: "f" + i, bloco: f[0], frente: f[1], verso: f[2] }));
  const CRONO = window.CRONOGRAMA;
  const APROVACAO = 32 / 45;
  const ORDEM_ESTUDO = BLOCOS.slice().sort((a, b) => a.ordem - b.ordem);
  const PRIO = { max: ["max", "Prioridade máxima"], med: ["med", "Prioridade média"], bas: ["bas", "Só o básico"] };
  const TIPO_LABEL = { mc: "Múltipla escolha", case: "Case", arvore: "Árvore de decisão", aberta: "Resposta construída" };

  /* ---------------- Estado persistente ---------------- */
  const KEY = "rumo-cpa20.v1";
  const defaults = () => ({ examDate: null, tasks: {}, topics: {}, qstats: {}, erros: {}, hist: [], flash: {}, session: null, theme: null });
  let S;
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = defaults(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage indisponível */ } };

  /* ---------------- Utilidades ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const main = $("#main");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const L = i => String.fromCharCode(65 + i);
  const todayISO = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const parseISO = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const DOW = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const fmtDate = s => { const d = parseISO(s); return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`; };
  const fmtTime = sec => { sec = Math.max(0, Math.round(sec)); const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60; return (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); };
  const chipB = b => `<span class="chip b${b}">Bloco ${b}</span>`;
  let toastT;
  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400); };

  /* ---------------- Tema ---------------- */
  // padrão: modo claro rosé; o modo noite é opcional
  const applyTheme = () => document.documentElement.setAttribute("data-theme", S.theme === "dark" ? "dark" : "light");
  applyTheme();
  $("#themeToggle").addEventListener("click", () => {
    S.theme = S.theme === "dark" ? "light" : "dark"; save(); applyTheme();
    toast(S.theme === "dark" ? "Modo noite ativado 🌙" : "Modo claro ativado 🌸");
  });

  /* ---------------- Navegação ---------------- */
  const ICONS = {
    inicio: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    cronograma: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 14l2 2 4-4"/>',
    conteudo: '<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>',
    simulados: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9"/>',
    flashcards: '<rect x="2" y="6" width="14" height="14" rx="2"/><path d="M8 2h12a2 2 0 012 2v12"/>',
    erros: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
    ferramentas: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2"/>'
  };
  const NAV = [
    ["inicio", "Início"], ["cronograma", "Cronograma"], ["conteudo", "Conteúdo"], ["simulados", "Simulados"],
    ["flashcards", "Flashcards"], ["erros", "Caderno de erros"], ["ferramentas", "Ferramentas"]
  ];
  const TABS = ["inicio", "conteudo", "simulados", "flashcards", "ferramentas"];
  const icon = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;
  function renderNav(active) {
    const nErr = Object.keys(S.erros).filter(id => QMAP[id]).length;
    $("#nav").innerHTML = NAV.map(([k, t]) => `<a href="#/${k}" class="${k === active ? "active" : ""}">${icon(k)}<span>${t}</span>${k === "erros" && nErr ? `<span class="badge">${nErr}</span>` : ""}</a>`).join("");
    $("#tabbar").innerHTML = TABS.map(k => `<a href="#/${k}" class="${k === active ? "active" : ""}">${icon(k)}<span>${NAV.find(n => n[0] === k)[1]}</span></a>`).join("");
  }

  /* ---------------- Estatísticas ---------------- */
  function stats() {
    let seen = 0, right = 0;
    const porBloco = { 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] };
    for (const [id, st] of Object.entries(S.qstats)) {
      const q = QMAP[id]; if (!q) continue;
      seen += st.r + st.w; right += st.r;
      porBloco[q.bloco][0] += st.r; porBloco[q.bloco][1] += st.r + st.w;
    }
    const allTasks = CRONO.semanas.reduce((n, w) => n + w.dias.reduce((m, d) => m + d.length, 0), 0);
    const doneTasks = Object.values(S.tasks).filter(Boolean).length;
    const doneTopics = TOPICOS.filter(t => S.topics[t.id]).length;
    const sims = S.hist.filter(h => h.modo === "completo");
    const best = sims.reduce((m, h) => Math.max(m, h.acertos), 0);
    const uniq = Object.keys(S.qstats).filter(id => QMAP[id]).length;
    return { seen, right, porBloco, allTasks, doneTasks, doneTopics, sims, best, uniq };
  }

  /* ======================= VIEWS ======================= */

  /* ---------- Início ---------- */
  const FRASES = [
    "Constância vence intensidade. Um bloco por vez, um dia de cada vez.",
    "Cada questão errada hoje é um ponto garantido no dia da prova.",
    "Você não precisa saber tudo. Precisa acertar 32 de 45.",
    "O Bloco 3 vale 40%: é ali que a aprovação se decide.",
    "Revisar o caderno de erros rende mais que ler conteúdo novo.",
    "Disciplina é lembrar o que você quer de verdade.",
    "Antes de indicar produto, entenda o cliente. Na prova e na vida."
    , "Você é mais capaz do que imagina. Um passo de cada vez, com leveza."
    , "Cada flashcard virado é uma sementinha de aprovação. 🌱"
  ];
  function missionFor(dateISO) {
    for (let wi = 0; wi < CRONO.semanas.length; wi++) {
      const w = CRONO.semanas[wi];
      for (let di = 0; di < w.dias.length; di++) if (addDays(w.inicio, di) === dateISO) return { w, wi, di };
    }
    return null;
  }
  function viewInicio() {
    const st = stats();
    const hoje = todayISO();
    const first = CRONO.semanas[0].inicio;
    const lastW = CRONO.semanas[CRONO.semanas.length - 1];
    const fim = addDays(lastW.inicio, lastW.dias.length - 1);
    const alvo = S.examDate || fim;
    const diff = Math.ceil((parseISO(alvo) - parseISO(hoje)) / 864e5);
    let m = missionFor(hoje), missionTitle = "Missão de hoje", mDate = hoje;
    if (!m && hoje < first) { m = missionFor(first); missionTitle = "Sua primeira missão"; mDate = first; }
    const frase = FRASES[parseISO(hoje).getDate() % FRASES.length];
    const missionHTML = m ? `
      <div class="mission">
        <div class="day"><b>${fmtDate(mDate).slice(0, 2)}</b><span>${DOW[parseISO(mDate).getDay()]}</span></div>
        <div style="flex:1"><span class="eyebrow">${missionTitle} · Semana ${m.wi + 1}</span><h3 style="margin:0 0 4px">${m.w.titulo}</h3>
          <div>${m.w.dias[m.di].map((t, ti) => taskHTML(m.wi, m.di, ti, t)).join("")}</div></div>
      </div>` : `<div class="mission"><div class="day"><b>✓</b><span>fim</span></div><div><span class="eyebrow">Reta final</span><h3 style="margin:0 0 4px">Cronograma concluído</h3><p class="muted" style="margin:0">Mantenha o ritmo: um simulado e o caderno de erros todo dia até a prova.</p></div></div>`;

    const barB = b => {
      const [r, t] = st.porBloco[b.id];
      return `<div class="weight-row"><span>${chipB(b.id)} ${b.nome}</span><b>${t ? pct(r, t) + "%" : "—"}</b>
        <div class="bar"><i style="width:${t ? pct(r, t) : 0}%;background:var(--b${b.id})"></i></div></div>`;
    };
    main.innerHTML = `
    <section class="hero fade">
      <div class="hero-grid">
        <div>
          <span class="eyebrow">✿ C-Pro R · antiga CPA-20 · ANBIMA</span>
          <h1>Oi, Kailayne! ✨<br>Bora rumo à <em>aprovação</em>.</h1>
          <p>Seu plano de 5 semanas com resumos, ${Q.length} questões autorais (cases, árvores de decisão e cálculos), ${FLASH.length} flashcards e simulados no formato oficial: 45 questões em 2h30.</p>
          <div class="row" style="margin-top:18px">
            <a class="btn gold" href="${m ? (m.w.dias[m.di][0][1] || "#/cronograma") : "#/novo/completo"}">Começar a missão de hoje →</a>
            <a class="btn ghost" href="#/novo/completo">Simulado completo</a>
          </div>
        </div>
        <div>
          <div class="countdown">
            <div><b>${Math.max(0, diff)}</b><span>dias ${S.examDate ? "para a prova" : "até o fim do plano"}</span></div>
            <div><b>${pct(st.doneTasks, st.allTasks)}%</b><span>do cronograma</span></div>
            <div><b>${st.seen ? pct(st.right, st.seen) + "%" : "—"}</b><span>de acerto</span></div>
          </div>
          <p class="meta">${S.examDate ? `Prova em ${fmtDate(S.examDate)}/${S.examDate.slice(0, 4)} · ` : "Data da prova não definida · "}<button id="setExam">${S.examDate ? "alterar" : "definir data"}</button></p>
        </div>
      </div>
    </section>

    ${installCard()}
    <div class="grid g4" style="margin-top:20px">
      <div class="card stat"><span class="k">Questões resolvidas</span><span class="v">${st.seen}</span><span class="s">${st.uniq} de ${Q.length} diferentes</span></div>
      <div class="card stat"><span class="k">Simulados completos</span><span class="v">${st.sims.length}</span><span class="s">${st.sims.length ? `Melhor nota: ${st.best}/45` : "Meta: 3 na última semana"}</span></div>
      <div class="card stat"><span class="k">Tópicos estudados</span><span class="v">${st.doneTopics}/${TOPICOS.length}</span><span class="s">${pct(st.doneTopics, TOPICOS.length)}% do conteúdo</span></div>
      <div class="card stat"><span class="k">Caderno de erros</span><span class="v">${Object.keys(S.erros).filter(id => QMAP[id]).length}</span><span class="s">questões para revisar</span></div>
    </div>

    <div class="grid g2" style="margin-top:16px">
      <div class="card">${missionHTML}</div>
      <div class="card">
        <span class="eyebrow">Desempenho por bloco</span>
        <div class="weights">${BLOCOS.map(barB).join("")}</div>
        <p class="muted" style="margin:12px 0 0;font-size:.82rem">Meta: 71% ou mais em cada bloco (32 de 45 na prova).</p>
      </div>
    </div>

    <div class="grid g2" style="margin-top:16px">
      <div class="card">
        <span class="eyebrow">Como é a prova</span>
        <h3>C-Pro R: 45 questões · 2h30 · mínimo de 32 acertos</h3>
        <p class="muted">30 de múltipla escolha contextualizada e 15 em cases, minicases, árvores de decisão e resposta construída.</p>
        <div class="weights">${BLOCOS.map(b => `<div class="weight-row"><span>${b.nome}</span><b>${b.peso}%</b><div class="bar"><i style="width:${b.peso * 2.5}%;background:var(--b${b.id})"></i></div></div>`).join("")}</div>
      </div>
      <div class="card">
        <span class="eyebrow">Ordem de estudo recomendada</span>
        <div class="topic-list" style="margin-top:6px">
          ${ORDEM_ESTUDO.map((b, i) => `<a class="topic-item" href="#/conteudo/bloco/${b.id}"><span class="num" style="background:var(--b${b.id}-soft);color:var(--b${b.id})">${i + 1}</span><div><h4>Bloco ${b.id}: ${b.nome}</h4><small>${b.peso}% da prova</small></div></a>`).join("")}
        </div>
        <hr class="sep"><p class="quote">${frase}</p>
      </div>
    </div>`;
    $("#setExam").onclick = () => {
      const v = prompt("Data da prova (dd/mm/aaaa):", S.examDate ? S.examDate.split("-").reverse().join("/") : "");
      if (v === null) return;
      const mm = v.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (!v.trim()) { S.examDate = null; save(); route(); return; }
      if (!mm) return toast("Use o formato dd/mm/aaaa");
      S.examDate = `${mm[3]}-${mm[2].padStart(2, "0")}-${mm[1].padStart(2, "0")}`; save(); route(); toast("Data da prova salva!");
    };
    bindTasks();
    bindInstall();
  }

  /* ---------- Instalar como app ---------- */
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; if (location.hash.startsWith("#/inicio") || !location.hash) route(); });
  window.addEventListener("appinstalled", () => { S.installHidden = true; save(); toast("App instalado! 💖"); });
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  function installCard() {
    if (isStandalone() || S.installHidden) return "";
    const ua = navigator.userAgent;
    const ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && "ontouchend" in document);
    const passos = ios
      ? `<ol><li>Abra este site no <b>Safari</b></li><li>Toque em <b>Compartilhar</b> (o quadradinho com a seta ↑)</li><li>Escolha <b>“Adicionar à Tela de Início”</b> e toque em <b>Adicionar</b></li></ol>`
      : deferredPrompt
        ? `<p class="muted" style="margin:6px 0 10px">Um toque e o ícone aparece junto dos seus apps.</p><button class="btn gold" id="installBtn">Instalar o app</button>`
        : `<ol><li>Abra este site no <b>Chrome</b> do celular</li><li>Toque no menu <b>⋮</b> (canto superior)</li><li>Escolha <b>“Instalar app”</b> ou <b>“Adicionar à tela inicial”</b></li></ol>`;
    return `<div class="card install fade"><img src="assets/icons/icon-192.png" alt="Ícone do app Kai CPA-20">
      <div><span class="eyebrow">✿ Seu app de estudos</span><h3>Coloque na tela de início do celular</h3>${passos}</div>
      <button class="close" id="installClose" aria-label="Fechar">×</button></div>`;
  }
  function bindInstall() {
    const b = $("#installBtn");
    if (b) b.onclick = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; route(); };
    const c = $("#installClose");
    if (c) c.onclick = () => { S.installHidden = true; save(); route(); toast("Tudo bem! Dá para instalar quando quiser 🌸"); };
  }

  /* ---------- Cronograma ---------- */
  function taskHTML(wi, di, ti, t) {
    const k = `${wi}-${di}-${ti}`, done = !!S.tasks[k];
    return `<label class="task ${done ? "done" : ""}"><input type="checkbox" data-task="${k}" ${done ? "checked" : ""}><span>${esc(t[0])}${t[1] ? ` <a href="${t[1]}" onclick="event.stopPropagation()">abrir →</a>` : ""}</span></label>`;
  }
  function bindTasks() {
    main.querySelectorAll("[data-task]").forEach(cb => cb.addEventListener("change", () => {
      S.tasks[cb.dataset.task] = cb.checked; save();
      cb.closest(".task").classList.toggle("done", cb.checked);
      if (cb.checked) toast("Arrasou, Kailayne! Mais uma 💖");
      if (location.hash.startsWith("#/cronograma")) route();
    }));
  }
  function viewCronograma() {
    const hoje = todayISO();
    main.innerHTML = `
    <div class="page-head"><div><span class="eyebrow">Cronograma</span><h1>5 semanas ajustadas ao peso de cada bloco</h1>
      <p>Bloco 2 → Bloco 1 → Bloco 3 (o mais pesado, em duas semanas) → Bloco 4 → simulados. Marque cada tarefa ao concluir.</p></div></div>
    ${CRONO.semanas.map((w, wi) => {
      const tot = w.dias.reduce((n, d) => n + d.length, 0);
      const done = w.dias.reduce((n, d, di) => n + d.filter((_, ti) => S.tasks[`${wi}-${di}-${ti}`]).length, 0);
      return `<section class="card week fade">
        <div class="week-head"><span class="chip ${w.bloco ? "b" + w.bloco : "gold"}">Semana ${wi + 1} · ${fmtDate(w.inicio)} a ${fmtDate(w.fim)}</span>
          <h3>${w.titulo}</h3><div class="bar"><i style="width:${pct(done, tot)}%;background:var(--ok)"></i></div><small>${done}/${tot}</small></div>
        <p class="muted" style="margin-top:-4px">${w.foco}</p>
        <div class="days">${w.dias.map((d, di) => {
          const iso = addDays(w.inicio, di);
          return `<div class="dayrow ${iso === hoje ? "today" : ""}"><div><div class="dname">${DOW[parseISO(iso).getDay()]}${iso === hoje ? " · hoje" : ""}</div><div class="ddate">${fmtDate(iso)}</div></div>
            <div>${d.map((t, ti) => taskHTML(wi, di, ti, t)).join("")}</div></div>`;
        }).join("")}</div>
      </section>`;
    }).join("")}`;
    bindTasks();
    const t = main.querySelector(".dayrow.today");
    if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
  }

  /* ---------- Conteúdo ---------- */
  function viewConteudo() {
    main.innerHTML = `
    <div class="page-head"><div><span class="eyebrow">Conteúdo</span><h1>Resumos dos 4 blocos</h1>
      <p>Organizados pela ordem de estudo recomendada, com prioridades marcadas: <span class="chip max">máxima</span> <span class="chip med">média</span> <span class="chip bas">só o básico</span></p></div></div>
    <div class="grid g2">${ORDEM_ESTUDO.map((b, i) => {
      const done = b.topicos.filter(t => S.topics[t.id]).length;
      return `<a class="card bloco-card fade" style="--bc:var(--b${b.id})" href="#/conteudo/bloco/${b.id}">
        <div class="row">${chipB(b.id)}<span class="chip gold">${b.peso}% da prova</span><span class="spacer"></span><small>${i + 1}º a estudar</small></div>
        <h3>${b.nome}</h3><p>${b.resumo}</p>
        <div class="row"><div class="bar" style="flex:1"><i style="width:${pct(done, b.topicos.length)}%;background:var(--b${b.id})"></i></div><small>${done}/${b.topicos.length} tópicos</small></div>
      </a>`;
    }).join("")}</div>`;
  }
  function viewBloco(id) {
    const b = BMAP[id]; if (!b) return go("#/conteudo");
    const qs = Q.filter(q => q.bloco === b.id).length;
    main.innerHTML = `
    <div class="crumbs"><a href="#/conteudo">Conteúdo</a> / Bloco ${b.id}</div>
    <div class="page-head"><div>${chipB(b.id)} <span class="chip gold">${b.peso}% da prova</span><h1 style="margin-top:10px">${b.nome}</h1><p>${b.resumo}</p></div>
      <div class="row"><a class="btn" href="#/treino/${b.id}/10">Treinar 10 questões</a><a class="btn ghost" href="#/flashcards/${b.id}">Flashcards</a></div></div>
    <div class="topic-list">${b.topicos.map((t, i) => `
      <a class="topic-item fade ${S.topics[t.id] ? "done" : ""}" href="#/conteudo/${t.id}">
        <span class="num">${S.topics[t.id] ? "✓" : i + 1}</span>
        <div style="flex:1"><h4>${t.titulo}</h4><small>${t.resumo}</small></div>
        <span class="chip ${PRIO[t.prioridade][0]} hide-sm">${PRIO[t.prioridade][1]}</span>
      </a>`).join("")}</div>
    <p class="muted" style="margin-top:16px">${qs} questões deste bloco no banco.</p>`;
  }
  function viewTopico(id) {
    const t = TMAP[id]; if (!t) return go("#/conteudo");
    const b = BMAP[t.bloco], idx = b.topicos.findIndex(x => x.id === id);
    const prev = b.topicos[idx - 1], next = b.topicos[idx + 1];
    const temas = Q.filter(q => q.bloco === b.id).length;
    main.innerHTML = `
    <div class="article fade">
      <div class="crumbs"><a href="#/conteudo">Conteúdo</a> / <a href="#/conteudo/bloco/${b.id}">Bloco ${b.id}</a></div>
      <div class="row" style="margin-bottom:10px">${chipB(b.id)}<span class="chip ${PRIO[t.prioridade][0]}">${PRIO[t.prioridade][1]}</span></div>
      <h1>${t.titulo}</h1>
      <p class="muted" style="font-size:1.05rem">${t.resumo}</p>
      <hr class="sep">
      ${t.html}
      <div class="card" style="margin-top:28px;display:flex;gap:14px;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:220px"><b>Terminou este tópico?</b><br><small>Marque como estudado e fixe com questões do bloco (${temas} disponíveis).</small></div>
        <button class="btn ${S.topics[id] ? "ghost" : ""}" id="markTopic">${S.topics[id] ? "✓ Estudado" : "Marcar como estudado"}</button>
        <a class="btn gold" href="#/treino/${b.id}/10">Treinar agora</a>
      </div>
      <div class="article-nav">
        ${prev ? `<a class="btn ghost" href="#/conteudo/${prev.id}">← ${prev.titulo}</a>` : "<span></span>"}
        ${next ? `<a class="btn ghost" href="#/conteudo/${next.id}">${next.titulo} →</a>` : `<a class="btn ghost" href="#/conteudo/bloco/${b.id}">Voltar ao bloco</a>`}
      </div>
    </div>`;
    // envolver tabelas soltas para rolagem horizontal no celular
    main.querySelectorAll(".article table").forEach(tb => {
      if (!tb.parentElement.classList.contains("table-wrap")) { const w = document.createElement("div"); w.className = "table-wrap"; tb.replaceWith(w); w.appendChild(tb); }
    });
    $("#markTopic").onclick = () => { S.topics[id] = !S.topics[id]; save(); route(); if (S.topics[id]) toast("Tópico concluído, linda! 🌸"); };
    window.scrollTo(0, 0);
  }

  /* ---------- Motor de questões ---------- */
  const isCtx = q => q.tipo !== "mc";
  function pickLeastSeen(pool, n) {
    const seen = id => { const s = S.qstats[id]; return s ? s.r + s.w : 0; };
    return shuffle(pool).sort((a, b) => seen(a.id) - seen(b.id)).slice(0, n);
  }
  function montar(modo, opts = {}) {
    let ids = [];
    if (modo === "completo") {
      const mc = { 1: 6, 2: 6, 3: 12, 4: 6 }, cx = { 1: 3, 2: 3, 3: 6, 4: 3 };
      for (const b of [1, 2, 3, 4]) {
        ids.push(...pickLeastSeen(Q.filter(q => q.bloco === b && !isCtx(q)), mc[b]).map(q => q.id));
        ids.push(...pickLeastSeen(Q.filter(q => q.bloco === b && isCtx(q)), cx[b]).map(q => q.id));
      }
      // ordem como na prova: múltipla escolha primeiro, depois os contextuais, cada parte embaralhada
      ids = [...shuffle(ids.filter(id => !isCtx(QMAP[id]))), ...shuffle(ids.filter(id => isCtx(QMAP[id])))];
    } else if (modo === "rapido") {
      const n = { 1: 3, 2: 3, 3: 6, 4: 3 };
      for (const b of [1, 2, 3, 4]) ids.push(...pickLeastSeen(Q.filter(q => q.bloco === b), n[b]).map(q => q.id));
      ids = shuffle(ids);
    } else if (modo === "treino") {
      let pool = Q.filter(q => (!opts.bloco || q.bloco === opts.bloco) && (!opts.tema || q.tema === opts.tema));
      ids = (opts.n ? pickLeastSeen(pool, opts.n) : shuffle(pool)).map(q => q.id);
    } else if (modo === "erros") {
      ids = shuffle(Object.keys(S.erros).filter(id => QMAP[id]));
    }
    const dur = modo === "completo" ? 150 * 60 : modo === "rapido" ? 50 * 60 : null;
    S.session = { modo, opts, ids, ans: {}, flags: {}, checked: {}, idx: 0, start: Date.now(), dur, feedback: modo === "treino" || modo === "erros" };
    save();
  }
  function isRight(q, a) {
    if (a === undefined || a === null) return false;
    if (q.tipo === "arvore") return Array.isArray(a) && q.etapas.every((e, i) => a[i] === e.correta);
    if (q.tipo === "aberta") return typeof a === "number" && Math.abs(a - q.resposta) <= (q.tolerancia || 0) + 1e-9;
    return a === q.correta;
  }
  const answered = (q, a) => q.tipo === "arvore" ? Array.isArray(a) && a.length === q.etapas.length && a.every(x => x !== undefined && x !== null) : a !== undefined && a !== null;
  function parseNum(s) {
    s = String(s).trim().replace(/\s|R\$|%/g, "");
    if (!s) return null;
    if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    const n = parseFloat(s);
    return isFinite(n) ? n : null;
  }
  function registrar(q, ok) {
    const st = S.qstats[q.id] || (S.qstats[q.id] = { r: 0, w: 0 });
    ok ? st.r++ : st.w++;
    if (ok) delete S.erros[q.id]; else S.erros[q.id] = Date.now();
  }

  let timerInt = null;
  function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }

  function viewExame() {
    const s = S.session;
    if (!s || !s.ids.length) { go("#/simulados"); return; }
    const q = QMAP[s.ids[s.idx]];
    if (!q) { s.ids = s.ids.filter(id => QMAP[id]); s.idx = 0; save(); return viewExame(); }
    const a = s.ans[q.id];
    const checked = !!s.checked[q.id];
    const nAns = s.ids.filter(id => answered(QMAP[id], s.ans[id])).length;
    const titulo = { completo: "Simulado completo", rapido: "Simulado rápido", treino: "Treino", erros: "Caderno de erros" }[s.modo];

    let body = "";
    const ctx = q.contexto ? `<div class="q-context"><b class="lbl">${q.tipo === "arvore" ? "Árvore de decisão" : "Case"}</b>${q.contexto}</div>` : "";
    const optList = (alts, sel, correct, reveal, step) => `<div class="opts">${alts.map((t, i) => {
      let cls = "";
      if (reveal) { if (i === correct) cls = "right"; else if (i === sel) cls = "wrong"; }
      else if (i === sel) cls = "sel";
      return `<button class="opt ${cls}" data-opt="${i}" ${step !== undefined ? `data-step="${step}"` : ""} ${reveal ? "disabled" : ""}><span class="L">${L(i)}</span><span>${t}</span></button>`;
    }).join("")}</div>`;

    if (q.tipo === "arvore") {
      const arr = Array.isArray(a) ? a : [];
      let html = `<div class="steps">${q.etapas.map((_, i) => `<i class="${i < arr.length + 1 ? "on" : ""}"></i>`).join("")}</div>`;
      for (let i = 0; i < q.etapas.length; i++) {
        if (i > arr.length) break;
        const e = q.etapas[i];
        const reveal = s.feedback && arr[i] !== undefined;
        html += `<div class="tree-step" style="margin-bottom:18px"><p class="q-text"><span class="chip gold">Etapa ${i + 1}/${q.etapas.length}</span> ${e.enunciado}</p>
          ${optList(e.alternativas, arr[i], e.correta, reveal, i)}
          ${reveal ? `<div class="explain ${arr[i] === e.correta ? "ok" : "bad"}"><h4>${arr[i] === e.correta ? "✓ Correto" : "✗ Resposta certa: " + L(e.correta)}</h4>${e.explicacao || ""}</div>` : ""}</div>`;
      }
      body = ctx + html;
    } else if (q.tipo === "aberta") {
      const reveal = s.feedback && checked;
      body = `${ctx}<p class="q-text">${q.enunciado}</p>
        <div class="open-answer"><input type="text" inputmode="decimal" id="openIn" placeholder="Digite sua resposta" value="${a !== undefined && a !== null ? String(a).replace(".", ",") : ""}" ${reveal ? "disabled" : ""}>${q.unidade ? `<span class="unit">${q.unidade}</span>` : ""}
        ${reveal ? "" : `<button class="btn sm" id="openOk">Confirmar</button>`}</div>
        <p class="muted" style="font-size:.82rem;margin-top:6px">Resposta construída: digite só o número, como na prova (ex.: 1.234,56).</p>
        ${reveal ? `<div class="explain ${isRight(q, a) ? "ok" : "bad"}"><h4>${isRight(q, a) ? "✓ Correto" : "✗ Resposta esperada: " + String(q.resposta).replace(".", ",") + (q.unidade ? " " + q.unidade : "")}</h4>${q.explicacao || ""}</div>` : ""}`;
    } else {
      const reveal = s.feedback && checked;
      body = `${ctx}<p class="q-text">${q.enunciado}</p>${optList(q.alternativas, a, q.correta, reveal)}
        ${reveal ? `<div class="explain ${a === q.correta ? "ok" : "bad"}"><h4>${a === q.correta ? "✓ Correto" : "✗ Resposta certa: " + L(q.correta)}</h4>${q.explicacao || ""}</div>` : ""}`;
    }

    const last = s.idx === s.ids.length - 1;
    main.innerHTML = `
    <div class="exam-top">
      <b>${titulo}</b>
      ${s.dur ? `<span class="timer" id="timer">--:--</span>` : ""}
      <div class="bar"><i style="width:${pct(nAns, s.ids.length)}%"></i></div>
      <small>${nAns}/${s.ids.length}</small>
      <button class="btn sm ghost" id="finish">${s.feedback ? "Encerrar" : "Entregar"}</button>
    </div>
    <div class="question fade">
      <div class="q-meta"><b>Questão ${s.idx + 1} de ${s.ids.length}</b>${chipB(q.bloco)}<span class="chip">${esc(q.tema)}</span><span class="chip">${TIPO_LABEL[q.tipo]}</span>
        <span class="spacer"></span><button class="btn sm ghost" id="flag">${s.flags[q.id] ? "★ Marcada" : "☆ Marcar p/ revisar"}</button></div>
      ${body}
      <div class="row" style="margin-top:22px">
        <button class="btn ghost" id="prev" ${s.idx === 0 ? "disabled" : ""}>← Anterior</button>
        <span class="spacer"></span>
        ${last ? `<button class="btn gold" id="finish2">${s.feedback ? "Ver resultado" : "Entregar simulado"}</button>` : `<button class="btn" id="next">Próxima →</button>`}
      </div>
      <div class="qmap">${s.ids.map((id, i) => {
        const qq = QMAP[id], aa = s.ans[id];
        let c = answered(qq, aa) ? "answered" : "";
        if (s.feedback && (s.checked[id] || qq.tipo === "arvore") && answered(qq, aa)) c = isRight(qq, aa) ? "right" : "wrong";
        return `<button class="${c} ${s.flags[id] ? "flagged" : ""} ${i === s.idx ? "current" : ""}" data-jump="${i}" aria-label="Questão ${i + 1}">${i + 1}</button>`;
      }).join("")}</div>
      <p class="muted hide-sm" style="font-size:.8rem;margin-top:14px">Atalhos: <span class="kbd">A</span>–<span class="kbd">D</span> respondem · <span class="kbd">←</span> <span class="kbd">→</span> navegam</p>
    </div>`;

    // eventos
    main.querySelectorAll("[data-opt]").forEach(btn => btn.onclick = () => choose(+btn.dataset.opt, btn.dataset.step));
    const oi = $("#openIn");
    if (oi) {
      const commit = () => {
        const n = parseNum(oi.value);
        if (n === null) { toast("Digite um número válido"); return; }
        s.ans[q.id] = n;
        if (s.feedback) { s.checked[q.id] = true; registrar(q, isRight(q, n)); }
        save(); viewExame();
      };
      const ok = $("#openOk");
      if (ok) ok.onclick = commit;
      oi.addEventListener("keydown", e => { if (e.key === "Enter") commit(); });
      if (!s.feedback) oi.addEventListener("change", () => { const n = parseNum(oi.value); if (n !== null) { s.ans[q.id] = n; save(); } });
    }
    $("#prev").onclick = () => { s.idx--; save(); viewExame(); window.scrollTo(0, 0); };
    const nx = $("#next"); if (nx) nx.onclick = () => { s.idx++; save(); viewExame(); window.scrollTo(0, 0); };
    $("#flag").onclick = () => { s.flags[q.id] = !s.flags[q.id]; save(); viewExame(); };
    main.querySelectorAll("[data-jump]").forEach(b => b.onclick = () => { s.idx = +b.dataset.jump; save(); viewExame(); window.scrollTo(0, 0); });
    const fin = () => {
      const falt = s.ids.length - s.ids.filter(id => answered(QMAP[id], s.ans[id])).length;
      if (falt && !confirm(`Ainda faltam ${falt} questão(ões) sem resposta. Deseja ${s.feedback ? "encerrar" : "entregar"} mesmo assim?`)) return;
      finalizar();
    };
    $("#finish").onclick = fin;
    const f2 = $("#finish2"); if (f2) f2.onclick = fin;

    function choose(i, step) {
      if (q.tipo === "arvore") {
        const arr = Array.isArray(s.ans[q.id]) ? s.ans[q.id].slice() : [];
        const k = +step;
        if (s.feedback && arr[k] !== undefined) return;
        arr[k] = i; arr.length = k + 1; // mudar uma etapa reinicia as seguintes
        s.ans[q.id] = arr;
        if (s.feedback && arr.length === q.etapas.length) registrar(q, isRight(q, arr));
      } else {
        if (s.feedback && s.checked[q.id]) return;
        s.ans[q.id] = i;
        if (s.feedback) { s.checked[q.id] = true; registrar(q, i === q.correta); }
      }
      save(); viewExame();
    }

    // timer
    stopTimer();
    if (s.dur) {
      const tick = () => {
        const rest = s.dur - (Date.now() - s.start) / 1000;
        const el = $("#timer"); if (!el) return stopTimer();
        el.textContent = "⏱ " + fmtTime(rest);
        el.classList.toggle("low", rest < 600);
        if (rest <= 0) { stopTimer(); toast("Tempo esgotado! Simulado entregue."); finalizar(); }
      };
      tick(); timerInt = setInterval(tick, 1000);
    }
  }

  function finalizar() {
    stopTimer();
    const s = S.session; if (!s) return;
    const porBloco = { 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] };
    const porTipo = {};
    let ac = 0;
    for (const id of s.ids) {
      const q = QMAP[id]; if (!q) continue;
      const ok = isRight(q, s.ans[id]);
      if (ok) ac++;
      porBloco[q.bloco][1]++; if (ok) porBloco[q.bloco][0]++;
      const tp = isCtx(q) ? "ctx" : "mc";
      porTipo[tp] = porTipo[tp] || [0, 0]; porTipo[tp][1]++; if (ok) porTipo[tp][0]++;
      if (!s.feedback) registrar(q, ok);
      else if (!s.checked[id] && q.tipo !== "arvore" && answered(q, s.ans[id])) registrar(q, ok);
    }
    const res = { data: Date.now(), modo: s.modo, opts: s.opts, total: s.ids.length, acertos: ac, porBloco, porTipo, ids: s.ids, ans: s.ans, tempo: Math.round((Date.now() - s.start) / 1000) };
    S.hist.unshift(res);
    S.hist = S.hist.slice(0, 40);
    S.session = null; save();
    go("#/resultado/0");
  }

  function ring(p, ok) {
    const r = 64, c = 2 * Math.PI * r;
    return `<div class="ring"><svg viewBox="0 0 160 160"><circle class="track" cx="80" cy="80" r="${r}"/><circle class="val" cx="80" cy="80" r="${r}" stroke="${ok ? "var(--ok)" : "var(--bad)"}" stroke-dasharray="${c}" stroke-dashoffset="${c}" data-off="${c * (1 - p / 100)}"/></svg><div class="lbl"><div><b>${p}%</b><small>de acerto</small></div></div></div>`;
  }

  function viewResultado(i) {
    const r = S.hist[+i]; if (!r) return go("#/simulados");
    const p = pct(r.acertos, r.total);
    const ok = r.modo === "completo" ? r.acertos >= 32 : r.acertos / r.total >= APROVACAO;
    const nome = { completo: "Simulado completo", rapido: "Simulado rápido", treino: "Treino", erros: "Caderno de erros" }[r.modo];
    const weak = [1, 2, 3, 4].filter(b => r.porBloco[b][1]).sort((a, b) => r.porBloco[a][0] / r.porBloco[a][1] - r.porBloco[b][0] / r.porBloco[b][1])[0];
    main.innerHTML = `
    <div class="crumbs"><a href="#/simulados">Simulados</a> / Resultado</div>
    <div class="grid g2">
      <div class="card result-hero fade">
        ${ring(p, ok)}
        <span class="verdict ${ok ? "ok" : "bad"}">${ok ? "Aprovada! 🎉💖" : "Quase lá! Bora revisar 🌷"}</span>
        <h2 style="margin:6px 0">${r.acertos} de ${r.total} acertos</h2>
        <p class="muted">${nome} · ${new Date(r.data).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })} · tempo ${fmtTime(r.tempo)}</p>
        <p class="muted" style="font-size:.85rem">${r.modo === "completo" ? "Na prova real o mínimo é 32 de 45." : "Referência: 71% (o equivalente a 32 de 45)."}</p>
      </div>
      <div class="card fade">
        <span class="eyebrow">Por bloco</span>
        <div class="weights">${[1, 2, 3, 4].filter(b => r.porBloco[b][1]).map(b => {
          const [a, t] = r.porBloco[b]; const pp = pct(a, t);
          return `<div class="weight-row"><span>${chipB(b)} ${BMAP[b].nome}</span><b>${a}/${t}</b><div class="bar"><i style="width:${pp}%;background:${pp >= 71 ? "var(--ok)" : pp >= 50 ? "var(--warn)" : "var(--bad)"}"></i></div></div>`;
        }).join("")}</div>
        ${r.porTipo && r.porTipo.ctx ? `<hr class="sep"><span class="eyebrow">Por formato</span><p style="margin:0">Múltipla escolha: <b>${r.porTipo.mc ? r.porTipo.mc[0] + "/" + r.porTipo.mc[1] : "—"}</b> · Cases e árvores: <b>${r.porTipo.ctx[0]}/${r.porTipo.ctx[1]}</b></p>` : ""}
        ${weak ? `<hr class="sep"><p style="margin:0">🎯 <b>Foco agora:</b> o Bloco ${weak} (${BMAP[weak].nome}) foi o seu ponto mais fraco. <a href="#/conteudo/bloco/${weak}">Revisar resumos →</a></p>` : ""}
        <div class="row" style="margin-top:16px"><a class="btn" href="#/erros">Caderno de erros</a><a class="btn ghost" href="#/simulados">Novo simulado</a></div>
      </div>
    </div>
    <h2 style="margin-top:30px">Correção comentada</h2>
    <div class="row" style="margin-bottom:12px"><button class="btn sm ghost" data-filter="all">Todas</button><button class="btn sm ghost" data-filter="wrong">Só as erradas</button></div>
    <div id="review">${r.ids.map((id, n) => reviewItem(QMAP[id], r.ans[id], n)).join("")}</div>`;
    requestAnimationFrame(() => setTimeout(() => main.querySelectorAll(".ring .val").forEach(c => c.style.strokeDashoffset = c.dataset.off), 60));
    main.querySelectorAll("[data-filter]").forEach(b => b.onclick = () => {
      const w = b.dataset.filter === "wrong";
      main.querySelectorAll("#review details").forEach(d => d.style.display = w && d.dataset.ok === "1" ? "none" : "");
    });
  }
  function reviewItem(q, a, n) {
    if (!q) return "";
    const ok = isRight(q, a);
    let inner = q.contexto ? `<div class="q-context">${q.contexto}</div>` : "";
    const altsHTML = (alts, sel, cor) => `<div class="opts">${alts.map((t, i) => `<div class="opt ${i === cor ? "right" : i === sel ? "wrong" : ""}"><span class="L">${L(i)}</span><span>${t}</span></div>`).join("")}</div>`;
    if (q.tipo === "arvore") {
      inner += q.etapas.map((e, i) => `<p class="q-text" style="margin-top:12px"><span class="chip gold">Etapa ${i + 1}</span> ${e.enunciado}</p>${altsHTML(e.alternativas, Array.isArray(a) ? a[i] : undefined, e.correta)}<div class="explain">${e.explicacao || ""}</div>`).join("");
    } else if (q.tipo === "aberta") {
      inner += `<p class="q-text">${q.enunciado}</p><p>Sua resposta: <b>${a === undefined || a === null ? "—" : String(a).replace(".", ",")}</b> · Esperada: <b>${String(q.resposta).replace(".", ",")} ${q.unidade || ""}</b></p><div class="explain">${q.explicacao || ""}</div>`;
    } else {
      inner += `<p class="q-text">${q.enunciado}</p>${altsHTML(q.alternativas, a, q.correta)}<div class="explain">${q.explicacao || ""}</div>`;
    }
    return `<details class="card" data-ok="${ok ? 1 : 0}" style="margin-bottom:10px">
      <summary style="cursor:pointer;display:flex;gap:10px;align-items:center;flex-wrap:wrap;list-style:none">
        <span class="chip ${ok ? "ok" : "max"}">${ok ? "✓" : "✗"} ${n + 1}</span>${chipB(q.bloco)}<span class="chip">${esc(q.tema)}</span>
        <span style="flex:1;min-width:200px;font-size:.92rem">${(q.enunciado || q.etapas[0].enunciado).replace(/<[^>]+>/g, "").slice(0, 110)}…</span></summary>
      <div style="margin-top:14px">${inner}</div></details>`;
  }

  /* ---------- Simulados (menu) ---------- */
  function viewSimulados() {
    const s = S.session;
    const temas = {};
    Q.forEach(q => { (temas[q.bloco] = temas[q.bloco] || new Set()).add(q.tema); });
    const nErr = Object.keys(S.erros).filter(id => QMAP[id]).length;
    const mi = (k, p) => `<svg viewBox="0 0 24 24">${p}</svg>`;
    main.innerHTML = `
    <div class="page-head"><div><span class="eyebrow">Simulados</span><h1>Treine no formato da prova</h1>
      <p>${Q.length} questões autorais: ${Q.filter(q => q.tipo === "mc").length} de múltipla escolha contextualizada, ${Q.filter(q => q.tipo === "case").length} cases, ${Q.filter(q => q.tipo === "arvore").length} árvores de decisão e ${Q.filter(q => q.tipo === "aberta").length} de resposta construída. Os simulados priorizam as questões que você ainda não viu.</p></div></div>
    ${s ? `<div class="card fade" style="border-color:var(--gold);margin-bottom:16px"><div class="row"><div style="flex:1"><b>Você tem um ${s.modo === "completo" ? "simulado completo" : s.modo === "rapido" ? "simulado rápido" : "treino"} em andamento</b><br><small>${s.ids.filter(id => answered(QMAP[id] || {}, s.ans[id])).length}/${s.ids.length} respondidas</small></div>
      <a class="btn gold" href="#/exame">Continuar</a><button class="btn ghost" id="discard">Descartar</button></div></div>` : ""}
    <div class="grid g3">
      <div class="card mode-card fade"><div class="icon">${mi(0, '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>')}</div>
        <h3>Simulado completo</h3><p><b>45 questões · 2h30</b>. São 30 de múltipla escolha e 15 cases e árvores, com a mesma proporção de blocos da prova (20/20/40/20). Gabarito só no final.</p>
        <div class="row"><a class="btn gold" href="#/novo/completo">Iniciar</a></div></div>
      <div class="card mode-card fade"><div class="icon">${mi(0, '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>')}</div>
        <h3>Simulado rápido</h3><p><b>15 questões · 50 min</b>, no mesmo ritmo da prova. Ótimo para os dias corridos.</p>
        <div class="row"><a class="btn" href="#/novo/rapido">Iniciar</a></div></div>
      <div class="card mode-card fade"><div class="icon">${mi(0, '<path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="9"/>')}</div>
        <h3>Caderno de erros</h3><p>Refaça as <b>${nErr}</b> questões que você errou. Acertou de novo, ela sai do caderno.</p>
        <div class="row"><a class="btn ${nErr ? "" : "ghost"}" href="#/erros">Abrir</a></div></div>
    </div>
    <div class="card fade" style="margin-top:16px">
      <h3>🎯 Treino por bloco e tema</h3><p class="muted">Correção na hora, com explicação, sem cronômetro.</p>
      <div class="fields" style="max-width:720px">
        <div class="field"><label>Bloco</label><select id="tB"><option value="0">Todos os blocos</option>${BLOCOS.map(b => `<option value="${b.id}">Bloco ${b.id}: ${b.nome}</option>`).join("")}</select></div>
        <div class="field"><label>Tema</label><select id="tT"><option value="">Todos os temas</option></select></div>
        <div class="field"><label>Quantidade</label><select id="tN"><option value="10">10 questões</option><option value="20">20 questões</option><option value="0">Todas</option></select></div>
      </div>
      <button class="btn" id="tGo">Começar treino</button>
    </div>
    <h2 style="margin-top:30px">Histórico</h2>
    ${S.hist.length ? `<div class="card" style="overflow-x:auto"><table class="hist"><tr><th>Data</th><th>Modo</th><th>Nota</th><th>%</th><th></th></tr>
      ${S.hist.map((h, i) => `<tr><td>${new Date(h.data).toLocaleDateString("pt-BR")}</td><td>${{ completo: "Completo", rapido: "Rápido", treino: "Treino", erros: "Erros" }[h.modo]}</td><td><b>${h.acertos}/${h.total}</b></td>
        <td><span class="chip ${pct(h.acertos, h.total) >= 71 ? "ok" : "max"}">${pct(h.acertos, h.total)}%</span></td><td><a href="#/resultado/${i}">ver →</a></td></tr>`).join("")}</table></div>`
      : `<div class="card empty"><div class="big">📝</div>Nenhum simulado feito ainda. Que tal começar pelo rápido?</div>`}`;
    const fillTemas = () => {
      const b = +$("#tB").value;
      const set = new Set(); Q.filter(q => !b || q.bloco === b).forEach(q => set.add(q.tema));
      $("#tT").innerHTML = `<option value="">Todos os temas</option>` + [...set].sort().map(t => `<option>${esc(t)}</option>`).join("");
    };
    $("#tB").onchange = fillTemas; fillTemas();
    $("#tGo").onclick = () => { montar("treino", { bloco: +$("#tB").value || 0, tema: $("#tT").value || "", n: +$("#tN").value }); go("#/exame"); };
    const d = $("#discard"); if (d) d.onclick = () => { if (confirm("Descartar o simulado em andamento?")) { S.session = null; save(); route(); } };
  }

  /* ---------- Caderno de erros ---------- */
  function viewErros() {
    const ids = Object.keys(S.erros).filter(id => QMAP[id]);
    const por = { 1: 0, 2: 0, 3: 0, 4: 0 }; ids.forEach(id => por[QMAP[id].bloco]++);
    main.innerHTML = `
    <div class="page-head"><div><span class="eyebrow">Caderno de erros</span><h1>Seus erros viram pontos</h1>
      <p>Toda questão errada vem automaticamente para cá. Acertou de novo, ela sai do caderno. Meta: chegar à prova com o caderno zerado.</p></div>
      ${ids.length ? `<button class="btn gold" id="goErr">Refazer ${ids.length} questões</button>` : ""}</div>
    ${ids.length ? `<div class="grid g4">${[1, 2, 3, 4].map(b => `<div class="card stat"><span class="k">${chipB(b)}</span><span class="v">${por[b]}</span><span class="s">${BMAP[b].nome}</span></div>`).join("")}</div>
      <h2 style="margin-top:26px">Questões no caderno</h2>
      ${ids.map((id, n) => reviewItem(QMAP[id], undefined, n)).join("")}`
      : `<div class="card empty"><div class="big">🌟</div><h3>Caderno vazio!</h3><p>Ou você ainda não errou nada, ou já zerou tudo. Faça um simulado para alimentar o caderno.</p><a class="btn" href="#/simulados">Ir para simulados</a></div>`}`;
    const g = $("#goErr"); if (g) g.onclick = () => { montar("erros"); go("#/exame"); };
  }

  /* ---------- Flashcards ---------- */
  let fdeck = [], fpos = 0, fbloco = 0;
  function viewFlash(b) {
    fbloco = +b || 0;
    const cards = FLASH.filter(c => !fbloco || c.bloco === fbloco);
    const box = c => S.flash[c.id] || 1;
    fdeck = shuffle(cards).sort((x, y) => box(x) - box(y));
    fpos = 0;
    renderFlash();
  }
  function renderFlash() {
    const cards = FLASH.filter(c => !fbloco || c.bloco === fbloco);
    const cnt = [1, 2, 3].map(n => cards.filter(c => (S.flash[c.id] || 1) === n).length);
    const c = fdeck[fpos];
    main.innerHTML = `
    <div class="page-head"><div><span class="eyebrow">Flashcards</span><h1>Memorização ativa</h1>
      <p>Toque no cartão para virar. Os que você ainda não sabe voltam com mais frequência (sistema de caixas de Leitner).</p></div>
      <select id="fB"><option value="0">Todos os blocos (${FLASH.length})</option>${BLOCOS.map(b => `<option value="${b.id}" ${fbloco === b.id ? "selected" : ""}>Bloco ${b.id}: ${b.nome} (${FLASH.filter(f => f.bloco === b.id).length})</option>`).join("")}</select></div>
    <div class="flash-wrap">
      <div class="leitner"><span class="chip max">Não sei: ${cnt[0]}</span><span class="chip med">Quase: ${cnt[1]}</span><span class="chip ok">Domino: ${cnt[2]}</span></div>
      ${c ? `<div class="flash fade" id="card" tabindex="0" role="button" aria-label="Virar cartão">
        <div class="flash-inner">
          <div class="flash-face flash-front">${chipB(c.bloco)}<p>${c.frente}</p><span class="hint">toque para ver a resposta · espaço</span></div>
          <div class="flash-face flash-back"><p>${c.verso}</p><span class="hint">Você sabia?</span></div>
        </div></div>
      <div class="row" style="justify-content:center"><button class="btn ghost" id="fNo">✗ Não sabia <span class="kbd hide-sm">1</span></button><button class="btn" id="fYes">✓ Sabia <span class="kbd hide-sm" style="color:inherit">2</span></button></div>
      <p class="muted" style="text-align:center;margin-top:12px">${fpos + 1} de ${fdeck.length}</p>`
      : `<div class="card empty"><div class="big">🎉</div><h3>Rodada concluída!</h3><p>Você passou por todos os cartões.</p><button class="btn" id="fAgain">Nova rodada</button></div>`}
    </div>`;
    $("#fB").onchange = e => go("#/flashcards/" + e.target.value);
    const card = $("#card");
    if (card) {
      card.onclick = () => card.classList.toggle("flipped");
      const ans = ok => { S.flash[c.id] = ok ? Math.min(3, (S.flash[c.id] || 1) + 1) : 1; save(); fpos++; renderFlash(); };
      $("#fNo").onclick = () => ans(false);
      $("#fYes").onclick = () => ans(true);
    }
    const ag = $("#fAgain"); if (ag) ag.onclick = () => viewFlash(fbloco);
  }

  /* ---------- Ferramentas ---------- */
  function viewFerramentas() {
    main.innerHTML = window.FERRAMENTAS.render();
    window.FERRAMENTAS.init(main);
  }

  /* ======================= ROUTER ======================= */
  function go(h, replace) { if (location.hash === h) route(); else if (replace) location.replace(h); else location.hash = h; }
  function route() {
    stopTimer();
    const parts = (location.hash || "#/inicio").replace(/^#\/?/, "").split("/");
    const [p0, p1, p2] = parts;
    let active = p0 || "inicio";
    switch (p0) {
      case "": case "inicio": viewInicio(); active = "inicio"; break;
      case "cronograma": viewCronograma(); break;
      case "conteudo":
        if (!p1) viewConteudo();
        else if (p1 === "bloco") viewBloco(+p2);
        else viewTopico(p1);
        active = "conteudo"; break;
      case "simulados": viewSimulados(); break;
      case "novo":
        if (S.session && !confirm("Há um simulado em andamento. Começar um novo e descartar o atual?")) { go("#/exame", true); return; }
        montar(p1 === "completo" ? "completo" : "rapido"); go("#/exame", true); return;
      case "treino":
        montar("treino", { bloco: +p1 || 0, n: p2 === undefined ? 10 : +p2 }); go("#/exame", true); return;
      case "exame": viewExame(); active = "simulados"; break;
      case "resultado": viewResultado(p1 || 0); active = "simulados"; break;
      case "erros": viewErros(); break;
      case "flashcards": viewFlash(p1); break;
      case "ferramentas": viewFerramentas(); break;
      default: go("#/inicio"); return;
    }
    renderNav(active);
    if (p0 !== "exame") window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  /* ---------------- Teclado ---------------- */
  document.addEventListener("keydown", e => {
    if (e.target.matches("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    const h = location.hash;
    if (h.startsWith("#/exame")) {
      const k = e.key.toUpperCase();
      if ("ABCD".includes(k) && k.length === 1) {
        const opts = [...main.querySelectorAll(".opt:not([disabled])")];
        const lastStep = opts.length ? opts[opts.length - 1].dataset.step : undefined;
        const group = lastStep !== undefined ? opts.filter(o => o.dataset.step === lastStep) : opts;
        const b = group[k.charCodeAt(0) - 65]; if (b) b.click();
      } else if (e.key === "ArrowRight") { const n = $("#next"); if (n) n.click(); }
      else if (e.key === "ArrowLeft") { const p = $("#prev"); if (p && !p.disabled) p.click(); }
    } else if (h.startsWith("#/flashcards")) {
      const c = $("#card");
      if (e.key === " " && c) { e.preventDefault(); c.click(); }
      else if (e.key === "1") { const b = $("#fNo"); if (b) b.click(); }
      else if (e.key === "2") { const b = $("#fYes"); if (b) b.click(); }
    }
  });

  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
