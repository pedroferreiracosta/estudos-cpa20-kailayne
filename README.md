# 📈 Rumo à CPA-20 · C-Pro R

Plataforma de estudos completa para a certificação **CPA-20 da ANBIMA**, que desde 2026 se chama **C-Pro R**. Foi feita para a **Kailayne** passar na prova. ♥

> **Acesse:** https://pedroferreiracosta.github.io/estudos-cpa20-kailayne/
> Funciona no computador e no celular. O progresso fica salvo no próprio navegador. Dica: no celular, use "Adicionar à tela de início" para abrir como um app.

---

## A prova

| | |
|---|---|
| **Questões** | 45: 30 de múltipla escolha contextualizada e 15 em cases, minicases, árvores de decisão e resposta construída |
| **Duração** | 2h30 |
| **Aprovação** | 32 acertos (≈ 71%) |
| **Blocos** | Prospecção e relacionamento (20%) · Análise de informações do cliente (20%) · **Indicação de investimentos (40%)** · Análise de portfólio e monitoramento (20%) |

## O que tem na plataforma

- 🏠 **Painel**: contagem regressiva, missão do dia, desempenho por bloco e progresso geral.
- 🗓️ **Cronograma de 5 semanas** ajustado ao peso de cada bloco, com tarefas diárias para marcar como feitas.
  - 10 a 16/11: Bloco 2, análise do cliente
  - 17 a 23/11: Bloco 1, relacionamento
  - 24 a 30/11: Bloco 3, parte 1 (renda fixa e fundos)
  - 1 a 7/12: Bloco 3, parte 2, mais o Bloco 4
  - 8 a 14/12: simulados e caderno de erros
- 📚 **21 resumos** em 4 blocos, com tabelas, fórmulas, pegadinhas e prioridade marcada (máxima, média ou só o básico).
- 📝 **140 questões autorais** no estilo da nova prova:
  - 110 de múltipla escolha contextualizada
  - 15 cases e 9 árvores de decisão (com etapas encadeadas)
  - 6 de resposta construída (cálculos)
- ⏱️ **Simulado completo** com 45 questões em 2h30, na mesma proporção de blocos da prova. Prioriza as questões que você ainda não viu.
- ⚡ **Simulado rápido** com 15 questões em 50 minutos.
- 🎯 **Treino por bloco e por tema**, com correção comentada na hora.
- ❌ **Caderno de erros automático**: errou, entra. Acertou de novo, sai.
- 🃏 **96 flashcards** com repetição espaçada (caixas de Leitner).
- 🧮 **7 calculadoras**: IR e IOF em renda fixa, taxa real (Fisher), equivalência de taxas, Sharpe e Treynor, reserva de emergência, benefício do PGBL e rebalanceamento.
- 🌳 **4 árvores de decisão interativas**: PGBL ou VGBL, progressiva ou regressiva, investir ou quitar dívida, e cliente que quer produto fora do perfil.
- 📌 **Cola rápida** com todas as tabelas e números que caem.
- 🌙 Tema claro e escuro, layout para celular e atalhos de teclado.

## Como usar localmente

Não precisa instalar nada: é HTML, CSS e JavaScript puro, sem etapa de build.

```bash
git clone https://github.com/pedroferreiracosta/estudos-cpa20-kailayne.git
```

```bash
open estudos-cpa20-kailayne/index.html
```

## Estrutura

```
index.html
assets/css/style.css      # design system (claro e escuro)
assets/js/app.js          # roteamento, simulados, flashcards, estatísticas
assets/js/ferramentas.js  # calculadoras, árvores de decisão, cola
data/conteudo.js          # resumos dos 4 blocos
data/cronograma.js        # plano de 5 semanas
data/flashcards.js        # flashcards
data/questoes-b1..b4.js   # banco de questões por bloco
```

## Aviso

O conteúdo segue as regras vigentes na data de criação (novembro de 2026). A legislação muda: por exemplo, a tributação de dividendos (Lei 15.270/2025), o JCP e os prazos de LCI e LCA. Confira sempre o **edital e o conteúdo programático oficial da ANBIMA** antes da prova. As questões são autorais e não reproduzem provas oficiais.

---

Feito com carinho para a Kailayne. Bons estudos e boa prova! 🍀
