/* Bloco 1 — Prospecção e relacionamento com a pessoa investidora (20%) */
window.QUESTOES = window.QUESTOES || [];
window.QUESTOES.push(
  /* ===================== MÚLTIPLA ESCOLHA ===================== */
  { id: "b1-q01", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 1,
    enunciado: "Mariana comprou ações a R$ 40,00. Hoje elas valem R$ 28,00 e, apesar de os fundamentos da empresa terem piorado, ela diz que só vende quando voltar aos R$ 40,00. O comportamento de usar o preço de compra como referência para a decisão é típico de:",
    alternativas: ["Efeito manada", "Ancoragem", "Heurística da disponibilidade", "Viés do excesso de confiança"],
    correta: 1,
    explicacao: "Mariana fixa a decisão em um valor de referência (o preço pago), o que caracteriza <b>ancoragem</b>. O preço de compra é irrelevante para avaliar se a ação deve ou não ser mantida. Efeito manada seria seguir o grupo; disponibilidade seria basear-se em informações fáceis de lembrar." },

  { id: "b1-q02", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 1,
    enunciado: "Segundo a Teoria do Prospecto, de Kahneman e Tversky, a aversão à perda significa que:",
    alternativas: ["Os investidores sempre preferem ativos de renda fixa a ativos de renda variável", "Os investidores avaliam perdas e ganhos apenas pelo valor final do patrimônio", "A dor de uma perda é sentida com intensidade maior que o prazer de um ganho de mesmo valor", "O investidor racional busca minimizar o risco independentemente do retorno"],
    correta: 2,
    explicacao: "A Teoria do Prospecto mostra que a perda dói cerca de duas vezes mais do que um ganho equivalente dá prazer. Por isso o investidor avalia resultados em relação a um ponto de referência (ganho/perda), e não apenas pelo valor final do patrimônio." },

  { id: "b1-q03", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Paulo vende rapidamente as ações que subiram para \"garantir o lucro\", mas mantém por anos as que caíram, esperando recuperar o prejuízo. Esse padrão é conhecido como:",
    alternativas: ["Efeito disposição", "Viés de confirmação", "Contabilidade mental", "Viés do status quo"],
    correta: 0,
    explicacao: "O <b>efeito disposição</b> é a tendência de realizar ganhos cedo demais e segurar perdas por tempo demais — uma consequência direta da aversão à perda. Viés de confirmação é buscar informações que confirmem a própria opinião." },

  { id: "b1-q04", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Após uma série de reportagens sobre um golpe com criptoativos, Renata passou a considerar qualquer investimento digital extremamente arriscado, inclusive o Tesouro Direto. Ela está sob influência da heurística:",
    alternativas: ["Da representatividade", "Da ancoragem", "Da disponibilidade", "Do enquadramento"],
    correta: 2,
    explicacao: "A <b>heurística da disponibilidade</b> faz a pessoa superestimar a probabilidade de eventos que vêm facilmente à memória, como notícias recentes e marcantes. Representatividade seria julgar por semelhança com um estereótipo." },

  { id: "b1-q05", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Um cliente afirma: \"Essa empresa tem uma marca famosa e produtos ótimos, então certamente é um bom investimento\". Esse raciocínio ilustra a heurística da:",
    alternativas: ["Disponibilidade", "Ancoragem", "Aversão ao arrependimento", "Representatividade"],
    correta: 3,
    explicacao: "Na <b>representatividade</b>, julga-se algo pela semelhança com um estereótipo (\"boa empresa = bom investimento\"), ignorando dados como preço pago, valuation e probabilidades. Uma boa empresa pode ser um mau investimento se estiver cara." },

  { id: "b1-q06", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 1,
    enunciado: "Durante uma forte alta de um ativo, muitos clientes passam a pedir para comprá-lo apenas porque \"todo mundo está ganhando\". O viés presente é:",
    alternativas: ["Efeito manada", "Excesso de confiança", "Efeito disposição", "Contabilidade mental"],
    correta: 0,
    explicacao: "O <b>efeito manada</b> é a tendência de seguir o comportamento da maioria, sem análise própria. Costuma levar a compras em topos e vendas em fundos de mercado." },

  { id: "b1-q07", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Carlos mantém R$ 30 mil na poupança \"para a viagem\" rendendo pouco, enquanto paga juros do cheque especial de 8% ao mês em outra conta. Esse comportamento é exemplo de:",
    alternativas: ["Viés de confirmação", "Heurística da disponibilidade", "Ilusão de controle", "Contabilidade mental"],
    correta: 3,
    explicacao: "Na <b>contabilidade mental</b>, a pessoa separa o dinheiro em \"caixinhas\" e não percebe que ele é fungível. Do ponto de vista financeiro, quitar o cheque especial com a poupança seria muito mais vantajoso." },

  { id: "b1-q08", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Um assessor apresenta o mesmo fundo de duas formas: \"90% dos meses foram positivos\" e \"em 10% dos meses houve perda\". Os clientes preferem a primeira forma. Esse fenômeno é chamado de:",
    alternativas: ["Ancoragem", "Efeito manada", "Viés do status quo", "Efeito enquadramento (framing)"],
    correta: 3,
    explicacao: "O <b>enquadramento</b> mostra que a forma de apresentar uma mesma informação altera a decisão. A informação é idêntica, mas a versão com foco no ganho parece mais atraente." },

  { id: "b1-q09", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Depois de acertar três operações seguidas, Bruno passou a operar alavancado e a ignorar recomendações de diversificação, acreditando que \"sabe ler o mercado\". O viés predominante é:",
    alternativas: ["Excesso de confiança", "Aversão à perda", "Viés do status quo", "Aversão ao arrependimento"],
    correta: 0,
    explicacao: "O <b>excesso de confiança</b> leva o investidor a superestimar sua capacidade e suas informações, resultando em giro excessivo, concentração e alavancagem." },

  { id: "b1-q10", bloco: 1, tema: "Finanças comportamentais", tipo: "mc", nivel: 2,
    enunciado: "Uma cliente mantém há 10 anos a mesma aplicação herdada dos pais, mesmo sabendo que há alternativas melhores e equivalentes em risco. O comportamento é melhor descrito como:",
    alternativas: ["Viés do status quo", "Efeito manada", "Heurística da representatividade", "Excesso de confiança"],
    correta: 0,
    explicacao: "O <b>viés do status quo</b> é a preferência por manter a situação atual, evitando mudanças mesmo quando elas seriam vantajosas." },

  { id: "b1-q11", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 1,
    enunciado: "De acordo com a Resolução CVM 30, para definir o perfil do cliente o distribuidor deve analisar:",
    alternativas: ["Apenas a renda mensal e o patrimônio declarado", "A idade, a profissão e o estado civil do cliente", "Os objetivos de investimento, a situação financeira e o conhecimento do cliente", "O histórico de crédito e o score do cliente"],
    correta: 2,
    explicacao: "A CVM 30 exige verificar três dimensões: <b>objetivos</b> (prazo, preferências de risco, finalidade), <b>situação financeira</b> (renda, patrimônio, necessidades futuras de recursos) e <b>conhecimento</b> (experiência, formação, natureza e frequência das operações)." },

  { id: "b1-q12", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 2,
    enunciado: "Um cliente de perfil conservador insiste em aplicar em um fundo multimercado de alto risco, inadequado ao seu perfil. Segundo a regulação, o profissional deve:",
    alternativas: ["Recusar a operação, pois é proibido aplicar em produto inadequado", "Alterar o perfil do cliente para arrojado e realizar a operação", "Alertar o cliente sobre a inadequação e obter declaração expressa de ciência antes de executar", "Executar a ordem sem qualquer procedimento, pois a decisão é do cliente"],
    correta: 2,
    explicacao: "Quando o cliente quer investir em produto inadequado, a operação <b>não é proibida</b>: o distribuidor deve <b>alertar</b> sobre a inadequação, com as razões, e obter <b>declaração expressa</b> de que o cliente está ciente. Mudar o perfil para viabilizar a venda é infração grave." },

  { id: "b1-q13", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 2,
    enunciado: "Segundo a Resolução CVM 30, o perfil do cliente deve ser atualizado em intervalos não superiores a:",
    alternativas: ["12 meses", "36 meses", "6 meses", "24 meses"],
    correta: 3,
    explicacao: "A CVM 30 determina atualização do perfil em intervalos <b>não superiores a 24 meses</b>. Se o perfil estiver desatualizado, o cliente deve ser alertado e declarar ciência antes de aplicar." },

  { id: "b1-q14", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 2,
    enunciado: "No âmbito da prevenção à lavagem de dinheiro (Res. CVM 50), ao identificar uma operação com fortes indícios de lavagem, o profissional/instituição deve:",
    alternativas: ["Avisar o cliente e pedir explicações por escrito antes de qualquer comunicação", "Comunicar ao COAF no prazo de 24 horas, sem dar ciência ao cliente", "Encerrar imediatamente a conta do cliente e comunicar à CVM em 30 dias", "Comunicar ao Banco Central apenas se o valor superar R$ 50 mil"],
    correta: 1,
    explicacao: "Operações suspeitas devem ser comunicadas ao <b>COAF em até 24 horas</b> da conclusão da análise, e é <b>proibido dar ciência</b> ao cliente ou a terceiros (\"tipping off\"). Não há valor mínimo para a comunicação de suspeita." },

  { id: "b1-q15", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 2,
    enunciado: "Na lavagem de dinheiro, a etapa em que o criminoso realiza diversas transações para dificultar o rastreamento da origem dos recursos é chamada de:",
    alternativas: ["Colocação", "Integração", "Ocultação (estratificação)", "Conversão"],
    correta: 2,
    explicacao: "As três etapas clássicas são: <b>colocação</b> (inserir o dinheiro no sistema), <b>ocultação/estratificação</b> (várias operações para apagar o rastro) e <b>integração</b> (o recurso volta com aparência lícita)." },

  { id: "b1-q16", bloco: 1, tema: "Suitability e regras", tipo: "mc", nivel: 1,
    enunciado: "Um prospect que exerceu cargo de secretário de Estado até dois anos atrás procura a instituição para investir. No processo de cadastro, ele deve ser tratado como:",
    alternativas: ["Pessoa exposta politicamente (PEP), exigindo diligência reforçada", "Cliente comum, pois já deixou o cargo", "Investidor profissional, pela posição que ocupou", "Cliente impedido de abrir conta"],
    correta: 0,
    explicacao: "A condição de <b>PEP</b> permanece por <b>5 anos</b> após a pessoa deixar o cargo. Isso não impede o relacionamento, mas exige monitoramento e diligência reforçados, inclusive sobre a origem dos recursos." },

  { id: "b1-q17", bloco: 1, tema: "Funil de prospecção", tipo: "mc", nivel: 1,
    enunciado: "No funil de prospecção, a etapa em que o profissional verifica se o contato tem perfil, potencial e interesse para se tornar cliente é a:",
    alternativas: ["Geração de leads", "Pós-venda", "Qualificação", "Fechamento"],
    correta: 2,
    explicacao: "Na <b>qualificação</b>, o lead é avaliado (capacidade financeira, necessidade, momento de vida, interesse). Só os contatos qualificados avançam para reunião e proposta, o que torna o funil mais eficiente." },

  { id: "b1-q18", bloco: 1, tema: "Funil de prospecção", tipo: "mc", nivel: 2,
    enunciado: "Uma assessora percebe que seus melhores novos clientes vieram de recomendações de clientes satisfeitos. Para fortalecer essa fonte de prospecção, a estratégia mais adequada é:",
    alternativas: ["Investir na qualidade do pós-venda e pedir indicações de forma estruturada", "Aumentar o volume de ligações frias para listas compradas", "Oferecer produtos de maior retorno para gerar entusiasmo", "Reduzir o contato com clientes antigos para focar em novos"],
    correta: 0,
    explicacao: "A <b>indicação</b> é uma das fontes mais eficientes de novos clientes e nasce de um relacionamento e pós-venda de qualidade. Prometer retorno ou abandonar a base fere a confiança e a ética." },

  { id: "b1-q19", bloco: 1, tema: "Habilidades de relacionamento", tipo: "mc", nivel: 2,
    enunciado: "Em uma primeira reunião, qual atitude melhor representa a técnica de escuta ativa?",
    alternativas: ["Apresentar logo os produtos com melhor rentabilidade da casa", "Fazer perguntas fechadas para agilizar o preenchimento do cadastro", "Interromper o cliente para corrigir conceitos financeiros equivocados", "Fazer perguntas abertas, parafrasear o que o cliente disse e confirmar o entendimento"],
    correta: 3,
    explicacao: "A <b>escuta ativa</b> envolve perguntas abertas (\"o que esse dinheiro representa para você?\"), paráfrase e validação. Ela revela objetivos e emoções que o questionário sozinho não capta." },

  { id: "b1-q20", bloco: 1, tema: "Habilidades de relacionamento", tipo: "mc", nivel: 2,
    enunciado: "Um gerente recebe comissão maior ao distribuir o fundo da própria instituição. Ao recomendar esse fundo a um cliente, a conduta ética exigida é:",
    alternativas: ["Omitir a informação, pois a remuneração é assunto interno", "Recomendar o fundo apenas se ele for adequado ao perfil e dar transparência sobre o conflito de interesses", "Recomendar sempre o fundo próprio, pois a instituição o conhece melhor", "Recusar-se a distribuir qualquer fundo que gere comissão"],
    correta: 1,
    explicacao: "O Código ANBIMA de Distribuição exige agir com <b>transparência</b> e no <b>melhor interesse do cliente</b>. Conflitos de interesse devem ser identificados e informados, e a recomendação precisa ser adequada ao perfil." },

  { id: "b1-q21", bloco: 1, tema: "Bets", tipo: "mc", nivel: 1,
    enunciado: "Sobre as apostas de quota fixa (\"bets\"), regulamentadas pela Lei 14.790/2023, é correto afirmar que:",
    alternativas: ["São consideradas investimentos de renda variável e supervisionadas pela CVM", "As empresas autorizadas operam com domínio .bet.br e são reguladas pela Secretaria de Prêmios e Apostas do Ministério da Fazenda", "Os prêmios são isentos de Imposto de Renda para pessoas físicas", "Podem ser distribuídas por assessores de investimento como alternativa de diversificação"],
    correta: 1,
    explicacao: "Bets <b>não são investimentos</b>: são jogos de azar com expectativa negativa. A regulação é da <b>Secretaria de Prêmios e Apostas (SPA)</b> do Ministério da Fazenda e os sites autorizados usam o domínio <b>.bet.br</b>. Os prêmios líquidos são tributados pelo IR." },

  { id: "b1-q22", bloco: 1, tema: "Bets", tipo: "mc", nivel: 2,
    enunciado: "Na análise do extrato de um cliente, o assessor nota transferências frequentes e crescentes para sites de apostas, além do uso do limite do cheque especial. A conduta mais adequada é:",
    alternativas: ["Ignorar, pois o uso do dinheiro é decisão pessoal do cliente", "Sugerir que o cliente aposte valores menores para diversificar", "Recomendar produtos de alto risco para compensar as perdas", "Abordar o tema com cuidado, tratá-lo como sinal de alerta de endividamento e reavaliar a situação financeira"],
    correta: 3,
    explicacao: "Gastos recorrentes com apostas e uso de crédito caro são <b>sinais de alerta</b> de comportamento de risco e endividamento. O profissional deve conversar com empatia, rever a capacidade de poupança e priorizar a saúde financeira do cliente." },

  /* ===================== CASES ===================== */
  { id: "b1-c01", bloco: 1, tema: "Finanças comportamentais", tipo: "case", nivel: 2,
    contexto: "Fernanda, 38 anos, perfil moderado, tem uma carteira de R$ 200 mil. Em março, o Ibovespa caiu 12% e sua parcela em ações acumulou perda de R$ 9 mil. Ela liga para o assessor dizendo que quer vender tudo e ir para a poupança, porque \"não suporta ver o vermelho\". No ano anterior, com ganho de R$ 9 mil, ela mal comentou o resultado.",
    enunciado: "Qual viés explica a reação de Fernanda e qual a postura mais adequada do assessor?",
    alternativas: ["Efeito manada; executar a venda imediatamente para preservar a relação", "Aversão à perda; relembrar os objetivos e o horizonte definidos, mostrando que a alocação segue adequada ao perfil", "Excesso de confiança; sugerir aumentar a exposição em ações para recuperar a perda", "Ancoragem; trocar as ações por um fundo cambial para reduzir o risco"],
    correta: 1,
    explicacao: "Perdas e ganhos de mesmo valor geraram reações muito diferentes: é <b>aversão à perda</b>. O papel do assessor é retomar objetivos, horizonte e perfil para evitar decisões emocionais que transformam perdas temporárias em definitivas. Aumentar risco para \"recuperar\" seria inadequado." },

  { id: "b1-c02", bloco: 1, tema: "Suitability e regras", tipo: "case", nivel: 2,
    contexto: "Roberto, 55 anos, preencheu o questionário de perfil há 30 meses e foi classificado como moderado. Hoje ele pede para aplicar R$ 150 mil em um COE de capital em risco, classificado pela instituição como produto para perfil moderado. O assessor verifica que o perfil está vencido.",
    enunciado: "Qual o procedimento correto antes de executar a aplicação?",
    alternativas: ["Executar normalmente, já que o produto é compatível com o último perfil registrado", "Recusar a operação até que Roberto refaça o perfil, sem exceção", "Alertar Roberto de que o perfil está desatualizado e obter sua declaração expressa de ciência, ou atualizar o perfil antes da aplicação", "Reclassificar Roberto como conservador por precaução e vender apenas renda fixa"],
    correta: 2,
    explicacao: "Com o perfil vencido (mais de 24 meses), a CVM 30 exige <b>alertar</b> o cliente sobre a desatualização e obter <b>declaração expressa de ciência</b> antes da aplicação. O ideal é aproveitar o contato para atualizar o perfil." },

  { id: "b1-c03", bloco: 1, tema: "Funil de prospecção", tipo: "case", nivel: 2,
    contexto: "Lucas, assessor recém-contratado, recebeu 200 leads de um evento sobre planejamento financeiro. Ele agendou 40 conversas, das quais 15 tinham patrimônio e interesse compatíveis com a assessoria. Dessas, 8 receberam proposta e 4 viraram clientes. Os 4 clientes estão satisfeitos e já citaram amigos com perfil parecido.",
    enunciado: "Qual a melhor ação para Lucas otimizar seu funil de prospecção?",
    alternativas: ["Descartar os leads que não responderam e comprar uma lista nova", "Aumentar o número de reuniões sem qualificar, para ganhar escala", "Oferecer taxa zero para converter os 4 que receberam proposta e não fecharam", "Manter um pós-venda próximo com os 4 novos clientes e pedir indicações, registrando tudo no CRM"],
    correta: 3,
    explicacao: "Os clientes satisfeitos são a fonte mais barata e qualificada de novos negócios. <b>Pós-venda + indicação + registro no CRM</b> alimentam o topo do funil com contatos já qualificados. Reuniões sem qualificação desperdiçam tempo." },

  /* ===================== ÁRVORES DE DECISÃO ===================== */
  { id: "b1-t01", bloco: 1, tema: "Suitability e regras", tipo: "arvore", nivel: 3,
    contexto: "Tatiane, 29 anos, abriu conta há uma semana e ainda não respondeu o questionário de suitability. Ela quer aplicar R$ 20 mil em um fundo de ações indicado por uma amiga.",
    etapas: [
      { enunciado: "Etapa 1 — Antes de qualquer recomendação, qual é o primeiro passo do assessor?",
        alternativas: ["Aplicar no fundo, já que a ordem partiu da cliente", "Convidar Tatiane a preencher o questionário de perfil para identificar objetivos, situação financeira e conhecimento", "Recomendar um fundo DI, por ser seguro para qualquer cliente"],
        correta: 1,
        explicacao: "Sem perfil não há como verificar adequação. O primeiro passo é levantar o perfil conforme a CVM 30." },
      { enunciado: "Etapa 2 — Tatiane responde o questionário e é classificada como conservadora. Ela mantém o desejo de aplicar no fundo de ações. O que fazer?",
        alternativas: ["Alertá-la sobre a inadequação, explicando os riscos, e obter declaração expressa de ciência caso ela insista", "Refazer o questionário até o resultado ser arrojado", "Recusar definitivamente qualquer aplicação em fundo de ações"],
        correta: 0,
        explicacao: "A operação inadequada pode ocorrer por iniciativa da cliente, desde que haja <b>alerta</b> e <b>declaração expressa</b>. Manipular o questionário é infração." },
      { enunciado: "Etapa 3 — Durante a conversa, Tatiane revela que os R$ 20 mil são toda a sua reserva e que não tem outro dinheiro disponível. Qual a recomendação mais adequada?",
        alternativas: ["Seguir com o fundo de ações, pois ela já assinou a declaração", "Dividir em 50% fundo de ações e 50% poupança", "Orientar que os recursos componham primeiro uma reserva de emergência em ativo de liquidez diária e baixo risco"],
        correta: 2,
        explicacao: "Mesmo com a declaração, o melhor interesse da cliente é formar a <b>reserva de emergência</b> antes de assumir risco. A declaração não substitui a orientação adequada." }
    ] },

  { id: "b1-t02", bloco: 1, tema: "Suitability e regras", tipo: "arvore", nivel: 3,
    contexto: "Em uma conta de pessoa física sem histórico, o assessor observa depósitos fracionados de R$ 9.500 em espécie, em dias seguidos, totalizando R$ 190 mil em um mês. Em seguida, o cliente pede para transferir tudo para uma conta no exterior de um terceiro.",
    etapas: [
      { enunciado: "Etapa 1 — Como classificar a situação?",
        alternativas: ["Operação normal, pois cada depósito é inferior a R$ 10 mil", "Indício de lavagem de dinheiro (fracionamento para evitar controles), que deve ser analisado", "Situação que só exige atenção se o cliente for PEP", "Problema operacional a ser tratado pelo backoffice"],
        correta: 1,
        explicacao: "Fracionar depósitos para ficar abaixo de limites de controle é um sinal clássico de <b>colocação</b> na lavagem de dinheiro." },
      { enunciado: "Etapa 2 — Confirmada a suspeita após análise, qual o procedimento?",
        alternativas: ["Comunicar ao COAF em até 24 horas, sem informar o cliente", "Pedir ao cliente que justifique por escrito e só então decidir", "Avisar o cliente de que a conta será investigada", "Aguardar o fim do ano e incluir na declaração anual"],
        correta: 0,
        explicacao: "A comunicação ao <b>COAF</b> deve ocorrer em <b>até 24 horas</b> e é vedado dar ciência ao cliente. Avisá-lo pode configurar infração." }
    ] },

  /* ===================== RESPOSTA CONSTRUÍDA ===================== */
  { id: "b1-a01", bloco: 1, tema: "Funil de prospecção", tipo: "aberta", nivel: 2,
    contexto: "Uma assessora mediu seu funil no último trimestre: 400 leads, 80 reuniões realizadas, 20 propostas enviadas e 10 novos clientes. Ela quer conquistar 15 clientes no próximo trimestre mantendo a mesma taxa de conversão de leads em clientes.",
    enunciado: "Quantos leads ela precisará gerar no próximo trimestre?",
    resposta: 600, tolerancia: 0, unidade: "leads",
    explicacao: "Conversão lead → cliente = 10 ÷ 400 = 2,5%. Para 15 clientes: 15 ÷ 0,025 = <b>600 leads</b>." }
);
