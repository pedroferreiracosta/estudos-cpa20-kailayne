/* =========================================================
   Ferramentas: calculadoras, árvores de decisão e cola rápida
   ========================================================= */
(function () {
  const fmtBRL = v => (isFinite(v) ? v : 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const fmtPct = (v, d = 2) => (isFinite(v) ? v : 0).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }) + "%";
  const num = el => {
    const s = String(el.value || "").trim();
    if (!s) return 0;
    const n = s.includes(",") ? s.replace(/\./g, "").replace(",", ".") : s;
    return parseFloat(n) || 0;
  };

  // IOF regressivo: % do rendimento por dia corrido (1 a 29). Dia 30+ = 0
  const IOF = [96, 93, 90, 86, 83, 80, 76, 73, 70, 66, 63, 60, 56, 53, 50, 46, 43, 40, 36, 33, 30, 26, 23, 20, 16, 13, 10, 6, 3, 0];
  const aliqRF = d => (d <= 180 ? 22.5 : d <= 360 ? 20 : d <= 720 ? 17.5 : 15);

  /* ---------------- Árvores de decisão ---------------- */
  const ARVORES = {
    pgbl: {
      titulo: "PGBL ou VGBL?",
      inicio: "q1",
      nos: {
        q1: { p: "O cliente faz a declaração do IR pelo modelo completo?", o: [["Sim", "q2"], ["Não (simplificada ou isento)", "rV"]] },
        q2: { p: "Ele contribui para o INSS ou para um regime próprio de previdência?", o: [["Sim", "q3"], ["Não", "rV2"]] },
        q3: { p: "Ele já aporta 12% da renda bruta tributável em PGBL?", o: [["Ainda não", "rP"], ["Sim, já usa os 12%", "rV3"]] }
      },
      res: {
        rV: ["VGBL", "Sem declaração completa não há como aproveitar a dedução. No VGBL, o IR do resgate incide só sobre os rendimentos."],
        rV2: ["VGBL", "Para deduzir as contribuições ao PGBL, a pessoa precisa contribuir para o regime geral ou próprio. Sem essa condição, o VGBL é mais eficiente."],
        rP: ["PGBL, até 12% da renda bruta tributável", "Ele deduz as contribuições e adia o imposto. O excedente aos 12% deve ir para o VGBL. Lembre que, no resgate do PGBL, o IR incide sobre o valor total."],
        rV3: ["VGBL para o excedente", "Acima de 12% não há dedução extra. Colocar mais no PGBL só faria o IR do resgate incidir sobre um valor maior."]
      }
    },
    regime: {
      titulo: "Tabela progressiva ou regressiva?",
      inicio: "q1",
      nos: {
        q1: { p: "Por quanto tempo o dinheiro deve ficar aplicado na previdência?", o: [["Mais de 10 anos", "q2"], ["Entre 4 e 10 anos", "q3"], ["Menos de 4 anos ou não sabe", "rProg"]] },
        q2: { p: "A renda tributável esperada no resgate ou na aposentadoria é baixa, perto da faixa de isenção?", o: [["Sim, renda baixa", "rProgBaixa"], ["Não, renda média ou alta", "rReg"]] },
        q3: { p: "A alíquota efetiva que o cliente teria pela tabela progressiva no resgate é maior que 15% a 25%?", o: [["Sim (renda alta)", "rReg2"], ["Não (renda baixa)", "rProgBaixa"]] }
      },
      res: {
        rProg: ["Progressiva, ou adiar a escolha", "Para prazos curtos ou incertos, a regressiva cobraria de 35% a 30%. A progressiva retém 15% e ajusta na declaração. Pela Lei 14.803/2024, dá para escolher até o primeiro resgate ou benefício."],
        rProgBaixa: ["Progressiva", "Com renda baixa no resgate, a tabela progressiva pode resultar em alíquota efetiva menor, até isenta, que a regressiva."],
        rReg: ["Regressiva", "No longo prazo, a alíquota cai até 10%, abaixo de qualquer faixa relevante da progressiva para renda média ou alta."],
        rReg2: ["Regressiva", "Com 4 a 10 anos, a regressiva fica entre 25% e 15%. Para renda alta (27,5% na progressiva), ela tende a ser melhor."]
      }
    },
    divida: {
      titulo: "Investir ou quitar dívida?",
      inicio: "q1",
      nos: {
        q1: { p: "O cliente tem dívidas caras (rotativo do cartão, cheque especial, crédito pessoal)?", o: [["Sim", "rQuitar"], ["Não", "q2"]] },
        q2: { p: "Ele já tem uma reserva de emergência completa (3 a 12 meses de despesas)?", o: [["Não", "rReserva"], ["Sim", "q3"]] },
        q3: { p: "O perfil de suitability está atualizado (no máximo 24 meses e sem evento de vida relevante)?", o: [["Não", "rPerfil"], ["Sim", "rInvestir"]] }
      },
      res: {
        rQuitar: ["Quitar as dívidas caras primeiro", "Nenhum investimento conservador rende mais que os juros do rotativo ou do cheque especial. Quitar a dívida é o melhor 'investimento' disponível."],
        rReserva: ["Montar a reserva de emergência", "Em ativos de liquidez diária e baixo risco: Tesouro Selic, CDB com liquidez diária ou fundo DI de taxa baixa."],
        rPerfil: ["Atualizar o perfil (API / suitability)", "Pela CVM 30, não se recomenda com o perfil desatualizado. Refaça o questionário antes de qualquer recomendação."],
        rInvestir: ["Investir conforme os objetivos e o perfil", "Agora sim: alocação por objetivo e prazo, diversificação e monitoramento periódico."]
      }
    },
    inadequado: {
      titulo: "O cliente quer um produto fora do perfil",
      inicio: "q1",
      nos: {
        q1: { p: "O cliente tem perfil (API) preenchido?", o: [["Sim", "q2"], ["Não", "rSemPerfil"]] },
        q2: { p: "O perfil está atualizado (até 24 meses)?", o: [["Sim", "q3"], ["Não", "rDesat"]] },
        q3: { p: "O produto é adequado ao perfil?", o: [["Sim", "rOk"], ["Não", "q4"]] },
        q4: { p: "De quem partiu a iniciativa?", o: [["Do profissional, que quer recomendar", "rVedado"], ["Do próprio cliente, que insiste", "rAlerta"]] }
      },
      res: {
        rSemPerfil: ["Alertar e obter declaração expressa", "Sem perfil, o profissional não pode recomendar. Se o cliente quiser operar por conta própria, a instituição deve alertá-lo da ausência de perfil e obter uma declaração expressa de ciência."],
        rDesat: ["Atualizar o perfil, ou alertar e obter declaração", "Com o perfil desatualizado, não se recomenda. Para operar por iniciativa do cliente, é preciso alertar e obter uma declaração expressa antes da primeira operação."],
        rOk: ["Pode recomendar", "O produto é adequado ao perfil atualizado. Siga com transparência sobre riscos e custos."],
        rVedado: ["Não recomendar", "É vedado recomendar um produto inadequado ao perfil do cliente (CVM 30)."],
        rAlerta: ["Alertar e obter declaração expressa", "A operação pode acontecer, mas antes da primeira operação a instituição alerta sobre a inadequação e obtém a declaração expressa de ciência do cliente."]
      }
    }
  };

  function treeHTML(key) {
    return `<div class="card tool" data-tree="${key}">
      <h3>🌳 ${ARVORES[key].titulo}</h3>
      <div class="tree-body"></div>
    </div>`;
  }

  function runTree(card) {
    const t = ARVORES[card.dataset.tree];
    const body = card.querySelector(".tree-body");
    const path = [];
    const render = nodeId => {
      const crumbs = path.length
        ? `<div class="tree-path">${path.map(p => `<span class="chip">${p}</span>`).join("")}</div>` : "";
      if (t.res[nodeId]) {
        const [tit, txt] = t.res[nodeId];
        body.innerHTML = `${crumbs}<div class="tree-answer tree-step"><h4>Resposta: ${tit}</h4><p style="margin:0">${txt}</p></div>
          <div class="row" style="margin-top:12px"><button class="btn ghost sm" data-restart>↺ Recomeçar</button></div>`;
      } else {
        const n = t.nos[nodeId];
        body.innerHTML = `${crumbs}<div class="tree-step"><p style="font-weight:500">${n.p}</p>
          <div class="opts">${n.o.map((o, i) => `<button class="opt" data-go="${o[1]}" data-label="${o[0]}"><span class="L">${String.fromCharCode(65 + i)}</span><span>${o[0]}</span></button>`).join("")}</div></div>`;
      }
    };
    body.onclick = e => {
      const go = e.target.closest("[data-go]");
      if (go) { path.push(go.dataset.label); render(go.dataset.go); return; }
      if (e.target.closest("[data-restart]")) { path.length = 0; render(t.inicio); }
    };
    render(t.inicio);
  }

  /* ---------------- Calculadoras ---------------- */
  const calcs = {
    rf: {
      titulo: "💰 IR e IOF em renda fixa",
      html: `<div class="fields">
        <div class="field"><label>Valor aplicado (R$)</label><input type="text" inputmode="decimal" data-k="ap" value="10000"></div>
        <div class="field"><label>Valor bruto no resgate (R$)</label><input type="text" inputmode="decimal" data-k="br" value="11200"></div>
        <div class="field"><label>Dias corridos</label><input type="number" min="1" data-k="d" value="400"></div>
        <div class="field"><label>Produto</label><select data-k="tp"><option value="tr">Tributado (CDB, Tesouro, LC…)</option><option value="is">Isento para PF (LCI, LCA, CRI, CRA…)</option></select></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const r = v.br - v.ap;
        const d = Math.max(1, Math.round(v.d));
        const iofP = d >= 30 ? 0 : IOF[d - 1];
        const iof = r > 0 ? r * iofP / 100 : 0;
        const isento = c.querySelector('[data-k="tp"]').value === "is";
        const aliq = isento ? 0 : aliqRF(d);
        const ir = r > 0 ? (r - iof) * aliq / 100 : 0;
        const liq = v.br - iof - ir;
        return `<b class="big">${fmtBRL(liq)}</b>valor líquido<hr class="sep" style="margin:10px 0">
          Rendimento bruto: <b>${fmtBRL(r)}</b><br>
          IOF (${iofP}% do rendimento): <b>${fmtBRL(iof)}</b><br>
          IR (${isento ? "isento" : fmtPct(aliq, 1)} sobre o rendimento após IOF): <b>${fmtBRL(ir)}</b><br>
          Rentabilidade líquida no período: <b>${fmtPct((liq / v.ap - 1) * 100)}</b>`;
      }
    },
    fisher: {
      titulo: "📈 Taxa real (Fisher)",
      html: `<div class="fields">
        <div class="field"><label>Taxa nominal (% no período)</label><input type="text" inputmode="decimal" data-k="n" value="12"></div>
        <div class="field"><label>Inflação (% no período)</label><input type="text" inputmode="decimal" data-k="i" value="5"></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const r = ((1 + v.n / 100) / (1 + v.i / 100) - 1) * 100;
        return `<b class="big">${fmtPct(r)}</b>de ganho real<br><span class="muted">(1 + ${fmtPct(v.n)}) ÷ (1 + ${fmtPct(v.i)}) − 1. A subtração simples daria ${fmtPct(v.n - v.i)}, só uma aproximação.</span>`;
      }
    },
    equiv: {
      titulo: "🔁 Equivalência de taxas",
      html: `<div class="fields">
        <div class="field"><label>Taxa (%)</label><input type="text" inputmode="decimal" data-k="t" value="12"></div>
        <div class="field"><label>Período da taxa</label><select data-k="de"><option value="12">ao ano</option><option value="1">ao mês</option><option value="6">ao semestre</option></select></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const de = +c.querySelector('[data-k="de"]').value;
        const mensal = (Math.pow(1 + v.t / 100, 1 / de) - 1) * 100;
        const anual = (Math.pow(1 + mensal / 100, 12) - 1) * 100;
        const sem = (Math.pow(1 + mensal / 100, 6) - 1) * 100;
        return `Ao mês: <b>${fmtPct(mensal, 4)}</b><br>Ao semestre: <b>${fmtPct(sem, 4)}</b><br>Ao ano: <b>${fmtPct(anual, 4)}</b><br><span class="muted">Juros compostos: (1 + i)<sup>n</sup>.</span>`;
      }
    },
    sharpe: {
      titulo: "⚖️ Sharpe e Treynor",
      html: `<div class="fields">
        <div class="field"><label>Retorno da carteira (%)</label><input type="text" inputmode="decimal" data-k="rp" value="14"></div>
        <div class="field"><label>Taxa livre de risco (%)</label><input type="text" inputmode="decimal" data-k="rf" value="10"></div>
        <div class="field"><label>Desvio padrão (%)</label><input type="text" inputmode="decimal" data-k="dp" value="8"></div>
        <div class="field"><label>Beta</label><input type="text" inputmode="decimal" data-k="b" value="0,8"></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const ex = v.rp - v.rf;
        const sh = v.dp ? ex / v.dp : NaN;
        const tr = v.b ? ex / v.b : NaN;
        return `Sharpe = (${v.rp} − ${v.rf}) ÷ ${v.dp} = <b>${isFinite(sh) ? sh.toFixed(3).replace(".", ",") : "—"}</b><br>
          Treynor = (${v.rp} − ${v.rf}) ÷ ${v.b} = <b>${isFinite(tr) ? tr.toFixed(3).replace(".", ",") : "—"}</b><br>
          <span class="muted">Quanto maior, melhor a relação retorno/risco. Sharpe usa o risco total. Treynor usa o risco sistemático (beta).</span>`;
      }
    },
    reserva: {
      titulo: "🛟 Reserva de emergência",
      html: `<div class="fields">
        <div class="field"><label>Despesas mensais (R$)</label><input type="text" inputmode="decimal" data-k="dm" value="6000"></div>
        <div class="field"><label>Tipo de renda</label><select data-k="tr"><option value="6">Estável (CLT, servidor): 6 meses</option><option value="3">Muito estável: 3 meses</option><option value="12">Variável (autônomo, empresário): 12 meses</option></select></div>
        <div class="field"><label>Quanto já tem guardado (R$)</label><input type="text" inputmode="decimal" data-k="j" value="10000"></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const m = +c.querySelector('[data-k="tr"]').value;
        const alvo = v.dm * m;
        const falta = Math.max(0, alvo - v.j);
        return `<b class="big">${fmtBRL(alvo)}</b>reserva ideal (${m} meses)<br>Falta: <b>${fmtBRL(falta)}</b><br><span class="muted">Onde aplicar: Tesouro Selic, CDB com liquidez diária ou fundo DI de taxa baixa.</span>`;
      }
    },
    pgbl: {
      titulo: "🧾 Benefício fiscal do PGBL",
      html: `<div class="fields">
        <div class="field"><label>Renda bruta tributável anual (R$)</label><input type="text" inputmode="decimal" data-k="rb" value="200000"></div>
        <div class="field"><label>Alíquota marginal do IR (%)</label><input type="text" inputmode="decimal" data-k="al" value="27,5"></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const lim = v.rb * 0.12;
        return `Limite dedutível: <b>${fmtBRL(lim)}</b> por ano (12%)<br>IR diferido: até <b>${fmtBRL(lim * v.al / 100)}</b><br><span class="muted">O imposto é diferido, não perdoado: no resgate, o PGBL é tributado sobre o valor total.</span>`;
      }
    },
    rebal: {
      titulo: "🎯 Rebalanceamento",
      html: `<p class="muted" style="margin-top:-4px">Valores atuais e % alvo de cada classe.</p>
      <div class="fields">
        <div class="field"><label>Renda fixa (R$)</label><input type="text" inputmode="decimal" data-k="v1" value="72000"></div>
        <div class="field"><label>Alvo RF (%)</label><input type="text" inputmode="decimal" data-k="a1" value="70"></div>
        <div class="field"><label>Renda variável (R$)</label><input type="text" inputmode="decimal" data-k="v2" value="48000"></div>
        <div class="field"><label>Alvo RV (%)</label><input type="text" inputmode="decimal" data-k="a2" value="30"></div>
        <div class="field"><label>Exterior / outros (R$)</label><input type="text" inputmode="decimal" data-k="v3" value="0"></div>
        <div class="field"><label>Alvo outros (%)</label><input type="text" inputmode="decimal" data-k="a3" value="0"></div>
      </div><div class="out" data-out></div>`,
      calc(c, v) {
        const tot = v.v1 + v.v2 + v.v3;
        const somaA = v.a1 + v.a2 + v.a3;
        if (Math.abs(somaA - 100) > 0.01) return `<span style="color:var(--bad)">Os alvos somam ${fmtPct(somaA, 1)}. Ajuste para 100%.</span>`;
        const linha = (nome, val, a) => {
          const alvo = tot * a / 100, dif = alvo - val;
          return `${nome}: atual ${fmtPct(tot ? val / tot * 100 : 0, 1)} → alvo ${fmtPct(a, 1)} · <b style="color:${dif >= 0 ? "var(--ok)" : "var(--bad)"}">${dif >= 0 ? "comprar" : "vender"} ${fmtBRL(Math.abs(dif))}</b>`;
        };
        return `Patrimônio total: <b>${fmtBRL(tot)}</b><br>${linha("Renda fixa", v.v1, v.a1)}<br>${linha("Renda variável", v.v2, v.a2)}${v.v3 || v.a3 ? "<br>" + linha("Outros", v.v3, v.a3) : ""}`;
      }
    }
  };

  function calcHTML(key) {
    return `<div class="card tool" data-calc="${key}"><h3>${calcs[key].titulo}</h3>${calcs[key].html}</div>`;
  }
  function runCalc(card) {
    const def = calcs[card.dataset.calc];
    const update = () => {
      const v = {};
      card.querySelectorAll("input[data-k]").forEach(i => (v[i.dataset.k] = num(i)));
      card.querySelector("[data-out]").innerHTML = def.calc(card, v);
    };
    card.addEventListener("input", update);
    card.addEventListener("change", update);
    update();
  }

  /* ---------------- Cola rápida ---------------- */
  const COLA = `
  <div class="article" style="max-width:none">
  <div class="grid g2">
    <div class="card"><h3>IR: renda fixa e fundos de longo prazo</h3>
      <table><tr><th>Prazo</th><th>Alíquota</th></tr>
      <tr><td>até 180 dias</td><td>22,5%</td></tr><tr><td>181 a 360</td><td>20%</td></tr><tr><td>361 a 720</td><td>17,5%</td></tr><tr><td>acima de 720</td><td>15%</td></tr></table>
      <p class="muted" style="margin:0">IOF regressivo até o 29º dia, zero a partir do 30º. Come-cotas no último dia útil de maio e novembro: 15% (LP) e 20% (CP).</p></div>
    <div class="card"><h3>Previdência regressiva</h3>
      <table><tr><th>Prazo</th><th>Alíquota</th></tr>
      <tr><td>até 2 anos</td><td>35%</td></tr><tr><td>2 a 4</td><td>30%</td></tr><tr><td>4 a 6</td><td>25%</td></tr><tr><td>6 a 8</td><td>20%</td></tr><tr><td>8 a 10</td><td>15%</td></tr><tr><td>acima de 10</td><td>10%</td></tr></table></div>
    <div class="card"><h3>Renda variável</h3>
      <table><tr><th>Operação</th><th>IR</th></tr>
      <tr><td>Ações (swing)</td><td>15%, isenção para vendas até R$ 20 mil/mês</td></tr>
      <tr><td>Day trade</td><td>20%</td></tr><tr><td>FII (ganho de capital)</td><td>20%</td></tr>
      <tr><td>ETF de ações</td><td>15%, sem isenção</td></tr><tr><td>Fundo de ações</td><td>15% no resgate</td></tr>
      <tr><td>Cripto</td><td>Isento até R$ 35 mil/mês em vendas</td></tr></table></div>
    <div class="card"><h3>Números que caem</h3>
      <table>
      <tr><td>FGC</td><td>R$ 250 mil por CPF por conglomerado · teto R$ 1 mi a cada 4 anos</td></tr>
      <tr><td>Qualificado</td><td>&gt; R$ 1 milhão em aplicações</td></tr>
      <tr><td>Profissional</td><td>&gt; R$ 10 milhões em aplicações</td></tr>
      <tr><td>Suitability</td><td>Atualizar a cada ≤ 24 meses</td></tr>
      <tr><td>PGBL</td><td>Dedução de até 12% da renda bruta tributável</td></tr>
      <tr><td>COAF</td><td>Comunicar em até 24 h</td></tr>
      <tr><td>Classe Ações</td><td>≥ 67% em ações</td></tr>
      <tr><td>Classe Cambial</td><td>≥ 80% em moeda estrangeira</td></tr>
      <tr><td>Tag along</td><td>80% (lei) · 100% (Novo Mercado)</td></tr>
      <tr><td>Dividendo mínimo</td><td>25% (estatuto omisso)</td></tr>
      <tr><td>Aprovação C-Pro R</td><td>32 de 45 (≈ 71%)</td></tr></table></div>
    <div class="card"><h3>Fórmulas</h3>
      <div class="formula">Taxa real = (1 + nominal) ÷ (1 + inflação) − 1</div>
      <div class="formula">Sharpe = (Rp − Rf) ÷ σp</div>
      <div class="formula">Treynor = (Rp − Rf) ÷ βp</div>
      <div class="formula">CAPM: E(R) = Rf + β × (Rm − Rf)</div>
      <div class="formula">Taxa equivalente = (1 + i)<sup>n</sup> − 1</div>
      <div class="formula">Poupança: Selic &gt; 8,5% → 0,5% a.m. + TR · senão 70% da Selic + TR</div></div>
    <div class="card"><h3>FGC: cobre × não cobre</h3>
      <p><b style="color:var(--ok)">Cobre:</b> depósitos à vista, poupança, CDB, RDB, LC, LH, LCI, LCA, LIG e compromissadas de ligadas.</p>
      <p style="margin:0"><b style="color:var(--bad)">Não cobre:</b> LF, debêntures, CRI, CRA, COE, fundos, previdência, títulos públicos e ações.</p></div>
  </div></div>`;

  window.FERRAMENTAS = {
    render() {
      return `
      <div class="page-head"><div><span class="eyebrow">Ferramentas</span><h1>Calculadoras, árvores e cola</h1>
      <p>Pratique o raciocínio das questões de cálculo e de árvore de decisão. Mude os números e veja o resultado na hora.</p></div></div>
      <h2>🌳 Árvores de decisão</h2>
      <div class="grid g2" style="margin-bottom:28px">${Object.keys(ARVORES).map(treeHTML).join("")}</div>
      <h2>🧮 Calculadoras</h2>
      <div class="grid g2" style="margin-bottom:28px">${Object.keys(calcs).map(calcHTML).join("")}</div>
      <h2 id="cola">📌 Cola rápida para revisar na véspera</h2>
      ${COLA}`;
    },
    init(root) {
      root.querySelectorAll("[data-tree]").forEach(runTree);
      root.querySelectorAll("[data-calc]").forEach(runCalc);
    }
  };
})();
