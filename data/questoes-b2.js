/* Bloco 2 — Análise de informações do cliente (20%) */
window.QUESTOES = window.QUESTOES || [];
window.QUESTOES.push(
  /* ===================== MÚLTIPLA ESCOLHA ===================== */
  { id: "b2-q01", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 1,
    enunciado: "Um investidor que prioriza a preservação do capital, aceita retornos menores em troca de baixa oscilação e tem pouca tolerância a perdas tende a ser classificado como:",
    alternativas: ["Arrojado", "Moderado", "Conservador", "Agressivo"],
    correta: 2,
    explicacao: "O perfil <b>conservador</b> prioriza segurança e liquidez, aceitando menor retorno. O moderado aceita alguma oscilação em busca de retorno maior, e o arrojado tolera perdas relevantes no curto prazo." },

  { id: "b2-q02", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Na análise da dimensão \"situação financeira\" exigida pela Resolução CVM 30, devem ser considerados:",
    alternativas: ["O valor das receitas regulares, o patrimônio e a necessidade futura de recursos", "A formação acadêmica e a experiência profissional do cliente", "O prazo do investimento e as preferências de risco", "A quantidade de operações realizadas nos últimos 12 meses"],
    correta: 0,
    explicacao: "Situação financeira = <b>receitas regulares, patrimônio e necessidades futuras de recursos</b>. Formação, experiência e frequência de operações compõem o <b>conhecimento</b>; prazo e preferências de risco compõem os <b>objetivos</b>." },

  { id: "b2-q03", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Na dimensão \"objetivos de investimento\" da Resolução CVM 30, o distribuidor deve verificar:",
    alternativas: ["A renda mensal e o patrimônio líquido do cliente", "O período em que o cliente deseja manter o investimento, suas preferências de risco e a finalidade", "Os produtos com os quais o cliente já operou", "A formação acadêmica do cliente"],
    correta: 1,
    explicacao: "Os <b>objetivos</b> envolvem <b>prazo, preferências declaradas quanto ao risco e finalidade</b> do investimento. Renda e patrimônio são situação financeira; produtos já operados e formação são conhecimento." },

  { id: "b2-q04", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Diferenciar capacidade de risco e tolerância ao risco é importante porque:",
    alternativas: ["São sinônimos e o questionário mede ambos da mesma forma", "A tolerância é objetiva e a capacidade é emocional", "Apenas a tolerância deve ser considerada no suitability", "A capacidade depende da situação financeira, enquanto a tolerância depende da disposição emocional do cliente para suportar perdas"],
    correta: 3,
    explicacao: "<b>Capacidade</b> é objetiva (renda, patrimônio, horizonte, estabilidade). <b>Tolerância</b> é subjetiva (quanto o cliente aguenta emocionalmente). Quando divergem, a recomendação deve respeitar o mais restritivo." },

  { id: "b2-q05", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Um cliente jovem, com renda estável, sem dívidas e com horizonte de 25 anos, afirma que perde o sono com qualquer oscilação negativa. Em relação ao risco, ele possui:",
    alternativas: ["Alta capacidade e baixa tolerância ao risco", "Baixa capacidade e alta tolerância ao risco", "Alta capacidade e alta tolerância ao risco", "Baixa capacidade e baixa tolerância ao risco"],
    correta: 0,
    explicacao: "A situação financeira e o horizonte longo dão <b>alta capacidade</b>, mas o desconforto emocional indica <b>baixa tolerância</b>. A recomendação deve respeitar a tolerância e incluir educação financeira." },

  { id: "b2-q06", bloco: 2, tema: "Tipos de investidor", tipo: "mc", nivel: 1,
    enunciado: "Pela Resolução CVM 30, uma pessoa física é considerada investidor qualificado quando:",
    alternativas: ["Possui renda mensal superior a R$ 20 mil", "Possui investimentos financeiros superiores a R$ 1 milhão e atesta essa condição por escrito", "Possui investimentos financeiros superiores a R$ 10 milhões, sem necessidade de atestado", "Possui mais de 5 anos de experiência no mercado financeiro"],
    correta: 1,
    explicacao: "É <b>qualificado</b> quem tem <b>mais de R$ 1 milhão</b> em aplicações financeiras e atesta por escrito. Acima de <b>R$ 10 milhões</b>, também com atestado, é <b>profissional</b>. Renda não é critério." },

  { id: "b2-q07", bloco: 2, tema: "Tipos de investidor", tipo: "mc", nivel: 2,
    enunciado: "Um analista de valores mobiliários certificado, aprovado em exame reconhecido pela CVM, com R$ 300 mil investidos, pode ser considerado investidor qualificado?",
    alternativas: ["Não, pois não atinge R$ 1 milhão em aplicações", "Sim, para qualquer recurso que administre, inclusive de terceiros", "Sim, em relação aos seus recursos próprios", "Não, pois apenas instituições financeiras podem ser qualificadas"],
    correta: 2,
    explicacao: "Pessoas aprovadas em exames de qualificação técnica ou com certificações aprovadas pela CVM para registro de assessores, administradores, analistas e consultores são qualificadas <b>em relação aos recursos próprios</b>, independentemente do valor." },

  { id: "b2-q08", bloco: 2, tema: "Tipos de investidor", tipo: "mc", nivel: 1,
    enunciado: "É exemplo de investidor profissional, segundo a Resolução CVM 30:",
    alternativas: ["Pessoa física com R$ 2 milhões em aplicações", "Pessoa física aprovada na certificação CPA", "Microempresa com R$ 500 mil em caixa", "Companhia seguradora"],
    correta: 3,
    explicacao: "São <b>profissionais</b>: instituições financeiras, seguradoras, sociedades de capitalização, entidades de previdência (abertas e fechadas), fundos de investimento, e pessoas com mais de <b>R$ 10 milhões</b> em aplicações que atestem a condição, entre outros." },

  { id: "b2-q09", bloco: 2, tema: "Tipos de investidor", tipo: "mc", nivel: 3,
    enunciado: "A verificação de adequação (suitability) prevista na Resolução CVM 30 é dispensada quando o cliente:",
    alternativas: ["Tem sua carteira administrada discricionariamente por administrador de carteira autorizado pela CVM", "É pessoa física com mais de R$ 1 milhão em aplicações", "É pessoa física aprovada em exame de certificação reconhecido pela CVM", "Declara por escrito que não deseja preencher o questionário"],
    correta: 0,
    explicacao: "Há dispensa para <b>carteira administrada discricionariamente</b>, pessoa jurídica de direito público e investidores qualificados — <b>exceto</b> pessoas naturais qualificadas apenas pelo volume de investimentos ou por certificação. A simples recusa do cliente não dispensa o procedimento." },

  { id: "b2-q10", bloco: 2, tema: "Ciclo de vida", tipo: "mc", nivel: 1,
    enunciado: "Na fase de acumulação do ciclo de vida, típica do início da carreira, o investidor geralmente:",
    alternativas: ["Tem patrimônio elevado e foco na transferência de bens aos herdeiros", "Tem horizonte longo, renda em crescimento e maior capacidade de assumir riscos", "Depende dos rendimentos dos investimentos para cobrir suas despesas", "Deve concentrar todos os recursos em renda fixa pós-fixada"],
    correta: 1,
    explicacao: "Na <b>acumulação</b>, o patrimônio ainda é pequeno, mas o horizonte é longo e o capital humano (renda futura) é alto, o que aumenta a <b>capacidade de risco</b>. Transferência de bens é típica da fase de sucessão." },

  { id: "b2-q11", bloco: 2, tema: "Ciclo de vida", tipo: "mc", nivel: 2,
    enunciado: "Sônia, 67 anos, aposentada, vive dos rendimentos de seus investimentos. Na fase de usufruto em que se encontra, a carteira deve priorizar:",
    alternativas: ["Ativos de alto crescimento e baixa liquidez", "Concentração em ações de empresas iniciantes", "Geração de renda, preservação do patrimônio e liquidez compatível com as despesas", "Derivativos alavancados para compensar a falta de aportes"],
    correta: 2,
    explicacao: "Na fase de <b>usufruto/gastos</b>, o foco é gerar <b>renda</b>, <b>preservar</b> o capital e ter <b>liquidez</b> para as despesas, pois não há mais renda do trabalho para repor perdas." },

  { id: "b2-q12", bloco: 2, tema: "Ciclo de vida", tipo: "mc", nivel: 2,
    enunciado: "Um casal de 50 anos, com filhos já formados, patrimônio relevante e renda no auge, está na fase de:",
    alternativas: ["Acumulação", "Usufruto", "Transferência", "Consolidação"],
    correta: 3,
    explicacao: "Na <b>consolidação</b>, a renda é elevada, as despesas tendem a cair e o foco é ampliar o patrimônio para a aposentadoria, ainda com algum apetite a risco, porém com horizonte menor que na acumulação." },

  { id: "b2-q13", bloco: 2, tema: "Reserva de emergência", tipo: "mc", nivel: 1,
    enunciado: "O investimento mais adequado para a reserva de emergência deve ter, principalmente:",
    alternativas: ["Liquidez diária e baixo risco", "Alto potencial de retorno e prazo longo", "Isenção de IR, independentemente da liquidez", "Proteção contra a inflação com vencimento em 10 anos"],
    correta: 0,
    explicacao: "A reserva precisa estar disponível rapidamente e sem perdas: <b>liquidez diária e baixo risco</b> (Tesouro Selic, CDB com liquidez diária, fundo DI). Uma LCI com carência ou um Tesouro IPCA+ longo não atendem." },

  { id: "b2-q14", bloco: 2, tema: "Reserva de emergência", tipo: "mc", nivel: 2,
    enunciado: "Comparando um servidor público estável e um profissional autônomo com renda variável, ambos com as mesmas despesas mensais, é correto afirmar que:",
    alternativas: ["Ambos devem ter exatamente 6 meses de despesas como reserva", "O servidor precisa de reserva maior, pois sua renda é fixa", "O autônomo tende a precisar de uma reserva maior, pela instabilidade da renda", "Nenhum dos dois precisa de reserva se tiver cartão de crédito"],
    correta: 2,
    explicacao: "A reserva costuma variar de <b>3 a 12 meses de despesas</b>, conforme a estabilidade da renda. Quem tem renda instável (autônomo, empresário) precisa de reserva <b>maior</b>." },

  { id: "b2-q15", bloco: 2, tema: "Reserva de emergência", tipo: "mc", nivel: 2,
    enunciado: "Qual das aplicações abaixo é a MENOS indicada para compor a reserva de emergência?",
    alternativas: ["Tesouro Selic", "CDB de banco grande com liquidez diária a 100% do CDI", "Fundo DI com resgate em D+0", "LCA com prazo de vencimento de 2 anos e sem liquidez antecipada"],
    correta: 3,
    explicacao: "A <b>LCA sem liquidez</b> antes do vencimento não serve como reserva, mesmo sendo isenta de IR. As demais oferecem liquidez diária e baixo risco." },

  { id: "b2-q16", bloco: 2, tema: "Endividamento e liquidez", tipo: "mc", nivel: 1,
    enunciado: "Um cliente tem R$ 15 mil em dívida no rotativo do cartão (juros de 12% ao mês) e R$ 20 mil aplicados em um CDB que rende cerca de 1% ao mês. A orientação mais adequada é:",
    alternativas: ["Manter o CDB, pois é importante não mexer nos investimentos", "Usar parte da aplicação para quitar a dívida do rotativo", "Investir mais no CDB para que os rendimentos paguem a dívida", "Migrar o CDB para ações em busca de retorno superior aos juros"],
    correta: 1,
    explicacao: "Nenhum investimento de baixo risco rende 12% ao mês. <b>Quitar dívidas caras</b> (rotativo, cheque especial) é o \"investimento\" com maior retorno garantido. A diferença de juros destrói patrimônio." },

  { id: "b2-q17", bloco: 2, tema: "Endividamento e liquidez", tipo: "mc", nivel: 2,
    enunciado: "Capacidade de poupança pode ser definida como:",
    alternativas: ["O total de investimentos do cliente dividido por sua idade", "A diferença entre a renda e as despesas do cliente em determinado período", "O saldo médio da conta corrente nos últimos 12 meses", "O limite de crédito pré-aprovado pelo banco"],
    correta: 1,
    explicacao: "<b>Capacidade de poupança = renda − despesas</b>. É ela que define o valor possível de aportes e, junto com o patrimônio, a viabilidade dos objetivos." },

  { id: "b2-q18", bloco: 2, tema: "Endividamento e liquidez", tipo: "mc", nivel: 2,
    enunciado: "Um cliente com renda líquida de R$ 10 mil paga R$ 4,5 mil por mês em parcelas de financiamentos e empréstimos. Sobre essa situação, é correto afirmar que:",
    alternativas: ["O comprometimento de renda é baixo e permite assumir novos financiamentos", "O cliente deve priorizar investimentos de longo prazo e baixa liquidez", "O endividamento é irrelevante para a definição do perfil", "O comprometimento de 45% da renda é elevado e reduz a capacidade de poupança e de assumir riscos"],
    correta: 3,
    explicacao: "Comprometer <b>45% da renda</b> com dívidas é elevado (referências usuais apontam até cerca de 30%). Isso reduz a capacidade de poupança e de risco e deve ser considerado na recomendação." },

  { id: "b2-q19", bloco: 2, tema: "Endividamento e liquidez", tipo: "mc", nivel: 2,
    enunciado: "Uma cliente precisará de R$ 80 mil em 8 meses para dar entrada em um imóvel. O critério MAIS relevante na escolha do investimento para esse valor é:",
    alternativas: ["Prazo e liquidez compatíveis com a data da necessidade, com baixo risco", "A maior rentabilidade histórica dos últimos 5 anos", "A isenção de IR, mesmo que o vencimento seja após 8 meses", "A diversificação em ações para aproveitar oportunidades"],
    correta: 0,
    explicacao: "Para um objetivo de <b>curto prazo e valor definido</b>, o investimento deve vencer ou ter liquidez até a data, com <b>baixo risco</b>. Volatilidade ou prazo incompatível podem frustrar o objetivo." },

  { id: "b2-q20", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Sobre o horizonte de investimento, é correto afirmar que:",
    alternativas: ["Quanto menor o horizonte, maior deve ser a exposição a renda variável", "O horizonte só é relevante para investidores profissionais", "Horizontes mais longos permitem, em geral, maior exposição a ativos voláteis, pois há tempo para recuperar oscilações", "O horizonte não interfere na escolha de produtos com carência"],
    correta: 2,
    explicacao: "Com <b>horizonte longo</b>, o investidor pode atravessar ciclos de queda. Para prazos curtos, a volatilidade pode obrigar a resgatar no momento errado." },

  { id: "b2-q21", bloco: 2, tema: "Perfil do investidor", tipo: "mc", nivel: 2,
    enunciado: "Na dimensão \"conhecimento\" da Resolução CVM 30, o distribuidor deve considerar:",
    alternativas: ["A necessidade futura de recursos do cliente", "Os tipos de produtos com que o cliente tem familiaridade, a natureza, volume e frequência das operações e sua formação e experiência profissional", "O prazo pelo qual o cliente deseja manter a aplicação", "A renda mensal e o patrimônio do cliente"],
    correta: 1,
    explicacao: "<b>Conhecimento</b> = familiaridade com produtos, <b>natureza, volume e frequência</b> das operações anteriores, além de <b>formação acadêmica e experiência profissional</b>." },

  { id: "b2-q22", bloco: 2, tema: "Ciclo de vida", tipo: "mc", nivel: 2,
    enunciado: "Na fase de transferência (sucessão) do ciclo de vida, uma preocupação típica do investidor é:",
    alternativas: ["Montar a primeira reserva de emergência", "Assumir mais risco para acelerar a acumulação", "Contratar o primeiro financiamento imobiliário", "Organizar a sucessão patrimonial, considerando custos e prazos de inventário"],
    correta: 3,
    explicacao: "Na fase de <b>transferência</b>, o foco é planejar a <b>sucessão</b>: instrumentos como previdência privada (fora do inventário), doações em vida e testamento ganham relevância." },

  /* ===================== CASES ===================== */
  { id: "b2-c01", bloco: 2, tema: "Reserva de emergência", tipo: "case", nivel: 2,
    contexto: "Diego, 32 anos, é designer autônomo com renda média de R$ 9 mil, que oscila bastante. Suas despesas mensais são de R$ 6 mil. Ele tem R$ 15 mil na conta corrente e quer começar a investir em ações, pois \"tem horizonte longo\". Não possui dívidas.",
    enunciado: "Qual deve ser a prioridade na recomendação para Diego?",
    alternativas: ["Aplicar os R$ 15 mil em ações, aproveitando o horizonte longo", "Comprar um título IPCA+ com vencimento em 2045", "Aplicar em LCI com carência de 12 meses pela isenção de IR", "Construir uma reserva de emergência mais robusta, de cerca de 12 meses de despesas, em ativos de liquidez diária e baixo risco"],
    correta: 3,
    explicacao: "Com renda <b>instável</b>, a reserva deve ser maior (próxima de 12 meses de despesas, ou seja, cerca de R$ 72 mil). Os R$ 15 mil cobrem apenas 2,5 meses. Antes de assumir risco, Diego precisa de <b>liquidez e segurança</b>." },

  { id: "b2-c02", bloco: 2, tema: "Tipos de investidor", tipo: "case", nivel: 3,
    contexto: "Helena, 45 anos, médica, possui R$ 1,4 milhão em aplicações financeiras, além de dois imóveis. Ela quer investir em um fundo destinado exclusivamente a investidores qualificados. No questionário de perfil, foi classificada como moderada.",
    enunciado: "Sobre a situação de Helena, é correto afirmar que:",
    alternativas: ["Ela pode ser considerada qualificada se atestar por escrito essa condição, mas a análise de suitability continua obrigatória", "Ela é automaticamente investidora profissional, pois tem imóveis", "Ela não pode ser qualificada, pois os imóveis não contam e não é certificada", "Ao ser qualificada, ela fica dispensada do suitability"],
    correta: 0,
    explicacao: "Com mais de <b>R$ 1 milhão em aplicações financeiras</b> e atestado por escrito, Helena é <b>qualificada</b>. Como é pessoa natural qualificada apenas pelo volume, <b>não</b> há dispensa do suitability. Imóveis não entram no cálculo." },

  { id: "b2-c03", bloco: 2, tema: "Endividamento e liquidez", tipo: "case", nivel: 2,
    contexto: "Rafael e Júlia têm renda familiar líquida de R$ 14 mil e despesas de R$ 11 mil. Possuem R$ 8 mil em dívida no cheque especial (juros de 8% ao mês), R$ 25 mil em um fundo DI e R$ 40 mil em ações. Eles querem saber se devem fazer novos aportes em ações.",
    enunciado: "Qual a recomendação mais adequada?",
    alternativas: ["Aportar os R$ 3 mil mensais em ações para aproveitar o mercado", "Vender as ações para quitar o cheque especial e manter o fundo DI intacto", "Quitar o cheque especial com recursos do fundo DI e recompor a reserva com os próximos aportes", "Tomar um empréstimo para quitar o cheque especial e manter todos os investimentos"],
    correta: 2,
    explicacao: "Os juros de 8% ao mês superam qualquer investimento. Usar o <b>fundo DI</b> (líquido e de baixo risco) para quitar a dívida é a melhor saída; vender ações pode realizar perdas. Depois, os R$ 3 mil de sobra mensal recompõem a reserva." },

  /* ===================== ÁRVORES DE DECISÃO ===================== */
  { id: "b2-t01", bloco: 2, tema: "Perfil do investidor", tipo: "arvore", nivel: 3,
    contexto: "Marcelo, 41 anos, engenheiro, renda líquida de R$ 18 mil e despesas de R$ 10 mil. Tem R$ 120 mil em CDB com liquidez diária, nenhuma dívida e quer se aposentar aos 60 anos. Nunca investiu em renda variável, mas diz aceitar oscilações moderadas.",
    etapas: [
      { enunciado: "Etapa 1 — Considerando as despesas de R$ 10 mil e a renda estável de CLT, a reserva de emergência já está formada?",
        alternativas: ["Não, ele precisaria de pelo menos R$ 300 mil", "Sim, R$ 120 mil cobrem 12 meses de despesas, acima do necessário para renda estável", "Não, porque CDB não pode ser usado como reserva"],
        correta: 1,
        explicacao: "R$ 120 mil ÷ R$ 10 mil = <b>12 meses</b>. Para renda estável, 6 meses (R$ 60 mil) já seriam suficientes, sobrando cerca de R$ 60 mil para objetivos de longo prazo." },
      { enunciado: "Etapa 2 — Qual dimensão do perfil merece mais atenção antes de recomendar renda variável?",
        alternativas: ["Situação financeira, que é frágil", "Objetivos, porque o prazo é curto", "Conhecimento, pois ele nunca investiu em renda variável"],
        correta: 2,
        explicacao: "A situação financeira é sólida e o horizonte é de 19 anos. O ponto de atenção é o <b>conhecimento</b>: é preciso explicar riscos e começar de forma gradual." },
      { enunciado: "Etapa 3 — Qual o encaminhamento mais adequado para o excedente?",
        alternativas: ["Alocação gradual em uma carteira diversificada compatível com perfil moderado, com educação sobre os riscos", "Aplicar todo o excedente em uma única ação de alto crescimento", "Manter tudo no CDB até a aposentadoria"],
        correta: 0,
        explicacao: "Uma entrada <b>gradual</b> e <b>diversificada</b>, alinhada ao perfil moderado e ao horizonte longo, combinada com educação financeira, equilibra retorno e conforto do cliente." }
    ] },

  { id: "b2-t02", bloco: 2, tema: "Ciclo de vida", tipo: "arvore", nivel: 2,
    contexto: "Dona Lúcia, 72 anos, viúva, recebe aposentadoria de R$ 4 mil e tem despesas de R$ 7 mil. Possui R$ 900 mil aplicados, dos quais R$ 500 mil estão em ações de uma única empresa herdada do marido.",
    etapas: [
      { enunciado: "Etapa 1 — Em que fase do ciclo de vida Dona Lúcia se encontra?",
        alternativas: ["Acumulação", "Usufruto/gastos, dependendo dos investimentos para complementar a renda", "Consolidação"],
        correta: 1,
        explicacao: "Ela consome R$ 3 mil por mês do patrimônio para cobrir despesas: fase de <b>usufruto</b>." },
      { enunciado: "Etapa 2 — Qual o principal risco da carteira atual?",
        alternativas: ["Concentração elevada em uma única ação, incompatível com a necessidade de renda e preservação", "Excesso de liquidez", "Baixa exposição a renda variável"],
        correta: 0,
        explicacao: "Mais da metade do patrimônio em <b>uma única ação</b> gera risco não sistemático elevado, inadequado para quem depende do patrimônio." },
      { enunciado: "Etapa 3 — Qual a recomendação mais coerente?",
        alternativas: ["Vender tudo e comprar outra ação com maior dividendo", "Manter a ação por respeito à herança, sem ajustes", "Reduzir gradualmente a concentração, direcionando recursos para ativos geradores de renda e liquidez, considerando os efeitos tributários"],
        correta: 2,
        explicacao: "Uma redução <b>gradual</b> da concentração, considerando IR e o vínculo emocional, alinha a carteira às necessidades de <b>renda, liquidez e preservação</b>." }
    ] },

  /* ===================== RESPOSTA CONSTRUÍDA ===================== */
  { id: "b2-a01", bloco: 2, tema: "Reserva de emergência", tipo: "aberta", nivel: 2,
    contexto: "Priscila é empresária, com renda variável. Suas despesas mensais fixas são de R$ 7.500. O assessor recomenda uma reserva de emergência de 9 meses de despesas. Ela já tem R$ 30.000 no Tesouro Selic.",
    enunciado: "Quantos reais ainda faltam para completar a reserva de emergência recomendada?",
    resposta: 37500, tolerancia: 0, unidade: "R$",
    explicacao: "Reserva-alvo = 9 × R$ 7.500 = R$ 67.500. Faltam R$ 67.500 − R$ 30.000 = <b>R$ 37.500</b>." }
);
