/* =========================================================
   Cronograma ajustado ao peso dos blocos (5 semanas)
   Ordem: Bloco 2 → Bloco 1 → Bloco 3 (parte 1) → Bloco 3 (parte 2) + Bloco 4 → Simulados
   Cada dia é uma lista de tarefas [texto, link opcional].
   ========================================================= */
window.CRONOGRAMA = {
  ano: 2026,
  semanas: [
    {
      titulo: "Bloco 2: Análise do cliente", inicio: "2026-11-10", fim: "2026-11-16", bloco: 2,
      foco: "Começar pelo bloco que dá base para todo o resto: entender o cliente antes de indicar produto.",
      dias: [
        [["Ler: Perfil conservador, moderado e arrojado", "#/conteudo/b2-perfil"], ["Flashcards do Bloco 2 (1ª rodada)", "#/flashcards/2"]],
        [["Ler: Investidor comum, qualificado e profissional", "#/conteudo/b2-categorias"], ["Treino: 10 questões do Bloco 2", "#/treino/2/10"]],
        [["Ler: Ciclo de vida do investidor", "#/conteudo/b2-ciclo"], ["Revisar a tabela de categorias de investidor", "#/conteudo/b2-categorias"]],
        [["Ler: Reserva de emergência, liquidez e endividamento", "#/conteudo/b2-reserva"], ["Calculadora de reserva de emergência", "#/ferramentas"]],
        [["Treino completo do Bloco 2 (todas as questões)", "#/treino/2/0"], ["Anotar 3 pontos que errou", null]],
        [["Árvore de decisão: investir ou quitar dívida?", "#/ferramentas"], ["Flashcards do Bloco 2 (2ª rodada)", "#/flashcards/2"]],
        [["Caderno de erros da semana", "#/erros"], ["Descanso ativo: só revisar os resumos", "#/conteudo/bloco/2"]]
      ]
    },
    {
      titulo: "Bloco 1: Relacionamento", inicio: "2026-11-17", fim: "2026-11-23", bloco: 1,
      foco: "Finanças comportamentais e regras de distribuição: questões de interpretação, que exigem ler o comportamento do cliente.",
      dias: [
        [["Ler: Finanças comportamentais (heurísticas e vieses)", "#/conteudo/b1-comportamentais"]],
        [["Flashcards do Bloco 1", "#/flashcards/1"], ["Treino: 10 questões do Bloco 1", "#/treino/1/10"]],
        [["Ler: Suitability e regras (CVM 30, Código ANBIMA, PLD)", "#/conteudo/b1-regras"], ["Árvore de decisão: cliente quer produto inadequado", "#/ferramentas"]],
        [["Ler: Funil de prospecção", "#/conteudo/b1-funil"], ["Ler: Bets, o básico", "#/conteudo/b1-bets"]],
        [["Treino completo do Bloco 1", "#/treino/1/0"]],
        [["Simulado rápido (15 questões, 50 min)", "#/novo/rapido"]],
        [["Caderno de erros", "#/erros"], ["Revisão: Blocos 1 e 2 nos flashcards", "#/flashcards/0"]]
      ]
    },
    {
      titulo: "Bloco 3, parte 1: Renda fixa e fundos", inicio: "2026-11-24", fim: "2026-11-30", bloco: 3,
      foco: "A semana mais importante: 40% da prova está no Bloco 3. Prioridade máxima para renda fixa, tributação e fundos.",
      dias: [
        [["Ler: Fundamentos (juros, inflação, marcação a mercado, riscos)", "#/conteudo/b3-fundamentos"], ["Calculadora de taxa real (Fisher)", "#/ferramentas"]],
        [["Ler: Títulos bancários, poupança e FGC", "#/conteudo/b3-bancarios"]],
        [["Ler: Títulos públicos, debêntures, CRI e CRA", "#/conteudo/b3-credito"], ["Treino: 10 questões do Bloco 3", "#/treino/3/10"]],
        [["Ler: Tributação dos investimentos", "#/conteudo/b3-tributacao"], ["Calculadora de IR e IOF em renda fixa", "#/ferramentas"]],
        [["Ler: Fundos de investimento (CVM 175), FII e ETF", "#/conteudo/b3-fundos"]],
        [["Treino: 20 questões do Bloco 3", "#/treino/3/20"], ["Revisar a Cola (tabelas de IR)", "#/ferramentas"]],
        [["Flashcards do Bloco 3", "#/flashcards/3"], ["Caderno de erros", "#/erros"]]
      ]
    },
    {
      titulo: "Bloco 3, parte 2 + Bloco 4", inicio: "2026-12-01", fim: "2026-12-07", bloco: 4,
      foco: "Previdência (cai muito), renda variável e COE, depois a carteira: risco, retorno e rebalanceamento.",
      dias: [
        [["Ler: Previdência, PGBL × VGBL", "#/conteudo/b3-previdencia"], ["Árvores: PGBL ou VGBL? Progressiva ou regressiva?", "#/ferramentas"]],
        [["Ler: Renda variável, dividendos e JCP", "#/conteudo/b3-rv"], ["Ler: COE", "#/conteudo/b3-coe"]],
        [["Ler: Exterior, cripto e derivativos (básico)", "#/conteudo/b3-exterior"], ["Treino completo do Bloco 3", "#/treino/3/0"]],
        [["Ler: Risco × retorno, Sharpe, Treynor e beta", "#/conteudo/b4-risco"], ["Calculadora de Sharpe e Treynor", "#/ferramentas"]],
        [["Ler: Diversificação e rebalanceamento", "#/conteudo/b4-rebal"], ["Ler: Portabilidade", "#/conteudo/b4-portabilidade"]],
        [["Ler: Eventos de vida", "#/conteudo/b4-eventos"], ["Treino completo do Bloco 4", "#/treino/4/0"]],
        [["Simulado rápido (15 questões)", "#/novo/rapido"], ["Caderno de erros", "#/erros"]]
      ]
    },
    {
      titulo: "Simulados e caderno de erros", inicio: "2026-12-08", fim: "2026-12-14", bloco: 0,
      foco: "Ritmo de prova: 45 questões em 2h30. Simular as condições reais e atacar os pontos fracos.",
      dias: [
        [["Simulado completo nº 1 (45 questões, 2h30)", "#/novo/completo"]],
        [["Corrigir o simulado nº 1 e reler os tópicos do bloco mais fraco", "#/simulados"], ["Caderno de erros", "#/erros"]],
        [["Simulado completo nº 2", "#/novo/completo"]],
        [["Flashcards de todos os blocos", "#/flashcards/0"], ["Caderno de erros", "#/erros"]],
        [["Simulado completo nº 3", "#/novo/completo"]],
        [["Revisar a Cola: tabelas e fórmulas", "#/ferramentas"], ["Caderno de erros (zerar!)", "#/erros"]],
        [["Véspera: revisão leve, separar documentos e dormir cedo", null], ["Você está pronta. Confia no processo!", null]]
      ]
    }
  ]
};
