/* Banco de questões — Bloco 3: Indicação de investimentos (40% da prova)
   Questões autorais no estilo ANBIMA (C-Pro R, antiga CPA-20). */
window.QUESTOES = window.QUESTOES || [];
window.QUESTOES.push(

  /* ===================== RENDA FIXA ===================== */
  { id: "b3-q01", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Helena tem R$ 400 mil em CDB e R$ 200 mil em LCI, ambos emitidos pelo mesmo banco. Se esse banco sofrer intervenção, qual é o valor máximo que o FGC garante a ela?",
    alternativas: ["R$ 450 mil, sendo R$ 250 mil do CDB e R$ 200 mil da LCI", "R$ 250 mil, pois o limite é por CPF e por instituição/conglomerado, somando todos os produtos cobertos", "R$ 600 mil, já que o teto global do FGC é de R$ 1 milhão", "R$ 500 mil, R$ 250 mil para cada tipo de produto"],
    correta: 1,
    explicacao: "O limite do FGC é de R$ 250 mil por CPF <b>por instituição ou conglomerado</b>, somando todos os produtos cobertos daquela instituição. O teto de R$ 1 milhão é global (a cada 4 anos), considerando várias instituições, e não permite ultrapassar R$ 250 mil em um mesmo banco." },

  { id: "b3-q02", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 1,
    enunciado: "Um cliente conservador faz questão de que todo o seu dinheiro esteja coberto pelo FGC. Qual destes produtos NÃO atende a essa exigência?",
    alternativas: ["CDB", "LCA", "Letra Financeira (LF)", "Caderneta de poupança"],
    correta: 2,
    explicacao: "A Letra Financeira não tem cobertura do FGC — é um título de captação de longo prazo, com valor mínimo elevado. CDB, LCA e poupança estão na lista de produtos garantidos pelo FGC." },

  { id: "b3-q03", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Após a Resolução CMN 5.215/2025, qual é o prazo mínimo de vencimento de uma LCA prefixada (sem atualização por índice de preços) emitida hoje?",
    alternativas: ["90 dias", "12 meses", "24 meses", "6 meses"],
    correta: 3,
    explicacao: "A Resolução CMN 5.215/2025 reduziu para <b>6 meses</b> o prazo mínimo das LCIs e LCAs sem atualização por índice de preços. As indexadas a índice de preços (como o IPCA) mantêm prazo mínimo de 12 meses. Os 90 dias são a regra antiga, anterior a 2024." },

  { id: "b3-q04", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Sobre as debêntures incentivadas (Lei 12.431/2011), é correto afirmar que:",
    alternativas: ["são isentas de IR para pessoa física, mas não contam com a garantia do FGC", "são isentas de IR e garantidas pelo FGC até R$ 250 mil", "são tributadas pela tabela regressiva, mas garantidas pelo Tesouro Nacional", "só podem ser adquiridas por investidores profissionais"],
    correta: 0,
    explicacao: "As debêntures incentivadas financiam projetos de infraestrutura e garantem isenção de IR para a pessoa física. Como qualquer debênture, não têm FGC: o investidor corre o risco de crédito da empresa emissora. Não há garantia do Tesouro nem restrição a investidores profissionais." },

  { id: "b3-q05", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Uma debênture que dá ao investidor a opção de trocá-la por ações da <b>própria empresa emissora</b>, em condições predefinidas na escritura, é classificada como:",
    alternativas: ["permutável", "conversível", "subordinada", "quirografária"],
    correta: 1,
    explicacao: "A debênture <b>conversível</b> pode ser convertida em ações da própria emissora. A <b>permutável</b> é trocada por ações de <i>outra</i> companhia. Subordinada e quirografária são classificações de garantia, que indicam a posição do credor em caso de falência." },

  { id: "b3-q06", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Um cliente pergunta qual é a principal diferença entre uma LCI e um CRI, já que ambos são isentos de IR para pessoa física. A resposta mais adequada é:",
    alternativas: ["A LCI é emitida por securitizadora, e o CRI, por bancos", "O CRI tem cobertura do FGC, e a LCI não", "A LCI é emitida por instituição financeira e tem FGC; o CRI é emitido por securitizadora e não tem FGC", "Não há diferença de risco, apenas de prazo"],
    correta: 2,
    explicacao: "A LCI é emitida por bancos, lastreada em créditos imobiliários e coberta pelo FGC. O CRI é emitido por uma <b>companhia securitizadora</b>, lastreado em recebíveis imobiliários, e <b>não tem FGC</b>. O risco do CRI depende do lastro e das garantias da operação." },

  { id: "b3-q07", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 1,
    enunciado: "Para a reserva de emergência, um cliente quer um título público com baixíssima oscilação de preço, sem perdas relevantes por marcação a mercado em caso de resgate antecipado. A indicação mais adequada é:",
    alternativas: ["Tesouro Prefixado (LTN)", "Tesouro IPCA+ (NTN-B Principal)", "Tesouro Prefixado com juros semestrais (NTN-F)", "Tesouro Selic (LFT)"],
    correta: 3,
    explicacao: "O Tesouro Selic (LFT) é pós-fixado à Selic e tem baixíssima volatilidade, por isso é o título público indicado para reserva de emergência. Prefixados e IPCA+ podem sofrer perdas relevantes por marcação a mercado se forem vendidos antes do vencimento." },

  { id: "b3-q08", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Um aposentado quer receber uma renda periódica protegida da inflação, investindo em títulos públicos. O título mais adequado é:",
    alternativas: ["Tesouro IPCA+ com juros semestrais (NTN-B)", "Tesouro IPCA+ (NTN-B Principal)", "Tesouro Selic (LFT)", "Tesouro Prefixado (LTN)"],
    correta: 0,
    explicacao: "A NTN-B paga IPCA + taxa contratada, com <b>cupons semestrais</b>, o que gera fluxo de renda corrigido pela inflação. A NTN-B Principal também é atrelada ao IPCA, mas paga tudo apenas no vencimento. LFT e LTN não protegem da inflação de forma explícita." },

  { id: "b3-q09", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 2,
    enunciado: "Com a meta da Selic em 10,50% ao ano, a remuneração da caderneta de poupança é de:",
    alternativas: ["70% da Selic + TR", "0,5% ao mês + TR", "100% do CDI", "0,5% ao mês, sem TR"],
    correta: 1,
    explicacao: "Quando a Selic está <b>acima de 8,5%</b> ao ano, a poupança rende 0,5% ao mês + TR. Com a Selic igual ou abaixo de 8,5%, passa a render 70% da Selic + TR. Em todos os casos, é isenta de IR para pessoa física." },

  { id: "b3-q10", bloco: 3, tema: "Renda fixa", tipo: "mc", nivel: 3,
    enunciado: "Sobre as operações compromissadas oferecidas por bancos a pessoas físicas, é correto afirmar que:",
    alternativas: ["nunca têm cobertura do FGC, pois são lastreadas em títulos públicos", "são isentas de IR para pessoa física", "contam com cobertura do FGC quando lastreadas em títulos emitidos por empresa ligada à instituição", "têm rentabilidade obrigatoriamente atrelada à poupança"],
    correta: 2,
    explicacao: "As compromissadas são operações com compromisso de recompra, lastreadas em títulos. O FGC cobre as compromissadas lastreadas em títulos de <b>empresa ligada</b> à instituição. Seguem a tabela regressiva de IR e costumam render um percentual do CDI." },

  /* ===================== TRIBUTAÇÃO ===================== */
  { id: "b3-q11", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 1,
    enunciado: "Um CDB foi resgatado 400 dias após a aplicação. Qual alíquota de IR incide sobre o rendimento?",
    alternativas: ["22,5%", "20%", "15%", "17,5%"],
    correta: 3,
    explicacao: "Tabela regressiva: até 180 dias, 22,5%; de 181 a 360, 20%; de 361 a 720, <b>17,5%</b>; acima de 720, 15%. Com 400 dias, a alíquota é de 17,5%." },

  { id: "b3-q12", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 2,
    enunciado: "Um cliente aplicou em um CDB de liquidez diária e precisou resgatar 10 dias depois. Sobre o rendimento, incidem:",
    alternativas: ["IOF regressivo e IR de 22,5%", "apenas IR de 22,5%, pois o IOF foi extinto para renda fixa", "apenas IOF, pois o IR só incide após 30 dias", "IR de 15% e IOF fixo de 0,38%"],
    correta: 0,
    explicacao: "Resgates antes do 30º dia sofrem <b>IOF regressivo</b> sobre o rendimento, que é calculado antes do IR. Depois, incide o IR de 22,5%, porque o prazo é inferior a 180 dias. A partir do 30º dia, o IOF é zero." },

  { id: "b3-q13", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 1,
    enunciado: "Em um fundo de renda fixa classificado como de longo prazo para fins tributários, o come-cotas é cobrado:",
    alternativas: ["mensalmente, à alíquota de 22,5%", "no último dia útil de maio e de novembro, à alíquota de 15%", "apenas no resgate, à alíquota de 15%", "no último dia útil de junho e de dezembro, à alíquota de 20%"],
    correta: 1,
    explicacao: "O come-cotas é a antecipação semestral do IR, cobrada no último dia útil de <b>maio e novembro</b>: 15% nos fundos de longo prazo e 20% nos de curto prazo. No resgate, cobra-se a diferença até a alíquota da tabela regressiva correspondente ao prazo." },

  { id: "b3-q14", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 1,
    enunciado: "Qual destes investimentos é isento de IR para pessoa física?",
    alternativas: ["CDB pós-fixado", "Debênture não incentivada", "CRA", "Fundo DI"],
    correta: 2,
    explicacao: "CRA (e CRI, LCI, LCA, debêntures incentivadas e poupança) são isentos de IR para pessoa física. CDB, debêntures comuns e fundos DI seguem a tabela regressiva." },

  { id: "b3-q15", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 2,
    enunciado: "Sobre a tributação de um fundo da classe Ações, é correto afirmar:",
    alternativas: ["Sofre come-cotas de 15% em maio e novembro", "Segue a tabela regressiva da renda fixa", "É isento de IR para vendas de até R$ 20 mil por mês", "Não tem come-cotas; o IR de 15% incide somente no resgate"],
    correta: 3,
    explicacao: "Fundos de ações <b>não têm come-cotas</b>: o IR de 15% sobre o ganho é retido apenas no resgate. A isenção de R$ 20 mil por mês vale para a venda direta de ações à vista em bolsa, e não para cotas de fundos." },

  { id: "b3-q16", bloco: 3, tema: "Tributação", tipo: "mc", nivel: 3,
    enunciado: "Um investidor tem cotas de um fundo de renda fixa classificado como de <b>curto prazo</b>. É correto afirmar que:",
    alternativas: ["o come-cotas é de 20% e, no resgate, a alíquota final é de 22,5% (até 180 dias) ou 20% (acima de 180 dias)", "o come-cotas é de 15% e a alíquota final pode chegar a 15%", "não há come-cotas em fundos de curto prazo", "o come-cotas é de 22,5% em todos os semestres"],
    correta: 0,
    explicacao: "Nos fundos de curto prazo, o come-cotas é de <b>20%</b> e a tabela tem só duas faixas: 22,5% até 180 dias e 20% acima disso. Nos fundos de longo prazo, o come-cotas é de 15% e a tabela vai até 15%." },

  /* ===================== FUNDOS ===================== */
  { id: "b3-q17", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 2,
    enunciado: "Pela Resolução CVM 175, os prestadores de serviços essenciais de um fundo de investimento são:",
    alternativas: ["custodiante e auditor", "administrador fiduciário e gestor de recursos", "distribuidor e gestor de recursos", "administrador fiduciário e distribuidor"],
    correta: 1,
    explicacao: "A CVM 175 definiu como <b>prestadores de serviços essenciais</b> o administrador fiduciário e o gestor de recursos, que respondem pela constituição do fundo e pela contratação dos demais prestadores. Custodiante, auditor e distribuidor são prestadores contratados." },

  { id: "b3-q18", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 1,
    enunciado: "Para ser classificado na classe Ações, um fundo deve manter, no mínimo, que percentual do patrimônio em ações e ativos relacionados?",
    alternativas: ["51%", "80%", "67%", "95%"],
    correta: 2,
    explicacao: "A classe Ações exige no mínimo <b>67%</b> do patrimônio em ações e ativos relacionados. Já a classe Cambial exige ao menos 80% em ativos relacionados à variação de moeda estrangeira." },

  { id: "b3-q19", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 1,
    enunciado: "Um fundo que mantém pelo menos 80% do patrimônio em ativos relacionados à variação do dólar pertence à classe:",
    alternativas: ["Multimercado", "Renda Fixa", "Ações", "Cambial"],
    correta: 3,
    explicacao: "A classe <b>Cambial</b> deve manter no mínimo 80% em ativos relacionados à variação de moeda estrangeira ou de cupom cambial." },

  { id: "b3-q20", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 2,
    enunciado: "Um fundo cobra taxa de performance com <b>linha-d'água</b>. Isso significa que a taxa:",
    alternativas: ["só pode ser cobrada quando a cota superar o maior valor em que a performance já foi cobrada anteriormente", "é cobrada sempre que o fundo tiver rentabilidade positiva", "substitui a taxa de administração nos meses de bom desempenho", "é cobrada mensalmente, mesmo que o fundo fique abaixo do benchmark"],
    correta: 0,
    explicacao: "A linha-d'água impede cobrar performance de novo sobre a mesma valorização: depois de uma queda, o fundo precisa primeiro recuperar a cota até o último patamar em que cobrou a taxa. A performance incide sobre o que exceder o benchmark." },

  { id: "b3-q21", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 2,
    enunciado: "Um fundo DI adota <b>cota de abertura</b>. Para o cotista que aplica hoje, isso significa que:",
    alternativas: ["a cota só será conhecida no fim do dia", "a quantidade de cotas adquiridas já é conhecida no momento da aplicação", "o fundo não pode ter liquidez diária", "a rentabilidade do dia é zero"],
    correta: 1,
    explicacao: "Na cota de abertura, o valor da cota é calculado no início do dia, com base no fechamento anterior atualizado. Por isso, o investidor sabe quantas cotas está comprando. É usada em fundos de baixa volatilidade, como os DI. Na cota de fechamento, o valor só é conhecido no fim do dia." },

  { id: "b3-q22", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 2,
    enunciado: "Uma investidora pessoa física recebe rendimentos mensais de um FII negociado em bolsa e vende suas cotas com lucro. Atendidos os requisitos legais, a tributação é:",
    alternativas: ["rendimentos tributados a 15% e ganho de capital isento", "rendimentos e ganho de capital isentos", "rendimentos isentos e ganho de capital tributado a 20%", "rendimentos e ganho de capital tributados pela tabela regressiva"],
    correta: 2,
    explicacao: "Os rendimentos distribuídos pelo FII são isentos para pessoa física quando atendidos os requisitos (cotas negociadas em bolsa ou balcão organizado, número mínimo de cotistas e participação individual inferior a 10%). O <b>ganho de capital na venda das cotas é tributado a 20%</b>, sem isenção para vendas pequenas." },

  { id: "b3-q23", bloco: 3, tema: "Fundos", tipo: "mc", nivel: 2,
    enunciado: "Um investidor vendeu R$ 15 mil em cotas de um ETF de ações (índice Ibovespa) com lucro, em operação comum (swing trade). A tributação é:",
    alternativas: ["isenta, pois as vendas ficaram abaixo de R$ 20 mil no mês", "20% sobre o lucro", "tabela regressiva da renda fixa", "15% sobre o lucro, sem direito à isenção de R$ 20 mil"],
    correta: 3,
    explicacao: "ETF de renda variável é tributado como renda variável: 15% no swing trade e 20% no day trade. A isenção de R$ 20 mil por mês vale para <b>ações</b> à vista, e não para ETFs." },

  /* ===================== PREVIDÊNCIA ===================== */
  { id: "b3-q24", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 1,
    enunciado: "O principal benefício fiscal do PGBL é:",
    alternativas: ["deduzir as contribuições da base de cálculo do IR em até 12% da renda bruta tributável, para quem faz a declaração completa", "pagar IR apenas sobre os rendimentos no resgate", "ser isento de IR depois de 10 anos", "permitir a dedução para quem faz a declaração simplificada"],
    correta: 0,
    explicacao: "O PGBL permite deduzir até <b>12% da renda bruta tributável</b> na declaração completa, desde que o participante contribua para o regime oficial (INSS ou RPPS). Em contrapartida, no resgate o IR incide sobre o <b>valor total</b>, e não só sobre os rendimentos." },

  { id: "b3-q25", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 1,
    enunciado: "Para um cliente que faz a declaração simplificada do IR, o plano de previdência geralmente mais indicado é o:",
    alternativas: ["PGBL, porque o IR incide apenas sobre o rendimento", "VGBL, porque o IR incide apenas sobre os rendimentos no resgate", "PGBL, porque tem come-cotas menor", "VGBL, porque permite deduzir 12% da renda"],
    correta: 1,
    explicacao: "Quem faz a declaração simplificada não aproveita a dedução do PGBL. No <b>VGBL</b>, o IR incide apenas sobre os rendimentos, o que o torna mais vantajoso nesse caso. Previdência não tem come-cotas." },

  { id: "b3-q26", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 2,
    enunciado: "Uma participante do regime regressivo resgata recursos que estavam no plano havia 7 anos. Qual alíquota de IR se aplica a esses recursos?",
    alternativas: ["25%", "15%", "20%", "10%"],
    correta: 2,
    explicacao: "Tabela regressiva da previdência: 35% (até 2 anos), 30% (2–4), 25% (4–6), <b>20% (6–8)</b>, 15% (8–10) e 10% (acima de 10 anos). Com 7 anos, a alíquota é de 20%." },

  { id: "b3-q27", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 2,
    enunciado: "De acordo com a Lei 14.803/2024, o participante de um plano de previdência pode escolher entre os regimes progressivo e regressivo:",
    alternativas: ["obrigatoriamente no ato da contratação", "a qualquer momento, inclusive depois de receber o benefício", "somente no momento da portabilidade", "até a solicitação do primeiro resgate ou do recebimento do primeiro benefício"],
    correta: 3,
    explicacao: "A Lei 14.803/2024 permite adiar a escolha do regime tributário até o <b>primeiro resgate ou o recebimento do primeiro benefício</b>. Antes dela, a escolha precisava ser feita na contratação." },

  { id: "b3-q28", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 2,
    enunciado: "Qual destas portabilidades é permitida e ocorre sem incidência de IR?",
    alternativas: ["De um PGBL para outro PGBL, em outra seguradora", "De um PGBL para um VGBL", "Do regime regressivo para o progressivo", "De um VGBL para um CDB do mesmo banco"],
    correta: 0,
    explicacao: "A portabilidade acontece entre planos da mesma natureza (PGBL→PGBL, VGBL→VGBL), sem incidência de IR. É possível ir do progressivo para o regressivo (o prazo recomeça), mas não o contrário. Levar o dinheiro para um CDB é resgate, e não portabilidade." },

  { id: "b3-q29", bloco: 3, tema: "Previdência", tipo: "mc", nivel: 2,
    enunciado: "Sobre os planos de previdência complementar aberta (PGBL e VGBL), é correto afirmar:",
    alternativas: ["Sofrem come-cotas em maio e novembro", "Não sofrem come-cotas e são regulados e fiscalizados pela SUSEP", "São regulados pela PREVIC e entram no inventário", "São garantidos pelo FGC até R$ 250 mil"],
    correta: 1,
    explicacao: "A previdência aberta é regulada pela <b>SUSEP</b> (a PREVIC cuida dos fundos de pensão fechados), não tem come-cotas e não tem cobertura do FGC. Em caso de falecimento, os recursos vão aos beneficiários indicados, fora do inventário." },

  /* ===================== RENDA VARIÁVEL ===================== */
  { id: "b3-q30", bloco: 3, tema: "Renda variável", tipo: "mc", nivel: 1,
    enunciado: "Em geral, as ações preferenciais (PN) se diferenciam das ordinárias (ON) por:",
    alternativas: ["darem direito a voto em assembleia", "garantirem dividendos fixos todos os anos", "terem prioridade no recebimento de dividendos, normalmente sem direito a voto", "serem negociadas só no mercado de balcão"],
    correta: 2,
    explicacao: "Ações PN têm <b>preferência</b> no recebimento de dividendos e no reembolso de capital e, em geral, não dão direito a voto. Ações ON dão direito a voto. Os dividendos não são garantidos, porque dependem do lucro." },

  { id: "b3-q31", bloco: 3, tema: "Renda variável", tipo: "mc", nivel: 2,
    enunciado: "Se o estatuto de uma S.A. for omisso, o dividendo mínimo obrigatório previsto na Lei das S.A. é de:",
    alternativas: ["10% do lucro líquido", "50% do lucro líquido ajustado", "100% do lucro do exercício", "25% do lucro líquido ajustado"],
    correta: 3,
    explicacao: "Quando o estatuto é omisso, a Lei 6.404/76 determina a distribuição de no mínimo <b>25% do lucro líquido ajustado</b> como dividendo obrigatório. Os JCP pagos podem ser computados nesse mínimo." },

  { id: "b3-q32", bloco: 3, tema: "Renda variável", tipo: "mc", nivel: 2,
    enunciado: "Sobre os Juros sobre Capital Próprio (JCP), é correto afirmar:",
    alternativas: ["Sofrem IR retido na fonte de 15% para o investidor e são dedutíveis como despesa para a empresa", "São isentos para o investidor, como os dividendos", "São tributados pela tabela regressiva conforme o prazo de posse da ação", "Não podem ser computados no dividendo mínimo obrigatório"],
    correta: 0,
    explicacao: "O JCP é uma forma de remuneração ao acionista <b>dedutível como despesa</b> para a empresa, o que reduz o IR dela. Para o investidor, há retenção de <b>15% de IR na fonte</b>. Pode ser imputado ao dividendo mínimo obrigatório." },

  { id: "b3-q33", bloco: 3, tema: "Renda variável", tipo: "mc", nivel: 2,
    enunciado: "Em um mês, Júlia vendeu R$ 18 mil em ações à vista (swing trade), com lucro de R$ 3 mil. Ela não fez outras vendas. O IR sobre esse lucro é:",
    alternativas: ["15% sobre R$ 3 mil", "isento, pois o total de vendas de ações no mês não passou de R$ 20 mil", "20% sobre R$ 3 mil", "isento apenas se as ações forem PN"],
    correta: 1,
    explicacao: "No mercado à vista de ações, o swing trade é isento quando o <b>total de vendas</b> no mês fica até R$ 20 mil (o limite considera as vendas, e não o lucro). Acima disso, a alíquota é de 15%. A isenção não vale para day trade, ETFs e FIIs." },

  { id: "b3-q34", bloco: 3, tema: "Renda variável", tipo: "mc", nivel: 2,
    enunciado: "Uma empresa anuncia o desdobramento (split) das ações na proporção de 1 para 2. Para o acionista, o efeito imediato é:",
    alternativas: ["receber dividendos extraordinários", "ter a quantidade de ações reduzida pela metade", "ter a quantidade de ações dobrada e o preço por ação reduzido proporcionalmente, sem alterar o patrimônio", "ter o patrimônio dobrado"],
    correta: 2,
    explicacao: "No <b>desdobramento</b>, cada ação vira mais ações e o preço se ajusta na mesma proporção: o valor total investido não muda. O inverso é o grupamento (inplit). A bonificação, por sua vez, distribui novas ações a partir da capitalização de reservas." },

  /* ===================== COE ===================== */
  { id: "b3-q35", bloco: 3, tema: "COE", tipo: "mc", nivel: 2,
    enunciado: "Sobre o Certificado de Operações Estruturadas (COE), é correto afirmar:",
    alternativas: ["Tem garantia do FGC até R$ 250 mil", "É isento de IR para pessoa física", "Na modalidade capital protegido, não há risco algum", "Expõe o investidor ao risco de crédito do emissor e é tributado pela tabela regressiva"],
    correta: 3,
    explicacao: "O COE é emitido por um banco e <b>não tem FGC</b>: mesmo o capital protegido depende da solvência do emissor. É tributado pela tabela regressiva da renda fixa. A oferta deve vir acompanhada do DIE (Documento de Informações Essenciais)." },

  { id: "b3-q36", bloco: 3, tema: "COE", tipo: "mc", nivel: 2,
    enunciado: "Um COE na modalidade <b>valor nominal protegido</b> garante ao investidor:",
    alternativas: ["o recebimento do capital investido no vencimento, mesmo que o ativo-subjacente tenha desempenho ruim (sujeito ao risco do emissor)", "liquidez diária sem perdas", "rentabilidade mínima igual ao CDI", "proteção contra a falência do emissor"],
    correta: 0,
    explicacao: "Com o valor nominal protegido, o investidor recebe pelo menos o valor aplicado <b>no vencimento</b>. Um resgate antecipado (quando existir) pode gerar perdas, e a proteção depende da capacidade de pagamento do banco emissor." },

  /* ===================== EXTERIOR E CRIPTO ===================== */
  { id: "b3-q37", bloco: 3, tema: "Exterior e cripto", tipo: "mc", nivel: 2,
    enunciado: "Pela Lei 14.754/2023, os rendimentos de aplicações financeiras mantidas diretamente no exterior por pessoa física residente no Brasil são tributados:",
    alternativas: ["pela tabela regressiva, com retenção na fonte", "à alíquota de 15%, apurados anualmente na declaração de ajuste", "pela tabela progressiva mensal (carnê-leão)", "apenas se o valor ultrapassar R$ 35 mil por mês"],
    correta: 1,
    explicacao: "A Lei 14.754/2023 estabeleceu a alíquota de <b>15%</b> sobre os rendimentos de aplicações financeiras no exterior, apurados de forma <b>anual na Declaração de Ajuste</b>. Já os BDRs, negociados na B3, são tributados como renda variável no Brasil." },

  { id: "b3-q38", bloco: 3, tema: "Exterior e cripto", tipo: "mc", nivel: 2,
    enunciado: "Um investidor vendeu, em um mês, R$ 30 mil em cotas de um ETF de criptoativos negociado na B3, com lucro. Esse ganho é:",
    alternativas: ["isento, pois as vendas ficaram abaixo de R$ 35 mil no mês", "isento, pois as vendas ficaram abaixo de R$ 20 mil no mês", "tributado a 15%, como renda variável, sem as isenções de R$ 35 mil ou R$ 20 mil", "tributado pela tabela regressiva da renda fixa"],
    correta: 2,
    explicacao: "O ETF de cripto listado na B3 segue a tributação dos ETFs de renda variável: <b>15%</b> sobre o ganho, sem isenção. A isenção de R$ 35 mil por mês vale para a alienação direta de criptoativos, e não para cotas de ETF." },

  /* ===================== DERIVATIVOS ===================== */
  { id: "b3-q39", bloco: 3, tema: "Derivativos", tipo: "mc", nivel: 2,
    enunciado: "O que diferencia o mercado futuro do mercado a termo?",
    alternativas: ["No mercado futuro não há exigência de garantias", "O mercado a termo tem ajuste diário e o futuro não", "O mercado futuro só negocia commodities agrícolas", "O mercado futuro tem contratos padronizados, com ajuste diário e depósito de margem de garantia"],
    correta: 3,
    explicacao: "Os contratos futuros são <b>padronizados</b>, negociados em bolsa, com <b>ajuste diário</b> das posições e exigência de margem. O termo também é negociado em bolsa, mas a liquidação acontece apenas no vencimento, sem ajustes diários." },

  { id: "b3-q40", bloco: 3, tema: "Derivativos", tipo: "mc", nivel: 2,
    enunciado: "Um investidor comprou uma opção de compra (call) de uma ação. Nessa posição, ele:",
    alternativas: ["pagou um prêmio e tem o direito, mas não a obrigação, de comprar a ação pelo preço de exercício", "recebeu um prêmio e tem a obrigação de vender a ação se for exercido", "tem a obrigação de comprar a ação no vencimento", "tem o direito de vender a ação pelo preço de exercício"],
    correta: 0,
    explicacao: "O <b>titular</b> (comprador) da call paga o prêmio e adquire o <b>direito</b> de comprar. O <b>lançador</b> (vendedor) recebe o prêmio e assume a obrigação de vender, se for exercido. O direito de vender é característico da put." },

  /* ===================== RISCOS E CONCEITOS ===================== */
  { id: "b3-q41", bloco: 3, tema: "Riscos e conceitos", tipo: "mc", nivel: 1,
    enunciado: "Uma investidora tem um Tesouro Prefixado com vencimento em 2031. Se as taxas de juros de mercado subirem fortemente, o preço do título na marcação a mercado:",
    alternativas: ["sobe", "cai", "não se altera, pois a taxa é prefixada", "é corrigido pela inflação"],
    correta: 1,
    explicacao: "Preço e taxa de juros andam em <b>sentidos opostos</b>: se os juros sobem, o fluxo prefixado é descontado a uma taxa maior e o preço cai. Quem leva o título até o vencimento recebe a taxa contratada." },

  { id: "b3-q42", bloco: 3, tema: "Riscos e conceitos", tipo: "mc", nivel: 2,
    enunciado: "Qual destes títulos tende a ter o preço mais sensível a uma alta nas taxas de juros?",
    alternativas: ["Tesouro Selic com vencimento em 2 anos", "CDB pós-fixado com liquidez diária", "Tesouro IPCA+ (NTN-B Principal) com vencimento em 20 anos", "Tesouro Prefixado com vencimento em 1 ano"],
    correta: 2,
    explicacao: "Quanto <b>maior a duration</b>, maior a sensibilidade do preço a mudanças nas taxas. Um título longo e sem cupons (NTN-B Principal de 20 anos) tem duration muito alta. Os pós-fixados (Selic/CDI) quase não sofrem com marcação a mercado." },

  { id: "b3-q43", bloco: 3, tema: "Riscos e conceitos", tipo: "mc", nivel: 2,
    enunciado: "Um investimento rendeu 12% no ano, e a inflação do período foi de 5%. Pela equação de Fisher, a taxa real foi de aproximadamente:",
    alternativas: ["7,00%", "17,60%", "6,25%", "6,67%"],
    correta: 3,
    explicacao: "Taxa real = (1 + nominal) ÷ (1 + inflação) − 1 = 1,12 ÷ 1,05 − 1 ≈ <b>6,67%</b>. Subtrair as taxas (12% − 5% = 7%) é só uma aproximação, que superestima o ganho real." },

  { id: "b3-q44", bloco: 3, tema: "Riscos e conceitos", tipo: "mc", nivel: 2,
    enunciado: "Uma agência de rating rebaixou a nota de uma empresa que tem debêntures na carteira de um cliente. O risco diretamente evidenciado é o:",
    alternativas: ["risco de crédito", "risco cambial", "risco operacional", "risco sistêmico"],
    correta: 0,
    explicacao: "O rebaixamento de rating indica <b>maior probabilidade de inadimplência</b> do emissor, ou seja, risco de crédito. Em geral, o preço da debênture também cai (o spread exigido aumenta), mas a origem é o crédito." },

  /* ===================== CASES ===================== */
  { id: "b3-c01", bloco: 3, tema: "Renda fixa", tipo: "case", nivel: 2,
    contexto: "Marta, 52 anos, perfil moderado, vendeu um imóvel e tem <b>R$ 600 mil</b> para aplicar por cerca de 1 ano. Ela quer <b>isenção de IR</b> e faz questão da <b>cobertura do FGC</b> sobre todo o valor. Ela não tem outros investimentos.",
    enunciado: "Qual estratégia atende melhor aos objetivos de Marta?",
    alternativas: ["Aplicar os R$ 600 mil em uma única LCA do maior banco do país", "Aplicar em debêntures incentivadas de três empresas diferentes", "Dividir o valor em LCIs/LCAs de pelo menos três instituições de conglomerados diferentes, com até R$ 250 mil em cada", "Aplicar em CRI e CRA, que são isentos e têm FGC"],
    correta: 2,
    explicacao: "LCI/LCA reúnem isenção de IR e FGC. Para que o valor fique coberto, é preciso respeitar o limite de <b>R$ 250 mil por CPF por conglomerado</b>: com R$ 600 mil, são necessárias pelo menos três instituições (R$ 200 mil em cada). Debêntures, CRI e CRA não têm FGC." },

  { id: "b3-c02", bloco: 3, tema: "Previdência", tipo: "case", nivel: 2,
    contexto: "Mariana, 35 anos, é CLT (contribui ao INSS), tem renda bruta tributável de <b>R$ 200 mil por ano</b> e faz a <b>declaração completa</b> do IR. Ela quer começar uma previdência privada para a aposentadoria, daqui a cerca de 25 anos, e não pretende resgatar antes disso.",
    enunciado: "Qual é a recomendação mais adequada?",
    alternativas: ["PGBL com aportes de até R$ 24 mil por ano, no regime regressivo", "VGBL com aportes de R$ 50 mil por ano, no regime progressivo", "PGBL com aportes ilimitados, todos dedutíveis", "VGBL, porque permite deduzir 12% da renda"],
    correta: 0,
    explicacao: "Como faz a declaração completa e contribui ao INSS, Mariana aproveita a dedução do <b>PGBL</b> até 12% da renda bruta tributável: 12% × R$ 200 mil = <b>R$ 24 mil</b>. Com horizonte longo, o <b>regressivo</b> leva a alíquota a 10% após 10 anos. Aportes acima do limite dedutível tendem a ficar melhores no VGBL." },

  { id: "b3-c03", bloco: 3, tema: "Fundos", tipo: "case", nivel: 2,
    contexto: "Carlos tem R$ 100 mil em um fundo da classe Ações e R$ 100 mil em um fundo multimercado classificado como de longo prazo para fins tributários. Os dois fundos tiveram rendimento positivo no semestre. Hoje é o último dia útil de novembro.",
    enunciado: "O que acontece com os investimentos de Carlos hoje, do ponto de vista tributário?",
    alternativas: ["Os dois fundos sofrem come-cotas de 15%", "Só o fundo de ações sofre come-cotas, de 15%", "Nenhum dos dois sofre come-cotas; o IR só é cobrado no resgate", "Só o multimercado sofre come-cotas, de 15% sobre o rendimento do período"],
    correta: 3,
    explicacao: "Fundos de ações <b>não têm come-cotas</b>. O multimercado de longo prazo sofre a antecipação de <b>15%</b> sobre o rendimento do período, no último dia útil de maio e novembro, com cobrança da diferença no resgate conforme a tabela regressiva." },

  { id: "b3-c04", bloco: 3, tema: "Tributação", tipo: "case", nivel: 2,
    contexto: "Joana aplicou em um CDB prefixado há <b>200 dias</b>. Ela pensa em resgatar agora para trocar de banco, mas não tem urgência do dinheiro. O CDB tem liquidez diária e não há perdas por marcação a mercado no resgate antecipado.",
    enunciado: "Do ponto de vista do IR, qual é a orientação correta?",
    alternativas: ["Se resgatar hoje, paga 22,5%; esperando completar 181 dias, pagaria 20%", "Se resgatar hoje, paga 20%; a partir do 361º dia, a alíquota cai para 17,5%", "Se resgatar hoje, paga 17,5%; após 720 dias, 15%", "Se resgatar hoje, paga 15%, por ser um prefixado"],
    correta: 1,
    explicacao: "Com 200 dias, Joana está na faixa de 181 a 360 dias: <b>20%</b>. Se esperar até o 361º dia, a alíquota cai para <b>17,5%</b>. A decisão também deve considerar as taxas oferecidas pelo outro banco." },

  { id: "b3-c05", bloco: 3, tema: "COE", tipo: "case", nivel: 3,
    contexto: "Roberto, perfil conservador, já tem <b>R$ 250 mil em CDB do Banco X</b>. O gerente do próprio Banco X oferece a ele um COE de capital protegido, emitido pelo Banco X, atrelado ao S&P 500, com vencimento em 3 anos. Roberto gostou da ideia de ganhar com a bolsa americana “sem risco”.",
    enunciado: "Qual alerta é essencial nessa recomendação?",
    alternativas: ["Nenhum, pois o capital é protegido e o risco é zero", "O COE é isento de IR, então a rentabilidade líquida é maior do que a do CDB", "O COE não tem FGC; a proteção depende da solvência do Banco X, o que concentra ainda mais o risco de crédito em um único emissor", "O COE tem FGC adicional de R$ 250 mil, independente do CDB"],
    correta: 2,
    explicacao: "O capital protegido vale apenas <b>no vencimento</b> e depende da capacidade de pagamento do emissor. Como o COE <b>não tem FGC</b> e Roberto já tem R$ 250 mil (o limite do FGC) no mesmo banco, a exposição ao Banco X aumenta. Além disso, o COE é tributado pela tabela regressiva." },

  { id: "b3-c06", bloco: 3, tema: "Renda variável", tipo: "case", nivel: 2,
    contexto: "Ana tem ações ON de uma companhia listada no <b>Novo Mercado</b> da B3. O acionista controlador anunciou a venda do controle a um grupo estrangeiro por R$ 50 por ação, enquanto as ações estão cotadas a R$ 38 na bolsa.",
    enunciado: "Qual direito Ana tem nessa situação?",
    alternativas: ["Tag along de 100%: o comprador deve oferecer a ela o mesmo preço de R$ 50 por ação", "Tag along de 80%: receber R$ 40 por ação", "Nenhum, pois o tag along só vale para ações PN", "Direito de preferência na compra do controle"],
    correta: 0,
    explicacao: "Pela Lei das S.A., o tag along mínimo para ações ON é de <b>80%</b> do preço pago ao controlador. O Novo Mercado eleva esse percentual para <b>100%</b>, e nesse segmento só existem ações ON. Por isso, Ana tem direito de vender por R$ 50." },

  /* ===================== ÁRVORES DE DECISÃO ===================== */
  { id: "b3-t01", bloco: 3, tema: "Previdência", tipo: "arvore", nivel: 3,
    contexto: "Paulo, 45 anos, é profissional liberal e contribui ao INSS. Tem renda bruta tributável de <b>R$ 150 mil por ano</b>, faz a <b>declaração completa</b> e quer acumular para a aposentadoria, aos 60 anos. Ele pretende aportar <b>R$ 25 mil</b> neste ano.",
    etapas: [
      { enunciado: "Etapa 1 — Considerando o perfil fiscal de Paulo, qual tipo de plano deve receber a parte principal dos aportes?",
        alternativas: ["PGBL, pois ele faz a declaração completa e contribui ao INSS", "VGBL, pois o IR incide só sobre os rendimentos", "Nenhum: previdência não é indicada para quem tem 45 anos"],
        correta: 0,
        explicacao: "Como faz a declaração completa e contribui ao regime oficial, Paulo aproveita a dedução de até 12% da renda bruta tributável no PGBL." },
      { enunciado: "Etapa 2 — Paulo não pretende resgatar antes de 15 anos. Qual regime tributário tende a ser mais vantajoso?",
        alternativas: ["Progressivo, pois a alíquota de 15% na fonte é definitiva", "Regressivo, pois após 10 anos a alíquota cai para 10%", "Tanto faz: os dois regimes chegam a 10% após 10 anos"],
        correta: 1,
        explicacao: "No regressivo, os recursos que ficam mais de 10 anos no plano pagam <b>10%</b>, a menor alíquota possível. Pela Lei 14.803/2024, a escolha pode ser feita até o primeiro resgate, mas o horizonte longo já indica o regressivo." },
      { enunciado: "Etapa 3 — Como distribuir os R$ 25 mil deste ano de forma mais eficiente?",
        alternativas: ["R$ 25 mil no PGBL", "R$ 25 mil no VGBL", "R$ 18 mil no PGBL e R$ 7 mil no VGBL", "R$ 12 mil no PGBL e R$ 13 mil no VGBL"],
        correta: 2,
        explicacao: "O limite dedutível é 12% × R$ 150 mil = <b>R$ 18 mil</b>. O que passar disso não gera benefício fiscal no PGBL e ainda seria tributado sobre o valor total no resgate, então o excedente (R$ 7 mil) fica melhor no <b>VGBL</b>." }
    ] },

  { id: "b3-t02", bloco: 3, tema: "Renda fixa", tipo: "arvore", nivel: 2,
    contexto: "Fernanda, 29 anos, perfil moderado, gasta <b>R$ 5 mil por mês</b>, tem emprego estável e não tem dívidas. Ela recebeu <b>R$ 80 mil</b> de bônus e não tem nenhuma reserva. Quer usar parte do valor para dar entrada em um apartamento daqui a <b>3 anos</b>.",
    etapas: [
      { enunciado: "Etapa 1 — Qual deve ser a primeira prioridade?",
        alternativas: ["Montar a reserva de emergência, de cerca de 6 meses de despesas (R$ 30 mil)", "Aplicar tudo em ações para buscar mais retorno", "Aplicar tudo no objetivo do apartamento", "Contratar um COE com capital em risco"],
        correta: 0,
        explicacao: "Sem reserva, qualquer imprevisto obrigaria Fernanda a resgatar investimentos em momento ruim. A reserva vem primeiro: com renda estável, de 3 a 6 meses de despesas costumam bastar." },
      { enunciado: "Etapa 2 — Onde aplicar a reserva de emergência?",
        alternativas: ["LCA com vencimento em 1 ano", "Tesouro Prefixado 2031", "Fundo multimercado com resgate em D+30", "Tesouro Selic ou CDB de liquidez diária (cerca de 100% do CDI) de banco sólido"],
        correta: 3,
        explicacao: "A reserva exige <b>liquidez diária</b> e baixa oscilação. A LCA tem prazo mínimo e não tem liquidez, o prefixado longo sofre com marcação a mercado e o D+30 é lento demais para uma emergência." },
      { enunciado: "Etapa 3 — Para os R$ 50 mil restantes, destinados ao apartamento em 3 anos, Fernanda quer isenção de IR e FGC. A melhor opção é:",
        alternativas: ["Ações de empresas do setor imobiliário", "LCI ou LCA com vencimento compatível com o prazo de 3 anos", "Debêntures incentivadas de longo prazo (vencimento em 15 anos)", "Poupança, por ter a maior rentabilidade"],
        correta: 1,
        explicacao: "LCI/LCA combinam <b>isenção de IR, FGC e prazo compatível</b> com o objetivo. Ações têm volatilidade alta para um prazo curto e definido, e debêntures de 15 anos não casam com o horizonte nem têm FGC." }
    ] },

  { id: "b3-t03", bloco: 3, tema: "Fundos", tipo: "arvore", nivel: 2,
    contexto: "Gustavo avalia um fundo que mantém <b>70% do patrimônio em ações</b> brasileiras e o restante em títulos públicos. O fundo tem taxa de administração de 2% ao ano e taxa de performance de 20% sobre o que exceder o Ibovespa, com linha-d'água.",
    etapas: [
      { enunciado: "Etapa 1 — Pela regulamentação, esse fundo é da classe:",
        alternativas: ["Renda Fixa", "Multimercado", "Ações", "Cambial"],
        correta: 2,
        explicacao: "Com no mínimo <b>67%</b> em ações, o fundo é da classe Ações." },
      { enunciado: "Etapa 2 — Como fica a tributação para Gustavo?",
        alternativas: ["IR de 15% sobre o ganho, apenas no resgate, sem come-cotas", "Come-cotas de 15% em maio e novembro e ajuste no resgate", "Tabela regressiva de 22,5% a 15%", "Isento para resgates de até R$ 20 mil por mês"],
        correta: 0,
        explicacao: "Fundos de ações são tributados em <b>15% no resgate</b> e não têm come-cotas. A isenção de R$ 20 mil vale só para a venda direta de ações em bolsa." },
      { enunciado: "Etapa 3 — No ano, o fundo rendeu 8% e o Ibovespa, 10%. A taxa de performance:",
        alternativas: ["é cobrada sobre os 8% de rendimento", "não é cobrada, pois o fundo não superou o benchmark", "é cobrada sobre a diferença de 2 pontos percentuais", "é cobrada em dobro para compensar o resultado"],
        correta: 1,
        explicacao: "A performance só incide sobre o que <b>exceder o benchmark</b>. Como o fundo ficou abaixo do Ibovespa, não há cobrança. A taxa de administração, por outro lado, é cobrada normalmente." }
    ] },

  /* ===================== RESPOSTA CONSTRUÍDA ===================== */
  { id: "b3-a01", bloco: 3, tema: "Tributação", tipo: "aberta", nivel: 2,
    contexto: "Lucas aplicou <b>R$ 50.000</b> em um CDB pós-fixado e resgatou <b>500 dias</b> depois, com valor bruto de <b>R$ 58.000</b>.",
    enunciado: "Qual foi o valor do IR retido na fonte, em reais?",
    resposta: 1400, tolerancia: 1, unidade: "R$",
    explicacao: "Rendimento = 58.000 − 50.000 = R$ 8.000. Com 500 dias (faixa de 361 a 720), a alíquota é de 17,5%. IR = 8.000 × 0,175 = <b>R$ 1.400</b>. Valor líquido = R$ 56.600." },

  { id: "b3-a02", bloco: 3, tema: "Riscos e conceitos", tipo: "aberta", nivel: 2,
    contexto: "Um fundo de renda fixa rendeu <b>10,5%</b> em 12 meses. No mesmo período, o IPCA foi de <b>4,5%</b>.",
    enunciado: "Qual foi a rentabilidade real do fundo, em %, pela equação de Fisher? (use duas casas decimais)",
    resposta: 5.74, tolerancia: 0.02, unidade: "%",
    explicacao: "Taxa real = (1,105 ÷ 1,045) − 1 = 1,05742 − 1 ≈ <b>5,74%</b>. A subtração simples (6%) superestima o ganho real." },

  { id: "b3-a03", bloco: 3, tema: "Tributação", tipo: "aberta", nivel: 2,
    contexto: "Beatriz tem cotas de um fundo de renda fixa classificado como de <b>longo prazo</b>. No período até o último dia útil de novembro, o rendimento das cotas dela foi de <b>R$ 6.000</b>.",
    enunciado: "Quantos reais serão retidos a título de come-cotas nessa data?",
    resposta: 900, tolerancia: 1, unidade: "R$",
    explicacao: "Nos fundos de longo prazo, o come-cotas é de <b>15%</b>: 6.000 × 0,15 = <b>R$ 900</b>. No resgate, cobra-se a diferença até a alíquota da tabela regressiva correspondente ao prazo total da aplicação." }
);
