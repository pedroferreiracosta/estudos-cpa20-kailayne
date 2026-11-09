/* Bloco 4 — Análise de portfólio e monitoramento da carteira (20%) */
window.QUESTOES = window.QUESTOES || [];
window.QUESTOES.push(
  /* ===================== MÚLTIPLA ESCOLHA ===================== */
  { id: "b4-q01", bloco: 4, tema: "Rebalanceamento", tipo: "mc", nivel: 1,
    enunciado: "A carteira de Joana tinha alocação-alvo de 70% em renda fixa e 30% em ações. Após uma forte alta da bolsa, as ações passaram a representar 42%. Rebalancear a carteira significa:",
    alternativas: ["Vender parte das ações e comprar renda fixa até voltar à alocação-alvo", "Manter a nova alocação, já que as ações estão performando bem", "Vender toda a renda fixa para aproveitar a alta das ações", "Alterar o perfil de Joana para arrojado"],
    correta: 0,
    explicacao: "Rebalancear é <b>retornar à alocação-alvo</b> definida no planejamento: reduz-se o que subiu acima do peso (ações) e aumenta-se o que ficou abaixo (renda fixa). Isso mantém o risco compatível com o perfil." },

  { id: "b4-q02", bloco: 4, tema: "Rebalanceamento", tipo: "mc", nivel: 2,
    enunciado: "Um cliente com aportes mensais regulares quer rebalancear a carteira sem gerar imposto de renda. A estratégia mais eficiente é:",
    alternativas: ["Vender os ativos que mais subiram no último dia útil do mês", "Direcionar os novos aportes para as classes de ativos que estão abaixo do peso-alvo", "Resgatar toda a carteira e reaplicar na proporção correta", "Esperar que o mercado devolva naturalmente a alocação original"],
    correta: 1,
    explicacao: "Usar os <b>novos aportes</b> nas classes subalocadas corrige os pesos <b>sem vender</b>, evitando IR, custos de transação e, em fundos, novos prazos de cotização." },

  { id: "b4-q03", bloco: 4, tema: "Rebalanceamento", tipo: "mc", nivel: 2,
    enunciado: "Uma política de rebalanceamento por bandas de tolerância determina que a carteira:",
    alternativas: ["Seja rebalanceada obrigatoriamente todo mês, independentemente dos pesos", "Nunca seja rebalanceada, para evitar custos", "Seja rebalanceada quando o peso de uma classe se afastar do alvo além de um limite predefinido", "Seja rebalanceada apenas quando o cliente solicitar"],
    correta: 2,
    explicacao: "No rebalanceamento <b>por bandas</b>, define-se um desvio máximo (ex.: ±5 p.p.). Ultrapassado o limite, rebalanceia-se. O rebalanceamento <b>por calendário</b> ocorre em datas fixas (ex.: semestralmente)." },

  { id: "b4-q04", bloco: 4, tema: "Rebalanceamento", tipo: "mc", nivel: 2,
    enunciado: "Ao decidir sobre a frequência de rebalanceamento, o profissional deve considerar que rebalanceamentos muito frequentes:",
    alternativas: ["Eliminam o risco de mercado da carteira", "São obrigatórios pela Resolução CVM 30", "Garantem retorno superior ao benchmark", "Podem elevar custos de transação e o imposto de renda, reduzindo o retorno líquido"],
    correta: 3,
    explicacao: "Cada venda pode gerar <b>custos e IR</b> (e, em fundos, prazos de cotização). O ideal é equilibrar o controle do risco com o custo de rebalancear." },

  { id: "b4-q05", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 1,
    enunciado: "A diversificação de uma carteira é capaz de reduzir principalmente o:",
    alternativas: ["Risco sistemático", "Risco não sistemático (específico)", "Risco de mercado", "Risco de variação da taxa Selic"],
    correta: 1,
    explicacao: "A diversificação reduz o <b>risco não sistemático</b> (específico de cada empresa ou setor). O <b>risco sistemático</b> (de mercado, conjuntural) afeta todos os ativos e não é eliminado pela diversificação." },

  { id: "b4-q06", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 2,
    enunciado: "Dois ativos com coeficiente de correlação igual a −1 apresentam:",
    alternativas: ["Movimentos perfeitamente opostos, permitindo, em tese, máxima redução de risco quando combinados", "Movimentos idênticos, sem benefício de diversificação", "Nenhuma relação entre seus retornos", "Retornos sempre negativos"],
    correta: 0,
    explicacao: "Correlação <b>−1</b> = movimentos perfeitamente opostos (máximo benefício de diversificação). <b>+1</b> = movimentos idênticos (sem benefício). <b>0</b> = sem relação linear." },

  { id: "b4-q07", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 2,
    enunciado: "Para reduzir a volatilidade de uma carteira composta só por ações brasileiras, o assessor deve buscar acrescentar ativos que tenham, em relação a essas ações:",
    alternativas: ["Correlação próxima de +1", "Retorno histórico mais alto, independentemente da correlação", "Maior beta em relação ao Ibovespa", "Correlação baixa ou negativa"],
    correta: 3,
    explicacao: "Quanto <b>menor a correlação</b> entre os ativos, maior o benefício da diversificação. Ativos com correlação próxima de +1 se movem juntos e pouco reduzem o risco." },

  { id: "b4-q08", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 1,
    enunciado: "É exemplo de risco sistemático:",
    alternativas: ["Uma fraude contábil descoberta em uma empresa específica", "A greve de funcionários de uma única fábrica", "Uma alta inesperada da taxa básica de juros que afeta todo o mercado", "A perda de uma patente por uma empresa farmacêutica"],
    correta: 2,
    explicacao: "O <b>risco sistemático</b> decorre de fatores macroeconômicos e políticos (juros, inflação, crises) e atinge todo o mercado. Os demais exemplos são riscos específicos, diversificáveis." },

  { id: "b4-q09", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 2,
    enunciado: "Considere a taxa livre de risco de 10% a.a. O Fundo A rendeu 13% com volatilidade de 5%; o Fundo B rendeu 16% com volatilidade de 8%. Pelo Índice de Sharpe:",
    alternativas: ["O Fundo A é melhor, com Sharpe de 0,60 contra 0,75 do B", "O Fundo B é melhor, com Sharpe de 0,75 contra 0,60 do A", "Os dois fundos têm o mesmo Sharpe", "Não é possível comparar sem conhecer o beta"],
    correta: 1,
    explicacao: "Sharpe = (Rp − Rf) ÷ σ. A: (13 − 10) ÷ 5 = <b>0,60</b>. B: (16 − 10) ÷ 8 = <b>0,75</b>. O Fundo B entregou mais retorno excedente por unidade de risco total. O beta é usado no Treynor, não no Sharpe." },

  { id: "b4-q10", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 1,
    enunciado: "O Índice de Sharpe mede:",
    alternativas: ["O retorno excedente ao ativo livre de risco por unidade de risco total (desvio padrão)", "O retorno excedente por unidade de risco sistemático (beta)", "A sensibilidade do ativo às variações do mercado", "A diferença entre o retorno do fundo e o do benchmark"],
    correta: 0,
    explicacao: "<b>Sharpe = (Rp − Rf) ÷ σp</b>: retorno acima da taxa livre de risco por unidade de <b>risco total</b>. Quanto maior, melhor a relação risco-retorno. O índice que usa o beta é o Treynor." },

  { id: "b4-q11", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 2,
    enunciado: "A principal diferença entre os índices de Sharpe e de Treynor é que o Treynor:",
    alternativas: ["Usa o retorno nominal, e não o excedente", "Considera o desvio padrão como medida de risco", "Só pode ser usado para fundos de renda fixa", "Usa o beta (risco sistemático) como medida de risco"],
    correta: 3,
    explicacao: "<b>Treynor = (Rp − Rf) ÷ β</b>. Por usar apenas o risco sistemático, é mais adequado para avaliar carteiras já bem diversificadas. O Sharpe usa o risco total (desvio padrão)." },

  { id: "b4-q12", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 1,
    enunciado: "Uma ação com beta de 1,3 em relação ao Ibovespa tende a:",
    alternativas: ["Subir 1,3% sempre que o Ibovespa subir 1%, com garantia", "Ter risco 30% menor que o do mercado", "Oscilar, em média, mais do que o mercado, tanto na alta quanto na baixa", "Não ter relação com o Ibovespa"],
    correta: 2,
    explicacao: "<b>Beta > 1</b>: o ativo é mais sensível que o mercado (agressivo). Em média, se o Ibovespa varia 10%, a ação tende a variar 13% — mas é uma tendência estatística, não garantia." },

  { id: "b4-q13", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 2,
    enunciado: "Em um cenário de expectativa de queda da bolsa, um investidor que deseja manter ações, mas reduzir a sensibilidade ao mercado, deve preferir ações com beta:",
    alternativas: ["Menor que 1", "Igual a 1", "Maior que 1", "Negativo e acima de 2"],
    correta: 0,
    explicacao: "Ações com <b>beta menor que 1</b> são <b>defensivas</b>: tendem a cair menos que o mercado nas quedas (e subir menos nas altas)." },

  { id: "b4-q14", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 2,
    enunciado: "Pelo CAPM, qual o retorno esperado de uma ação com beta 1,2, considerando taxa livre de risco de 10% a.a. e retorno esperado do mercado de 15% a.a.?",
    alternativas: ["15,0%", "16,0%", "18,0%", "12,0%"],
    correta: 1,
    explicacao: "E(R) = Rf + β × (Rm − Rf) = 10% + 1,2 × (15% − 10%) = 10% + 6% = <b>16%</b>." },

  { id: "b4-q15", bloco: 4, tema: "Indicadores de desempenho", tipo: "mc", nivel: 3,
    enunciado: "Um fundo rendeu 18% no ano, enquanto o retorno exigido pelo CAPM, dado seu beta, era de 16%. Esse resultado indica:",
    alternativas: ["Tracking error de 2%", "Índice de Sharpe de 2", "Beta negativo", "Alfa de Jensen positivo de 2 p.p., sinal de geração de valor pela gestão"],
    correta: 3,
    explicacao: "O <b>alfa de Jensen</b> = retorno obtido − retorno exigido pelo CAPM = 18% − 16% = <b>+2 p.p.</b>. Alfa positivo indica desempenho acima do esperado para o risco sistemático assumido." },

  { id: "b4-q16", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 1,
    enunciado: "No mercado financeiro, a volatilidade de um ativo é normalmente medida pelo:",
    alternativas: ["Índice de Sharpe", "Beta", "Desvio padrão dos retornos", "Dividend yield"],
    correta: 2,
    explicacao: "A <b>volatilidade</b> é medida pelo <b>desvio padrão</b> dos retornos: quanto maior, mais os retornos se dispersam em torno da média, ou seja, maior o risco." },

  { id: "b4-q17", bloco: 4, tema: "Monitoramento", tipo: "mc", nivel: 2,
    enunciado: "Um fundo indexado ao Ibovespa apresentou tracking error elevado no último ano. Isso significa que:",
    alternativas: ["O fundo superou o Ibovespa com folga", "O fundo se afastou bastante do comportamento do índice que deveria replicar", "O fundo teve baixa volatilidade", "O fundo teve beta igual a zero"],
    correta: 1,
    explicacao: "O <b>tracking error</b> mede o quanto os retornos de uma carteira se desviam dos do benchmark. Em um fundo passivo, tracking error alto é um <b>ponto negativo</b>, pois ele deveria replicar o índice." },

  { id: "b4-q18", bloco: 4, tema: "Diversificação e risco", tipo: "mc", nivel: 2,
    enunciado: "Uma carteira apresenta VaR diário de R$ 50 mil com 95% de confiança. A interpretação correta é:",
    alternativas: ["Em condições normais de mercado, espera-se que a perda em um dia não supere R$ 50 mil em 95% dos casos", "A carteira nunca perderá mais de R$ 50 mil em um dia", "A carteira ganhará R$ 50 mil em 95% dos dias", "Há 95% de chance de perder exatamente R$ 50 mil"],
    correta: 0,
    explicacao: "O <b>VaR</b> estima a perda máxima esperada em um horizonte e nível de confiança, <b>em condições normais</b>. Em 5% dos dias a perda pode superar esse valor, inclusive por muito." },

  { id: "b4-q19", bloco: 4, tema: "Portabilidade", tipo: "mc", nivel: 2,
    enunciado: "Sobre a portabilidade em planos de previdência complementar aberta, é correto afirmar:",
    alternativas: ["É permitido portar de PGBL para VGBL com isenção de IR", "A portabilidade gera incidência de IR sobre os rendimentos", "Só é permitida entre planos de uma mesma seguradora", "Ocorre entre planos da mesma modalidade (PGBL para PGBL, VGBL para VGBL), sem incidência de IR"],
    correta: 3,
    explicacao: "A portabilidade é feita entre planos <b>da mesma família</b> (PGBL→PGBL, VGBL→VGBL), inclusive entre seguradoras diferentes, <b>sem incidência de IR</b>, pois os recursos não passam pelo participante." },

  { id: "b4-q20", bloco: 4, tema: "Portabilidade", tipo: "mc", nivel: 3,
    enunciado: "Quanto ao regime de tributação na portabilidade de previdência, é correto afirmar que:",
    alternativas: ["Recursos no regime regressivo podem ser portados para o progressivo a qualquer momento", "A portabilidade sempre mantém o prazo acumulado no regime regressivo, mesmo vindo do progressivo", "Recursos do regime progressivo podem ser portados para um plano no regressivo, mas o regressivo não pode voltar para o progressivo", "O regime de tributação não tem relação com a portabilidade"],
    correta: 2,
    explicacao: "É permitido portar do <b>progressivo para o regressivo</b> (o prazo para a alíquota regressiva passa a contar a partir da portabilidade). O caminho inverso — <b>regressivo para progressivo</b> — não é permitido." },

  { id: "b4-q21", bloco: 4, tema: "Portabilidade", tipo: "mc", nivel: 2,
    enunciado: "Um cliente quer levar suas ações e títulos do Tesouro Direto de uma corretora para outra sem vendê-los. A operação adequada é:",
    alternativas: ["Vender os ativos e recomprá-los na nova corretora", "Solicitar a transferência de custódia, sem venda e sem incidência de IR", "Pedir resgate antecipado ao Tesouro Nacional", "Não é possível transferir ativos entre corretoras"],
    correta: 1,
    explicacao: "A <b>transferência de custódia</b> leva os ativos para outra instituição sem venda, mantendo o preço médio e <b>sem gerar IR</b>. Vender e recomprar geraria tributação e custos." },

  { id: "b4-q22", bloco: 4, tema: "Eventos de vida", tipo: "mc", nivel: 2,
    enunciado: "Na ausência de pacto antenupcial, o regime de bens que se aplica ao casamento no Brasil é o da:",
    alternativas: ["Comunhão universal de bens", "Separação total de bens", "Participação final nos aquestos", "Comunhão parcial de bens"],
    correta: 3,
    explicacao: "O regime legal é a <b>comunhão parcial</b>: bens adquiridos onerosamente durante o casamento são comuns; bens anteriores e os recebidos por herança ou doação permanecem particulares." },

  /* ===================== CASES ===================== */
  { id: "b4-c01", bloco: 4, tema: "Indicadores de desempenho", tipo: "case", nivel: 2,
    contexto: "Cláudio, perfil moderado, quer escolher um fundo multimercado para compor a carteira. A taxa livre de risco é de 11% a.a. O Fundo X rendeu 15% com volatilidade de 4%. O Fundo Y rendeu 19% com volatilidade de 10%. O Fundo Z rendeu 13% com volatilidade de 2,5%.",
    enunciado: "Considerando o Índice de Sharpe, qual fundo apresentou a melhor relação risco-retorno?",
    alternativas: ["Fundo Y, por ter o maior retorno absoluto", "Fundo Z, por ter a menor volatilidade", "Fundo X, com Sharpe de 1,00", "Os três têm a mesma relação risco-retorno"],
    correta: 2,
    explicacao: "X: (15 − 11) ÷ 4 = <b>1,00</b>. Y: (19 − 11) ÷ 10 = 0,80. Z: (13 − 11) ÷ 2,5 = 0,80. O <b>Fundo X</b> entrega mais retorno excedente por unidade de risco. Maior retorno ou menor volatilidade isoladamente não definem a melhor relação." },

  { id: "b4-c02", bloco: 4, tema: "Eventos de vida", tipo: "case", nivel: 2,
    contexto: "Ana, 44 anos, concluiu o divórcio e passou a administrar sozinha R$ 600 mil recebidos na partilha. Antes, as decisões eram tomadas pelo ex-marido, com carteira arrojada. Ela agora é a única responsável pelas despesas da casa e dos dois filhos adolescentes, que farão faculdade em 3 e 5 anos.",
    enunciado: "Qual a primeira providência mais adequada do assessor?",
    alternativas: ["Reavaliar o perfil de Ana e seus novos objetivos, como reserva de emergência e o custeio da faculdade dos filhos, antes de definir a alocação", "Manter a carteira arrojada, que vinha dando bons resultados", "Aplicar todo o valor em previdência para fins sucessórios", "Aguardar 24 meses para atualizar o perfil, conforme a regulação"],
    correta: 0,
    explicacao: "<b>Eventos de vida</b> (divórcio, casamento, filhos, herança) mudam objetivos, renda, despesas e tolerância a risco. O perfil e o planejamento devem ser <b>reavaliados</b> imediatamente; o prazo de 24 meses é o máximo, não o mínimo." },

  { id: "b4-c03", bloco: 4, tema: "Monitoramento", tipo: "case", nivel: 3,
    contexto: "Na revisão anual, Gustavo nota que seu fundo de ações, cujo benchmark é o Ibovespa, rendeu 8% no ano, enquanto o Ibovespa subiu 14%. Nos três anos anteriores, o fundo também ficou abaixo do índice, cobrando taxa de administração de 2% a.a. e com taxa de performance prevista no regulamento.",
    enunciado: "Qual a análise mais adequada?",
    alternativas: ["O fundo foi bem, pois teve retorno positivo no ano", "O desempenho deve ser comparado ao benchmark: o fundo ficou consistentemente abaixo do Ibovespa, o que justifica reavaliar sua permanência na carteira", "O fundo deve ser mantido, pois prevê taxa de performance, sinal de boa gestão", "O resultado é irrelevante, pois fundos de ações não têm benchmark"],
    correta: 1,
    explicacao: "O <b>monitoramento</b> compara o resultado ao <b>benchmark</b>. Ficar abaixo do Ibovespa por quatro anos seguidos, com custos elevados, é sinal para <b>reavaliar</b> o fundo — considerando, na troca, os efeitos tributários." },

  /* ===================== ÁRVORES DE DECISÃO ===================== */
  { id: "b4-t01", bloco: 4, tema: "Rebalanceamento", tipo: "arvore", nivel: 3,
    contexto: "A política de investimentos de Renato prevê 60% em renda fixa e 40% em renda variável, com bandas de ±5 p.p. e revisão semestral. Na revisão, a carteira de R$ 1.000.000 está com R$ 520 mil em renda fixa e R$ 480 mil em renda variável. Renato fará um aporte de R$ 100 mil no mês seguinte.",
    etapas: [
      { enunciado: "Etapa 1 — A carteira está fora da banda de tolerância?",
        alternativas: ["Não, a renda variável está em 40%", "Sim, a renda variável está em 48%, acima do limite de 45%", "Sim, mas apenas a renda fixa está fora da banda"],
        correta: 1,
        explicacao: "R$ 480 mil ÷ R$ 1.000.000 = <b>48%</b>, acima do limite de 40% + 5 p.p. = 45%. A renda fixa, com 52%, também está abaixo do piso de 55%." },
      { enunciado: "Etapa 2 — Com o aporte de R$ 100 mil todo direcionado à renda fixa, como fica a carteira?",
        alternativas: ["RF 56,4% e RV 43,6% — dentro das bandas, sem necessidade de vender ativos", "RF 60% e RV 40% — exatamente no alvo", "RF 52% e RV 48% — ainda fora da banda"],
        correta: 0,
        explicacao: "Total = R$ 1,1 milhão. RF = 620 ÷ 1.100 = <b>56,4%</b>; RV = 480 ÷ 1.100 = <b>43,6%</b>. Ambas voltam para dentro das bandas." },
      { enunciado: "Etapa 3 — Qual a vantagem dessa estratégia em relação a vender renda variável?",
        alternativas: ["Garantir que a renda variável continue subindo", "Eliminar o risco sistemático", "Evitar custos de transação e a incidência de IR sobre ganhos realizados na venda"],
        correta: 2,
        explicacao: "Rebalancear com <b>aportes</b> evita vender ativos com ganho, poupando <b>IR e custos</b>, e ainda assim devolve a carteira às bandas definidas." }
    ] },

  { id: "b4-t02", bloco: 4, tema: "Eventos de vida", tipo: "arvore", nivel: 2,
    contexto: "Paula e Thiago, ambos com 33 anos, casados em comunhão parcial, acabam de ter o primeiro filho. Eles têm reserva de emergência de 6 meses, carteira moderada de R$ 250 mil e um VGBL em nome de Thiago, cujo beneficiário indicado ainda é a mãe dele.",
    etapas: [
      { enunciado: "Etapa 1 — Qual o primeiro impacto do nascimento do filho a ser considerado no planejamento?",
        alternativas: ["Nenhum, pois a carteira já está diversificada", "Aumento das despesas e surgimento de novos objetivos, como a educação da criança, exigindo revisão do planejamento", "Necessidade de migrar toda a carteira para ações"],
        correta: 1,
        explicacao: "Filhos elevam as <b>despesas</b> (o que exige revisar a reserva) e criam <b>novos objetivos</b> de longo prazo, como educação." },
      { enunciado: "Etapa 2 — Em relação ao VGBL, qual ajuste é recomendável?",
        alternativas: ["Revisar a indicação de beneficiários para refletir a nova estrutura familiar", "Resgatar o VGBL para pagar as despesas do parto", "Fazer portabilidade para um PGBL"],
        correta: 0,
        explicacao: "A previdência é paga diretamente aos <b>beneficiários indicados</b>, fora do inventário. Com o nascimento do filho, a indicação deve ser <b>revista</b>. Portabilidade de VGBL para PGBL não é permitida." },
      { enunciado: "Etapa 3 — Para o objetivo de educação, com horizonte de cerca de 17 anos, qual estratégia é mais coerente?",
        alternativas: ["Aplicar em produtos de liquidez diária sem proteção contra a inflação", "Concentrar em uma única ação de crescimento", "Aportes regulares em ativos de longo prazo com proteção contra a inflação, como títulos IPCA+, compatíveis com o perfil moderado"],
        correta: 2,
        explicacao: "Com horizonte longo e custo futuro corrigido pela inflação, <b>aportes regulares</b> em ativos <b>atrelados à inflação</b> e diversificados atendem melhor o objetivo." }
    ] },

  /* ===================== RESPOSTA CONSTRUÍDA ===================== */
  { id: "b4-a01", bloco: 4, tema: "Rebalanceamento", tipo: "aberta", nivel: 2,
    contexto: "A carteira de Márcia tem alocação-alvo de 70% em renda fixa e 30% em renda variável. Após um ano de forte alta na bolsa, ela possui R$ 350.000 em renda fixa e R$ 250.000 em renda variável. Ela não fará novos aportes e quer voltar exatamente à alocação-alvo.",
    enunciado: "Quantos reais de renda variável Márcia precisa vender (e realocar em renda fixa)?",
    resposta: 70000, tolerancia: 0, unidade: "R$",
    explicacao: "Total = R$ 600.000. Alvo de RV = 30% × 600.000 = R$ 180.000. Venda = 250.000 − 180.000 = <b>R$ 70.000</b>. A renda fixa passa a R$ 420.000 (70%)." }
);
