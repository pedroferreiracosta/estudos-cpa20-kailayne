/* =========================================================
   Conteúdo teórico — C-Pro R (antiga CPA-20)
   Ordem de estudo sugerida: Bloco 2 → Bloco 1 → Bloco 3 → Bloco 4
   ========================================================= */
window.CONTEUDO = {
  blocos: [
    /* ======================= BLOCO 1 ======================= */
    {
      id: 1, cor: "b1", peso: 20, ordem: 2,
      nome: "Prospecção e relacionamento",
      resumo: "Finanças comportamentais, suitability e regras de distribuição, funil de prospecção e o básico sobre bets.",
      topicos: [
        {
          id: "b1-comportamentais", titulo: "Finanças comportamentais", prioridade: "max",
          resumo: "Heurísticas, vieses e teoria do prospecto: por que o investidor decide mal.",
          html: `
<p>As finanças tradicionais supõem um investidor <b>racional</b>, que processa toda a informação e maximiza utilidade. As <b>finanças comportamentais</b> (Daniel Kahneman e Amos Tversky, Richard Thaler) mostram que as pessoas usam <b>atalhos mentais</b> e cometem <b>erros sistemáticos</b>. Na prova, quase sempre aparece um cliente agindo de um jeito e você precisa <b>dar nome ao viés</b> e dizer como o profissional deve agir.</p>

<h2>Teoria do prospecto (Prospect Theory)</h2>
<ul>
  <li>As pessoas avaliam ganhos e perdas em relação a um <b>ponto de referência</b>, não ao patrimônio total.</li>
  <li><b>Aversão à perda</b>: a dor de perder é cerca de <b>duas vezes</b> maior que o prazer de ganhar o mesmo valor.</li>
  <li>No campo dos <b>ganhos</b>, o investidor é <b>avesso ao risco</b> (prefere garantir o lucro). No campo das <b>perdas</b>, ele <b>busca risco</b> (aposta para "recuperar").</li>
</ul>

<h2>Heurísticas: os atalhos mentais</h2>
<div class="table-wrap"><table>
<tr><th>Heurística</th><th>O que é</th><th>Exemplo de prova</th></tr>
<tr><td><b>Disponibilidade</b></td><td>Julgar a probabilidade pela facilidade de lembrar exemplos.</td><td>Cliente não quer ações porque lembra muito bem da crise que viu no jornal.</td></tr>
<tr><td><b>Representatividade</b></td><td>Julgar por estereótipos ou semelhança, ignorando estatística e amostras pequenas.</td><td>"Essa empresa é igual à que multiplicou por 10, então vai repetir."</td></tr>
<tr><td><b>Ancoragem</b></td><td>Fixar-se num número inicial (âncora) e ajustar pouco a partir dele.</td><td>Só vende a ação quando voltar ao preço que pagou.</td></tr>
</table></div>

<h2>Vieses mais cobrados</h2>
<div class="table-wrap"><table>
<tr><th>Viés</th><th>Como reconhecer</th></tr>
<tr><td><b>Aversão à perda</b></td><td>Segura o ativo perdedor para "não realizar o prejuízo"; recusa produto adequado por medo de qualquer oscilação.</td></tr>
<tr><td><b>Efeito disposição</b></td><td>Vende rápido o que está ganhando e mantém o que está perdendo.</td></tr>
<tr><td><b>Efeito manada</b></td><td>Investe porque "todo mundo está comprando"; segue influenciadores e grupos.</td></tr>
<tr><td><b>Excesso de confiança</b></td><td>Superestima a própria habilidade, gira demais a carteira, concentra posições.</td></tr>
<tr><td><b>Ilusão de controle</b></td><td>Acha que consegue controlar resultados aleatórios.</td></tr>
<tr><td><b>Contabilidade mental</b></td><td>Trata o dinheiro de forma diferente conforme a origem ou o rótulo: "dinheiro do bônus pode arriscar", mas mantém dívida cara enquanto aplica.</td></tr>
<tr><td><b>Enquadramento (framing)</b></td><td>Decide de forma diferente conforme a apresentação: "90% de chance de ganhar" contra "10% de chance de perder".</td></tr>
<tr><td><b>Viés de confirmação</b></td><td>Só procura informação que confirma o que já pensa.</td></tr>
<tr><td><b>Status quo / inércia</b></td><td>Prefere não mudar nada, mesmo quando a carteira está inadequada.</td></tr>
<tr><td><b>Aversão ao arrependimento</b></td><td>Evita decidir por medo de se arrepender depois.</td></tr>
<tr><td><b>Viés de retrospectiva</b></td><td>"Eu sabia que ia cair": depois do fato, tudo parece óbvio.</td></tr>
<tr><td><b>Otimismo / viés de autoatribuição</b></td><td>Atribui os acertos a si mesmo e os erros ao azar ou ao mercado.</td></tr>
</table></div>

<div class="callout tip"><b>Como o profissional deve agir</b>
<p>Ele não "concorda" com o viés nem faz o que o cliente pede sem pensar. Deve <b>educar</b>, mostrar dados, reenquadrar a decisão com base nos <b>objetivos e no perfil</b>, propor <b>regras previamente combinadas</b> (como rebalanceamento e limites de concentração) e registrar tudo.</p></div>

<div class="callout trap"><b>Pegadinha clássica</b>
<p>Ancoragem e aversão à perda aparecem juntas. "Só vendo quando voltar ao preço que paguei" tem uma âncora (o preço pago) e, por trás, aversão a realizar a perda. Leia o enunciado e veja qual comportamento ele <b>destaca</b>.</p></div>
`
        },
        {
          id: "b1-regras", titulo: "Suitability e regras de distribuição", prioridade: "max",
          resumo: "Res. CVM 30, Código ANBIMA de Distribuição, alertas de inadequação e PLD/FT.",
          html: `
<h2>Resolução CVM 30/2021: o dever de verificar a adequação</h2>
<p>Quem distribui ou recomenda produtos (instituições, assessores, consultores) <b>não pode recomendar</b> produtos, serviços ou operações sem verificar se eles são <b>adequados ao perfil</b> do cliente. A análise considera três pilares:</p>
<div class="table-wrap"><table>
<tr><th>Pilar</th><th>O que avaliar</th></tr>
<tr><td><b>Objetivos</b></td><td>Prazo de investimento, preferências declaradas quanto ao risco, finalidade do investimento.</td></tr>
<tr><td><b>Situação financeira</b></td><td>Renda regular, patrimônio, necessidade futura de recursos.</td></tr>
<tr><td><b>Conhecimento</b></td><td>Produtos com que tem familiaridade; natureza, volume e frequência das operações; formação acadêmica e experiência profissional.</td></tr>
</table></div>
<ul>
  <li>O perfil deve ser <b>atualizado em intervalos não superiores a 24 meses</b>.</li>
  <li>Os produtos também precisam ser <b>classificados</b> por risco, considerando liquidez, complexidade, risco de crédito, garantias e prazo.</li>
  <li><b>Vedações</b>: recomendar produto inadequado; recomendar quando o cliente <b>não tem perfil</b>; recomendar com perfil <b>desatualizado</b>.</li>
</ul>

<h3>E se o cliente insistir?</h3>
<div class="callout key"><b>Ordem por iniciativa do cliente</b>
<p>Se o cliente quiser aplicar num produto <b>inadequado</b>, ou estiver <b>sem perfil</b> ou com o perfil <b>desatualizado</b>, a instituição deve, <b>antes da primeira operação</b>, <b>alertá-lo</b> sobre a situação e obter uma <b>declaração expressa</b> de que ele está ciente. Ela não precisa recusar a operação.</p></div>

<h3>Dispensa de suitability (CVM 30)</h3>
<ul>
  <li>Cliente <b>investidor qualificado</b>, <b>exceto</b> as pessoas naturais que só são qualificadas pelo volume investido ou por certificação. Na prática, a pessoa física com mais de R$ 1 milhão <b>continua</b> passando pelo suitability.</li>
  <li>Pessoa jurídica de direito público.</li>
  <li>Cliente com carteira <b>administrada discricionariamente</b> por administrador autorizado pela CVM, porque o gestor já cuida da adequação.</li>
</ul>

<h2>Código ANBIMA de Distribuição de Produtos de Investimento</h2>
<ul>
  <li>É <b>autorregulação</b>. Vale para as instituições que aderem e complementa a regulação da CVM.</li>
  <li>A ANBIMA chama o suitability de <b>API (Análise do Perfil do Investidor)</b>.</li>
  <li>Exige <b>certificação</b> dos profissionais que distribuem produtos. A antiga CPA-10 virou <b>CPA</b>, a CPA-20 virou <b>C-Pro R</b> e a CEA virou <b>C-Pro I</b>.</li>
  <li>Traz regras de <b>publicidade</b> (material técnico × publicitário, avisos obrigatórios, "rentabilidade passada não é garantia de rentabilidade futura"), de transparência sobre <b>remuneração</b> e de conflito de interesses.</li>
  <li>Segmenta o atendimento em <b>varejo</b>, <b>alta renda</b> e <b>private</b>.</li>
</ul>
<div class="callout trap"><b>Pegadinha</b><p>A ANBIMA <b>não</b> é órgão do governo. Ela autorregula os seus associados. Quem regula e fiscaliza o mercado de capitais é a <b>CVM</b>. A previdência aberta e os seguros ficam com a <b>SUSEP</b>, e as instituições financeiras com o <b>Banco Central</b>.</p></div>

<h2>Prevenção à lavagem de dinheiro (PLD/FT)</h2>
<ul>
  <li>Base legal: <b>Lei 9.613/1998</b> e, no mercado de capitais, <b>Resolução CVM 50/2021</b>, com abordagem baseada em risco.</li>
  <li>Etapas da lavagem: <b>colocação → ocultação (estratificação) → integração</b>.</li>
  <li><b>Conheça seu cliente (KYC)</b>: cadastro atualizado, origem dos recursos, compatibilidade das operações com a renda e o patrimônio.</li>
  <li>Operações suspeitas são comunicadas ao <b>COAF</b> em até <b>24 horas</b> após a conclusão da análise, <b>sem dar ciência ao cliente</b>.</li>
  <li>Registros e cadastro devem ser guardados por <b>5 anos</b>.</li>
  <li><b>PEP (Pessoa Exposta Politicamente)</b> exige diligência reforçada. A condição vale por <b>5 anos</b> depois que a pessoa deixa o cargo e se estende a familiares e estreitos colaboradores.</li>
</ul>
`
        },
        {
          id: "b1-funil", titulo: "Funil de prospecção e relacionamento", prioridade: "med",
          resumo: "Do lead ao pós-venda: as etapas do funil e as habilidades do profissional.",
          html: `
<h2>As etapas do funil</h2>
<div class="table-wrap"><table>
<tr><th>Etapa</th><th>O que acontece</th></tr>
<tr><td><b>1. Lead / suspect</b></td><td>Contato com potencial: veio de evento, conteúdo, indicação, lista ou redes sociais.</td></tr>
<tr><td><b>2. Prospect qualificado</b></td><td>Você confirma se ele tem <b>potencial, necessidade e interesse</b> (patrimônio, momento de vida, decisor).</td></tr>
<tr><td><b>3. Primeira reunião / diagnóstico</b></td><td>Escuta ativa, perguntas abertas, levantamento de objetivos, situação financeira e conhecimento (base do suitability).</td></tr>
<tr><td><b>4. Proposta</b></td><td>Recomendação aderente ao perfil, com riscos, custos e alternativas explicados.</td></tr>
<tr><td><b>5. Fechamento</b></td><td>Tratamento de objeções, formalização, abertura de conta e cadastro (KYC).</td></tr>
<tr><td><b>6. Pós-venda / relacionamento</b></td><td>Acompanhamento, revisões periódicas, rebalanceamento e geração de <b>indicações</b>.</td></tr>
</table></div>
<p>O funil "afunila": entram muitos leads e poucos viram clientes. Usar um <b>CRM</b> e medir a <b>taxa de conversão</b> entre as etapas mostra onde está o gargalo.</p>

<h2>Prospecção ativa × passiva</h2>
<ul>
  <li><b>Ativa</b>: o profissional vai atrás (ligações, eventos, networking, pedir indicações).</li>
  <li><b>Passiva (inbound)</b>: o cliente chega por conteúdo, reputação ou marca.</li>
  <li><b>Indicação</b> costuma ser o canal de maior conversão, porque a confiança é transferida de quem indicou.</li>
</ul>

<h2>Habilidades de relacionamento</h2>
<ul>
  <li><b>Escuta ativa</b> e <b>perguntas abertas</b> ("o que esse dinheiro representa para você?") rendem mais informação que perguntas fechadas.</li>
  <li><b>Objeções</b> devem ser acolhidas e esclarecidas, nunca rebatidas com pressão.</li>
  <li><b>Ética</b>: transparência sobre a remuneração, evitar <b>conflito de interesses</b> (empurrar produto pela comissão) e nunca garantir rentabilidade.</li>
  <li>O <b>investidor brasileiro</b> tem histórico de concentração em poupança e renda fixa, baixa educação financeira e forte influência de redes sociais. O papel do profissional é educar e diversificar com cuidado.</li>
</ul>
<div class="callout tip"><b>Na prova</b><p>Quando a pergunta é "qual a próxima etapa", siga a ordem do funil. Não existe proposta antes do diagnóstico, nem recomendação antes de conhecer o perfil.</p></div>
`
        },
        {
          id: "b1-bets", titulo: "Bets: o básico", prioridade: "bas",
          resumo: "Lei 14.790/2023, regulação e por que bet não é investimento.",
          html: `
<ul>
  <li><b>Lei 14.790/2023</b> regulamentou as <b>apostas de quota fixa</b> (bets esportivas e jogos on-line).</li>
  <li>Quem regula e autoriza é a <b>Secretaria de Prêmios e Apostas (SPA) do Ministério da Fazenda</b>. Os sites autorizados usam o domínio <b>.bet.br</b>.</li>
  <li>Proibidas para menores de 18 anos. O pagamento com <b>cartão de crédito</b> e cripto é vedado.</li>
  <li>Os prêmios líquidos sofrem <b>IR de 15%</b> sobre o ganho anual que passar da faixa de isenção.</li>
</ul>
<div class="callout key"><b>O ponto que cai</b>
<p>Bet <b>não é investimento</b>: tem expectativa de retorno negativa para o apostador. Se o cliente resgata aplicações com frequência para apostar, se endivida ou trata aposta como "renda extra", isso é <b>sinal de alerta</b> de comportamento de risco e endividamento. O profissional deve orientar, reforçar a reserva de emergência e os objetivos, e nunca recomendar apostas.</p></div>
`
        }
      ]
    },

    /* ======================= BLOCO 2 ======================= */
    {
      id: 2, cor: "b2", peso: 20, ordem: 1,
      nome: "Análise de informações do cliente",
      resumo: "Perfil de risco, tipos de investidor, ciclo de vida, reserva de emergência, liquidez e endividamento.",
      topicos: [
        {
          id: "b2-perfil", titulo: "Perfil: conservador, moderado e arrojado", prioridade: "max",
          resumo: "Como o perfil é formado e o que combina com cada um.",
          html: `
<p>O perfil sai do questionário de suitability (objetivos, situação financeira e conhecimento). Os nomes variam entre instituições, mas a lógica é sempre a mesma:</p>
<div class="table-wrap"><table>
<tr><th>Perfil</th><th>Características</th><th>Produtos típicos</th></tr>
<tr><td><b>Conservador</b></td><td>Prioriza segurança e liquidez, tolera pouca ou nenhuma oscilação, prazo curto.</td><td>Tesouro Selic, CDB de grandes bancos, LCI/LCA, fundos DI e RF simples.</td></tr>
<tr><td><b>Moderado</b></td><td>Aceita alguma oscilação em troca de retorno maior, prazo médio, diversifica.</td><td>Os anteriores mais crédito privado, IPCA+, multimercados e uma parcela pequena de RV.</td></tr>
<tr><td><b>Arrojado / agressivo</b></td><td>Aceita perdas no curto prazo em busca de retorno maior, horizonte longo, mais conhecimento.</td><td>Ações, FII, multimercados, exterior, COE de capital em risco, derivativos.</td></tr>
</table></div>

<h2>Capacidade × tolerância ao risco</h2>
<ul>
  <li><b>Capacidade</b> é objetiva: quanto risco a situação financeira <b>permite</b> (renda estável, patrimônio, prazo, dependentes).</li>
  <li><b>Tolerância</b> é subjetiva: quanto risco o cliente <b>aguenta emocionalmente</b>.</li>
  <li>Quando as duas divergem, prevalece a <b>mais restritiva</b>. Um cliente jovem e rico (alta capacidade) que entra em pânico com qualquer queda (baixa tolerância) não deve receber carteira agressiva.</li>
</ul>
<div class="callout trap"><b>Pegadinha</b><p>Ter muito dinheiro <b>não</b> torna ninguém arrojado. Ser jovem também não. O perfil depende do conjunto: objetivos, prazo, situação financeira e conhecimento.</p></div>
<div class="callout tip"><b>Quando refazer o perfil</b><p>No máximo a cada <b>24 meses</b> (CVM 30) e sempre que houver <b>evento relevante</b>: casamento, divórcio, filho, herança, perda de emprego, aposentadoria, mudança de objetivo.</p></div>
`
        },
        {
          id: "b2-categorias", titulo: "Investidor comum, qualificado e profissional", prioridade: "max",
          resumo: "Os critérios da Res. CVM 30 e o que cada categoria pode acessar.",
          html: `
<div class="table-wrap"><table>
<tr><th>Categoria</th><th>Quem é</th></tr>
<tr><td><b>Investidor profissional</b></td><td>
• Instituições financeiras, seguradoras, sociedades de capitalização, EFPC e EAPC (previdência), fundos de investimento.<br>
• PF ou PJ com <b>mais de R$ 10 milhões</b> em aplicações financeiras, que <b>atesta por escrito</b>.<br>
• Assessores, administradores de carteira, analistas e consultores autorizados pela CVM, em relação aos recursos próprios.<br>
• Investidores não residentes.</td></tr>
<tr><td><b>Investidor qualificado</b></td><td>
• Todo investidor profissional.<br>
• PF ou PJ com <b>mais de R$ 1 milhão</b> em aplicações financeiras, que atesta por escrito.<br>
• PF aprovada em exames ou certificações aprovadas pela CVM para registro de assessor, administrador de carteira, analista ou consultor, em relação aos recursos próprios.<br>
• Clubes de investimento geridos por cotistas qualificados.</td></tr>
<tr><td><b>Investidor comum (varejo)</b></td><td>Todos os demais.</td></tr>
</table></div>
<ul>
  <li>Quanto mais sofisticado o investidor, menos proteção regulatória e mais produtos disponíveis. Exemplos: classes de fundos restritas a qualificados ou profissionais e ofertas com regras simplificadas.</li>
  <li>O critério é o valor em <b>aplicações financeiras</b>, não o patrimônio total. Imóveis e carros <b>não contam</b>.</li>
</ul>
<div class="callout key"><b>Memorize</b><p>Profissional: <b>R$ 10 milhões</b>. Qualificado: <b>R$ 1 milhão</b>. Nos dois casos é preciso um <b>termo assinado</b> atestando a condição.</p></div>
`
        },
        {
          id: "b2-ciclo", titulo: "Ciclo de vida do investidor", prioridade: "med",
          resumo: "Acumulação, consolidação, usufruto e transferência.",
          html: `
<div class="table-wrap"><table>
<tr><th>Fase</th><th>Momento</th><th>Foco financeiro</th></tr>
<tr><td><b>Acumulação / início de carreira</b></td><td>Jovem, renda crescente, patrimônio pequeno, muitas vezes com dívidas (estudos, imóvel).</td><td>Montar a reserva de emergência, quitar dívidas caras, criar o hábito de poupar. Horizonte longo permite mais risco <b>se o perfil admitir</b>.</td></tr>
<tr><td><b>Consolidação</b></td><td>Meia-idade, renda no auge, filhos, patrimônio crescendo.</td><td>Acumular para a aposentadoria e a educação dos filhos, proteção (seguros), diversificação.</td></tr>
<tr><td><b>Usufruto / gastos</b></td><td>Aposentadoria, renda do trabalho cai ou some.</td><td>Gerar renda, preservar capital, liquidez, menos volatilidade.</td></tr>
<tr><td><b>Transferência / doação</b></td><td>Planejamento sucessório.</td><td>Herança, previdência (fora do inventário), doações, holding, testamento.</td></tr>
</table></div>
<div class="callout tip"><b>Regra prática</b><p>Em geral, quanto mais longo o horizonte e mais estável a renda, maior a <b>capacidade</b> de assumir risco. Perto de usar o dinheiro, a carteira migra para ativos mais estáveis e líquidos.</p></div>
`
        },
        {
          id: "b2-reserva", titulo: "Reserva de emergência, liquidez e endividamento", prioridade: "max",
          resumo: "O que vem antes de investir: reserva, poupança e dívidas.",
          html: `
<h2>Capacidade de poupança</h2>
<div class="formula">Capacidade de poupança = Renda líquida − Despesas</div>
<p>É o ponto de partida. Sem sobra mensal não há plano de investimento, há plano de <b>ajuste do orçamento</b>.</p>

<h2>Reserva de emergência</h2>
<ul>
  <li>Cobre imprevistos (perda de emprego, saúde) sem precisar resgatar investimentos de longo prazo no pior momento.</li>
  <li>Tamanho: em geral de <b>3 a 6 meses de despesas</b> para renda estável (CLT, servidor) e de <b>6 a 12 meses</b> para renda variável (autônomo, empresário).</li>
  <li>Onde aplicar: <b>liquidez diária, baixo risco e baixa volatilidade</b>, como Tesouro Selic, CDB com liquidez diária de banco sólido ou fundo DI de taxa baixa.</li>
  <li>Onde <b>não</b> aplicar: ações, prefixados longos (marcação a mercado), produtos com carência (LCI/LCA no prazo mínimo) ou previdência.</li>
</ul>

<h2>Liquidez</h2>
<p>Liquidez é a facilidade de transformar o ativo em dinheiro <b>sem perder valor</b>. Repare em <b>prazo de carência</b>, <b>prazo de resgate</b> (D+0, D+1, D+30…), <b>mercado secundário</b> e <b>deságio</b>. Um título "líquido" com marcação a mercado negativa não serve para emergência.</p>

<h2>Endividamento</h2>
<ul>
  <li><b>Primeiro, quitar dívidas caras.</b> Rotativo do cartão e cheque especial cobram juros muito acima de qualquer investimento conservador.</li>
  <li>Dívidas baratas e com prazo (financiamento imobiliário, por exemplo) podem conviver com investimentos.</li>
  <li>Observe o <b>comprometimento da renda</b> com parcelas. Comprometimento alto é sinal de alerta.</li>
</ul>
<div class="callout key"><b>A ordem certa</b><p>1. Orçamento e capacidade de poupança → 2. Quitar dívidas caras → 3. Montar a reserva de emergência → 4. Investir para os objetivos de médio e longo prazo, de acordo com o perfil.</p></div>
<div class="callout trap"><b>Pegadinha</b><p>Cliente com R$ 50 mil aplicados a 100% do CDI e R$ 15 mil no rotativo do cartão: a melhor recomendação é <b>quitar o rotativo</b>, não "aplicar em algo que renda mais".</p></div>
`
        }
      ]
    },

    /* ======================= BLOCO 3 ======================= */
    {
      id: 3, cor: "b3", peso: 40, ordem: 3,
      nome: "Indicação de investimentos",
      resumo: "O bloco mais pesado: renda fixa, tributação, fundos, previdência, renda variável, COE, exterior, cripto e derivativos.",
      topicos: [
        {
          id: "b3-fundamentos", titulo: "Fundamentos: juros, inflação, marcação a mercado e riscos", prioridade: "max",
          resumo: "Selic, CDI, IPCA, taxa real, marcação a mercado, duration e tipos de risco.",
          html: `
<h2>Indicadores que você precisa dominar</h2>
<div class="table-wrap"><table>
<tr><th>Indicador</th><th>O que é</th></tr>
<tr><td><b>Selic meta</b></td><td>Taxa básica de juros, definida pelo <b>Copom</b> (Banco Central), que se reúne 8 vezes por ano. É o principal instrumento da política monetária.</td></tr>
<tr><td><b>Selic over</b></td><td>Taxa média das operações compromissadas de um dia lastreadas em títulos públicos. Fica muito próxima da meta.</td></tr>
<tr><td><b>CDI / DI</b></td><td>Taxa média dos empréstimos de um dia entre bancos. Referência dos pós-fixados privados (CDB, LCI/LCA, fundos DI). Anda colada na Selic.</td></tr>
<tr><td><b>IPCA</b></td><td>Inflação <b>oficial</b>, medida pelo IBGE. A referência da meta de inflação definida pelo <b>CMN</b>.</td></tr>
<tr><td><b>IGP-M</b></td><td>Calculado pela FGV, muito usado em aluguéis.</td></tr>
<tr><td><b>TR</b></td><td>Taxa Referencial, usada na poupança e no FGTS.</td></tr>
</table></div>

<h2>Taxa nominal × taxa real</h2>
<div class="formula">(1 + nominal) = (1 + real) × (1 + inflação)  →  real = (1 + nominal) / (1 + inflação) − 1</div>
<p>Exemplo: aplicação de 12% num ano com IPCA de 5% → (1,12 / 1,05) − 1 = <b>6,67% de ganho real</b>. Subtrair direto (12 − 5 = 7%) é só uma aproximação, e a prova costuma cobrar a fórmula exata.</p>

<h2>Prefixado, pós-fixado e híbrido</h2>
<ul>
  <li><b>Prefixado</b>: a taxa é conhecida na compra (ex.: 12% a.a.). Ganha se os juros caírem e perde (na marcação) se subirem.</li>
  <li><b>Pós-fixado</b>: acompanha um indexador (ex.: 100% do CDI). Quase não oscila. É ideal para a reserva.</li>
  <li><b>Híbrido</b>: inflação mais uma taxa fixa (ex.: IPCA + 6%). Protege o poder de compra, mas a parte fixa sofre marcação a mercado.</li>
</ul>

<h2>Marcação a mercado e duration</h2>
<div class="callout key"><b>Regra de ouro</b><p><b>Juros sobem → preço dos títulos prefixados (e da parte fixa dos híbridos) cai.</b><br><b>Juros caem → preço sobe.</b><br>Quanto <b>maior a duration</b> (prazo médio ponderado dos fluxos), <b>maior a sensibilidade</b> do preço à variação dos juros.</p></div>
<ul>
  <li><b>Marcação a mercado</b> é atualizar diariamente o preço do título pelo valor de mercado. Quem leva o título até o vencimento recebe a taxa contratada. Quem vende antes pode ganhar ou perder.</li>
  <li>Um título <b>com cupom</b> (juros semestrais) tem duration <b>menor</b> que um título sem cupom de mesmo vencimento. Num zero-cupom, a duration é igual ao prazo.</li>
</ul>

<h2>Principais riscos</h2>
<div class="table-wrap"><table>
<tr><th>Risco</th><th>Definição</th></tr>
<tr><td><b>Mercado</b></td><td>Oscilação de preços: juros, câmbio, ações, commodities.</td></tr>
<tr><td><b>Crédito</b></td><td>O emissor não pagar (default). Avaliado por <b>rating</b> de agências.</td></tr>
<tr><td><b>Liquidez</b></td><td>Não conseguir vender rápido ou ter de vender com deságio.</td></tr>
<tr><td><b>Operacional</b></td><td>Falhas de sistemas, pessoas ou processos.</td></tr>
<tr><td><b>Sistêmico</b></td><td>Uma quebra que contamina o sistema financeiro inteiro.</td></tr>
<tr><td><b>Legal / regulatório</b></td><td>Mudanças de lei e tributação, contratos mal redigidos.</td></tr>
<tr><td><b>Concentração</b></td><td>Exposição excessiva a um único emissor, setor ou ativo.</td></tr>
</table></div>
`
        },
        {
          id: "b3-bancarios", titulo: "Títulos bancários, poupança e FGC", prioridade: "max",
          resumo: "CDB, LCI, LCA, LC, LF, poupança, compromissadas e as regras do FGC.",
          html: `
<div class="table-wrap"><table>
<tr><th>Título</th><th>Emissor / lastro</th><th>IR para PF</th><th>FGC</th><th>Observações</th></tr>
<tr><td><b>CDB / RDB</b></td><td>Bancos</td><td>Tabela regressiva</td><td>✅</td><td>Pré, pós (CDI) ou híbrido. Pode ter liquidez diária.</td></tr>
<tr><td><b>LCI</b></td><td>Bancos, lastro imobiliário</td><td><b>Isento</b></td><td>✅</td><td>Prazo mínimo de <b>6 meses</b>, ou <b>12 meses</b> se indexada a índice de preços (Res. CMN 5.215/2025).</td></tr>
<tr><td><b>LCA</b></td><td>Bancos, lastro no agronegócio</td><td><b>Isento</b></td><td>✅</td><td>Mesmos prazos mínimos da LCI.</td></tr>
<tr><td><b>LC</b></td><td>Financeiras</td><td>Regressiva</td><td>✅</td><td>Paga mais por ter risco maior.</td></tr>
<tr><td><b>LF (Letra Financeira)</b></td><td>Bancos</td><td>Regressiva</td><td>❌</td><td>Prazo mínimo de 24 meses, valor mínimo alto, não pode ser resgatada antes.</td></tr>
<tr><td><b>Poupança</b></td><td>Bancos</td><td><b>Isenta</b></td><td>✅</td><td>Rende na data de aniversário.</td></tr>
<tr><td><b>Compromissada</b></td><td>Bancos, lastro em títulos</td><td>Regressiva</td><td>Só se lastreada em título de empresa ligada</td><td>Recompra com prazo definido.</td></tr>
</table></div>

<h2>Poupança</h2>
<div class="formula">Selic > 8,5% a.a. → 0,5% a.m. + TR<br>Selic ≤ 8,5% a.a. → 70% da Selic + TR</div>

<h2>FGC (Fundo Garantidor de Créditos)</h2>
<ul>
  <li>Garante até <b>R$ 250 mil por CPF/CNPJ, por instituição ou conglomerado financeiro</b>, incluindo principal e rendimentos.</li>
  <li>Teto global de <b>R$ 1 milhão</b> a cada período de <b>4 anos</b> para as garantias pagas.</li>
  <li>Em conta conjunta, o limite é <b>dividido</b> entre os titulares.</li>
  <li><b>Cobre</b>: depósitos à vista, poupança, CDB, RDB, LC, LH, LCI, LCA, LIG, letra de câmbio e compromissadas lastreadas em títulos de empresa ligada.</li>
  <li><b>Não cobre</b>: LF, debêntures, CRI, CRA, COE, fundos, previdência, títulos públicos, ações.</li>
</ul>
<div class="callout trap"><b>Pegadinha</b><p>R$ 400 mil no Banco A e R$ 400 mil no Banco B, de conglomerados diferentes, garantem <b>R$ 250 mil + R$ 250 mil = R$ 500 mil</b>. Se A e B forem do <b>mesmo conglomerado</b>, a garantia total é de apenas <b>R$ 250 mil</b>.</p></div>
`
        },
        {
          id: "b3-credito", titulo: "Títulos públicos, debêntures, CRI e CRA", prioridade: "max",
          resumo: "Tesouro Direto e crédito privado.",
          html: `
<h2>Tesouro Direto</h2>
<div class="table-wrap"><table>
<tr><th>Nome comercial</th><th>Sigla</th><th>Rentabilidade</th><th>Cupom</th></tr>
<tr><td>Tesouro Selic</td><td>LFT</td><td>Selic + ágio/deságio</td><td>Não</td></tr>
<tr><td>Tesouro Prefixado</td><td>LTN</td><td>Taxa prefixada</td><td>Não</td></tr>
<tr><td>Tesouro Prefixado com Juros Semestrais</td><td>NTN-F</td><td>Taxa prefixada</td><td>Sim, semestral</td></tr>
<tr><td>Tesouro IPCA+</td><td>NTN-B Principal</td><td>IPCA + taxa</td><td>Não</td></tr>
<tr><td>Tesouro IPCA+ com Juros Semestrais</td><td>NTN-B</td><td>IPCA + taxa</td><td>Sim, semestral</td></tr>
<tr><td>Tesouro RendA+ / Educa+</td><td>NTN-B1</td><td>IPCA + taxa, pago em parcelas mensais</td><td>Renda programada</td></tr>
</table></div>
<ul>
  <li>Risco de crédito <b>soberano</b>, o menor da economia. <b>Não</b> tem FGC.</li>
  <li>IR pela tabela regressiva e IOF nos primeiros 30 dias.</li>
  <li>Taxa de custódia da B3 de <b>0,20% a.a.</b>. O Tesouro Selic é isento até R$ 10 mil.</li>
  <li>O Tesouro Selic é o título de <b>menor volatilidade</b> e é o preferido para a reserva de emergência.</li>
</ul>

<h2>Debêntures</h2>
<ul>
  <li>Títulos de dívida de <b>sociedades anônimas</b> (não financeiras). O investidor empresta dinheiro para a empresa.</li>
  <li>A <b>escritura de emissão</b> traz as regras. O <b>agente fiduciário</b> representa os debenturistas.</li>
  <li><b>Tipos</b>: simples (não conversíveis), <b>conversíveis</b> (em ações da própria emissora) e <b>permutáveis</b> (em ações de outra empresa).</li>
  <li><b>Garantias</b>, da mais forte para a mais fraca: real → flutuante → quirografária (sem garantia) → subordinada.</li>
  <li><b>Incentivadas (Lei 12.431)</b>: financiam infraestrutura e são <b>isentas de IR para PF</b>.</li>
  <li><b>Não têm FGC</b>. O risco de crédito é da empresa emissora.</li>
</ul>

<h2>CRI e CRA</h2>
<ul>
  <li>Emitidos por <b>securitizadoras</b>, com lastro em recebíveis imobiliários (CRI) ou do agronegócio (CRA).</li>
  <li><b>Isentos de IR para PF</b>, <b>sem FGC</b>. O risco depende do lastro e do devedor.</li>
</ul>
<div class="callout key"><b>Isentos de IR para pessoa física</b><p>Poupança, LCI, LCA, CRI, CRA, debêntures incentivadas, LIG, dividendos (até o limite da nova regra) e rendimentos de FII que cumprem os requisitos.</p></div>
`
        },
        {
          id: "b3-tributacao", titulo: "Tributação dos investimentos", prioridade: "max",
          resumo: "Tabela regressiva, IOF, come-cotas, ações, FII, ETF: a tabela que mais cai.",
          html: `
<h2>Tabela regressiva da renda fixa e dos fundos de longo prazo</h2>
<div class="table-wrap"><table>
<tr><th>Prazo da aplicação</th><th>Alíquota de IR</th></tr>
<tr><td>Até 180 dias</td><td><b>22,5%</b></td></tr>
<tr><td>De 181 a 360 dias</td><td><b>20%</b></td></tr>
<tr><td>De 361 a 720 dias</td><td><b>17,5%</b></td></tr>
<tr><td>Acima de 720 dias</td><td><b>15%</b></td></tr>
</table></div>
<p>O IR incide <b>só sobre o rendimento</b>, é <b>retido na fonte</b> e é <b>exclusivo de fonte</b> (não volta na declaração).</p>

<h2>IOF</h2>
<p>Regressivo nos <b>primeiros 30 dias</b>: começa em 96% do rendimento no 1º dia e chega a <b>zero no 30º dia</b>. É cobrado <b>antes</b> do IR. Fundos de ações não pagam IOF no resgate.</p>

<h2>Fundos de investimento</h2>
<div class="table-wrap"><table>
<tr><th>Tipo</th><th>No resgate</th><th>Come-cotas</th></tr>
<tr><td>Longo prazo (carteira com prazo médio > 365 dias)</td><td>22,5% → 15% (regressiva)</td><td><b>15%</b> em maio e novembro</td></tr>
<tr><td>Curto prazo (prazo médio ≤ 365 dias)</td><td>22,5% (até 180 dias) / 20% (acima)</td><td><b>20%</b> em maio e novembro</td></tr>
<tr><td>Fundos de ações (classe Ações)</td><td><b>15%</b>, independentemente do prazo</td><td><b>Não tem</b></td></tr>
</table></div>
<ul>
  <li><b>Come-cotas</b>: antecipação semestral do IR no <b>último dia útil de maio e de novembro</b>, cobrada pela redução da <b>quantidade de cotas</b>. No resgate, cobra-se só a diferença até a alíquota final.</li>
  <li>Pela <b>Lei 14.754/2023</b>, os fundos fechados passaram, em regra, a ter come-cotas também (com exceções como FII, Fiagro, FIP e ETF).</li>
</ul>

<h2>Renda variável</h2>
<div class="table-wrap"><table>
<tr><th>Operação</th><th>Alíquota</th><th>IRRF ("dedo-duro")</th><th>Isenção</th></tr>
<tr><td>Ações, operação comum (swing trade)</td><td><b>15%</b></td><td>0,005% sobre a venda</td><td>Vendas de até <b>R$ 20 mil/mês</b> em ações no mercado à vista</td></tr>
<tr><td>Day trade</td><td><b>20%</b></td><td>1% sobre o lucro</td><td>Nenhuma</td></tr>
<tr><td>FII, ganho na venda de cotas</td><td><b>20%</b></td><td>0,005%</td><td>Nenhuma (os <b>rendimentos</b> mensais podem ser isentos)</td></tr>
<tr><td>ETF de ações</td><td><b>15%</b> (20% em day trade)</td><td>0,005%</td><td><b>Não</b> tem a isenção de R$ 20 mil</td></tr>
<tr><td>ETF de renda fixa</td><td>25% / 20% / 15% conforme o prazo médio da carteira</td><td>Na fonte</td><td>—</td></tr>
</table></div>
<ul>
  <li>Em RV, a própria pessoa apura o imposto e paga por <b>DARF</b> até o último dia útil do mês seguinte.</li>
  <li>Prejuízos podem ser <b>compensados</b> com lucros futuros, sem prazo, desde que na mesma modalidade (comum com comum, day trade com day trade).</li>
  <li><b>Rendimentos de FII</b> são isentos para PF quando: as cotas são negociadas em bolsa ou balcão organizado, o fundo tem <b>no mínimo 100 cotistas</b> e o cotista tem menos de 10% das cotas (Lei 14.754/2023).</li>
</ul>

<h2>Dividendos e JCP</h2>
<ul>
  <li><b>Dividendos</b>: historicamente isentos para PF. A <b>Lei 15.270/2025</b> criou, a partir de 2026, uma retenção de <b>10%</b> quando uma mesma empresa paga mais de <b>R$ 50 mil por mês</b> à mesma pessoa física. Abaixo disso, continuam isentos.</li>
  <li><b>JCP (Juros sobre Capital Próprio)</b>: tributado na fonte (alíquota clássica de <b>15%</b>), dedutível para a empresa e contado no dividendo mínimo obrigatório.</li>
</ul>
<div class="callout trap"><b>Atenção a mudanças legislativas</b><p>A prova segue o conteúdo programático vigente na data do exame. Mudanças recentes (dividendos acima de R$ 50 mil por mês, JCP, LCI/LCA) podem ou não ter entrado na versão do banco de questões. Na dúvida, siga a regra clássica e confira o edital da ANBIMA.</p></div>
`
        },
        {
          id: "b3-fundos", titulo: "Fundos de investimento (CVM 175), FII e ETF", prioridade: "max",
          resumo: "Estrutura, classes, taxas, cotização e fundos listados.",
          html: `
<h2>O novo marco: Resolução CVM 175</h2>
<ul>
  <li>O fundo pode ter <b>classes</b> de cotas, cada uma com patrimônio segregado, e <b>subclasses</b> com condições diferentes de taxas, público e prazos.</li>
  <li><b>Prestadores de serviços essenciais</b>: o <b>administrador fiduciário</b> (que responde pelo fundo perante a CVM, faz o controle e a cotização) e o <b>gestor</b> (que decide os investimentos).</li>
  <li>O regulamento pode prever <b>responsabilidade limitada</b> do cotista ao valor que ele subscreveu.</li>
  <li>Taxas: <b>administração</b>, <b>gestão</b> e <b>distribuição</b>, que podem ser apresentadas somadas, além da <b>performance</b>, de ingresso e de saída.</li>
</ul>

<h2>Classes de fundos financeiros</h2>
<div class="table-wrap"><table>
<tr><th>Classe</th><th>Regra</th><th>Tributação</th></tr>
<tr><td><b>Renda Fixa</b></td><td>Mínimo de 80% em ativos ligados a juros e/ou índice de preços.</td><td>Come-cotas; LP ou CP conforme a carteira.</td></tr>
<tr><td><b>Ações</b></td><td>Mínimo de <b>67%</b> em ações e ativos equivalentes.</td><td>15% no resgate, sem come-cotas.</td></tr>
<tr><td><b>Cambial</b></td><td>Mínimo de <b>80%</b> em ativos ligados a moeda estrangeira.</td><td>Come-cotas.</td></tr>
<tr><td><b>Multimercado</b></td><td>Vários fatores de risco, sem concentração obrigatória.</td><td>Come-cotas.</td></tr>
</table></div>
<p><b>FIC</b> (Fundo de Investimento em Cotas) aplica em cotas de outros fundos. A ANBIMA também classifica por <b>tipo de gestão</b> (passiva/indexada ou ativa) e por <b>estratégia</b>.</p>

<h2>Taxa de performance</h2>
<ul>
  <li>Cobrada sobre o retorno que <b>exceder o benchmark</b>, que precisa ser compatível com a política do fundo (um fundo de ações não pode usar o CDI).</li>
  <li><b>Linha-d'água (high water mark)</b>: só se cobra quando a cota superar o valor da última cobrança. Assim, o gestor não ganha duas vezes sobre o mesmo resultado.</li>
  <li>Periodicidade mínima <b>semestral</b>.</li>
</ul>

<h2>Cotização</h2>
<ul>
  <li><b>Cota de abertura</b>: o valor é conhecido no momento da aplicação, calculado com base no dia anterior (comum em fundos DI e RF simples).</li>
  <li><b>Cota de fechamento</b>: calculada no fim do dia, após o fechamento do mercado. É usada em fundos que oscilam (ações, multimercados).</li>
  <li><b>D+X de conversão</b>: quando o pedido vira cota. <b>D+X de liquidação</b>: quando o dinheiro cai na conta.</li>
  <li><b>Fundo aberto</b> permite resgate a qualquer momento. <b>Fundo fechado</b> só permite resgate no fim do prazo, mas as cotas podem ser vendidas em bolsa.</li>
</ul>

<h2>FII (Fundos de Investimento Imobiliário)</h2>
<ul>
  <li>Investem em imóveis (tijolo) ou em papéis imobiliários como CRI (papel). São fechados e negociados na bolsa.</li>
  <li>Distribuem pelo menos <b>95% do lucro</b> apurado pelo regime de caixa, semestralmente (na prática, a maioria paga todo mês).</li>
  <li>Rendimentos isentos para PF se cumpridos os requisitos. Ganho de capital tributado em <b>20%</b>.</li>
</ul>

<h2>ETF (fundos de índice)</h2>
<ul>
  <li>Replicam um índice (Ibovespa, S&amp;P 500, IMA-B). Gestão passiva, taxa baixa, negociados na bolsa.</li>
  <li>ETF de ações: 15% sobre o ganho, <b>sem</b> a isenção de R$ 20 mil.</li>
</ul>
`
        },
        {
          id: "b3-previdencia", titulo: "Previdência: PGBL × VGBL, progressiva × regressiva", prioridade: "max",
          resumo: "A árvore de decisão mais famosa da prova.",
          html: `
<h2>PGBL × VGBL</h2>
<div class="table-wrap"><table>
<tr><th></th><th>PGBL</th><th>VGBL</th></tr>
<tr><td><b>Para quem</b></td><td>Quem faz a <b>declaração completa</b> do IR e contribui para o INSS ou regime próprio.</td><td>Quem faz a declaração <b>simplificada</b>, é isento ou já usou os 12% do PGBL.</td></tr>
<tr><td><b>Benefício fiscal</b></td><td>Deduz as contribuições até <b>12% da renda bruta tributável</b>.</td><td>Nenhum na contribuição.</td></tr>
<tr><td><b>IR no resgate</b></td><td>Sobre o <b>valor total</b> (principal + rendimentos).</td><td>Só sobre os <b>rendimentos</b>.</td></tr>
<tr><td><b>Natureza</b></td><td>Plano de previdência.</td><td>Seguro de pessoas (com cobertura por sobrevivência).</td></tr>
</table></div>

<h2>Regime de tributação</h2>
<div class="table-wrap"><table>
<tr><th>Prazo de cada aporte</th><th>Regressiva</th></tr>
<tr><td>Até 2 anos</td><td>35%</td></tr>
<tr><td>2 a 4 anos</td><td>30%</td></tr>
<tr><td>4 a 6 anos</td><td>25%</td></tr>
<tr><td>6 a 8 anos</td><td>20%</td></tr>
<tr><td>8 a 10 anos</td><td>15%</td></tr>
<tr><td>Acima de 10 anos</td><td><b>10%</b></td></tr>
</table></div>
<ul>
  <li><b>Regressiva</b>: alíquota <b>definitiva</b> que cai com o tempo de cada aporte (sistema PEPS: os primeiros que entram são os primeiros que saem). Boa para <b>horizontes longos</b>.</li>
  <li><b>Progressiva</b>: segue a tabela do IR (0% a 27,5%). No resgate há retenção de <b>15%</b> na fonte e ajuste na declaração anual. Boa para quem vai <b>resgatar em pouco tempo</b>, quem terá renda baixa na aposentadoria (pode cair na faixa isenta) ou quem não sabe o prazo.</li>
  <li>Pela <b>Lei 14.803/2024</b>, o participante pode escolher o regime <b>até o primeiro resgate ou o recebimento do benefício</b>.</li>
</ul>

<h2>Outros pontos que caem</h2>
<ul>
  <li><b>Sem come-cotas</b>: o IR só é cobrado no resgate ou no recebimento da renda.</li>
  <li>Regulação da <b>SUSEP</b> (previdência aberta). Fundos de pensão fechados ficam com a <b>PREVIC</b>.</li>
  <li><b>Fases</b>: <b>diferimento</b> (acumulação) e <b>concessão</b> (recebimento da renda).</li>
  <li><b>Tipos de renda</b>: vitalícia, temporária, vitalícia com prazo mínimo garantido, vitalícia reversível ao beneficiário indicado, pagamento único.</li>
  <li><b>Taxa de carregamento</b>: cobrada sobre as contribuições (na entrada) ou no resgate. <b>Taxa de administração</b>: sobre o patrimônio.</li>
  <li><b>Sucessão</b>: o dinheiro vai direto aos beneficiários indicados, <b>fora do inventário</b>, o que o torna ágil. Em 2024 o STF (Tema 1.214) afastou o ITCMD sobre PGBL e VGBL na morte do titular. Acompanhe possíveis mudanças legislativas.</li>
  <li><b>Portabilidade</b>: entre planos da mesma família (PGBL → PGBL, VGBL → VGBL), sem IR. Da progressiva pode ir para a regressiva (o prazo começa do zero), mas <b>não</b> o contrário.</li>
</ul>
<div class="callout trap"><b>Pegadinha clássica</b><p>Cliente que faz a declaração completa, mas <b>já aporta 12%</b> da renda no PGBL e quer investir mais: o excedente vai para o <b>VGBL</b>. Colocar mais no PGBL não dá dedução extra e ainda faz o IR do resgate incidir sobre o total.</p></div>
`
        },
        {
          id: "b3-rv", titulo: "Renda variável, dividendos e JCP", prioridade: "med",
          resumo: "Ações ON e PN, proventos, eventos societários, governança e aluguel.",
          html: `
<h2>Tipos de ações</h2>
<ul>
  <li><b>ON (ordinárias)</b>: dão direito a voto.</li>
  <li><b>PN (preferenciais)</b>: em geral sem voto, mas com preferência no recebimento de dividendos e no reembolso de capital.</li>
  <li><b>Units</b>: pacotes de ações (ON + PN).</li>
</ul>

<h2>Proventos</h2>
<ul>
  <li><b>Dividendos</b>: parcela do lucro distribuída aos acionistas. O <b>dividendo mínimo obrigatório</b> é de <b>25% do lucro líquido ajustado</b> quando o estatuto é omisso.</li>
  <li><b>JCP</b>: remuneração do capital, <b>dedutível</b> do lucro tributável da empresa. Tem IR na fonte para o acionista e conta no mínimo obrigatório.</li>
  <li><b>Data com</b>: último dia para comprar e ter direito ao provento. <b>Data ex</b>: a partir dela, a ação é negociada sem o direito.</li>
  <li><b>Dividend yield</b> = dividendos por ação / preço da ação.</li>
</ul>

<h2>Eventos societários</h2>
<div class="table-wrap"><table>
<tr><th>Evento</th><th>Efeito</th></tr>
<tr><td><b>Desdobramento (split)</b></td><td>Aumenta o número de ações e reduz o preço proporcionalmente. O patrimônio do acionista não muda.</td></tr>
<tr><td><b>Grupamento (inplit)</b></td><td>O contrário: menos ações, preço maior.</td></tr>
<tr><td><b>Bonificação</b></td><td>Novas ações distribuídas gratuitamente por incorporação de reservas.</td></tr>
<tr><td><b>Subscrição</b></td><td>Aumento de capital com novas ações. Os atuais acionistas têm <b>direito de preferência</b>, que pode ser vendido.</td></tr>
</table></div>

<h2>Governança e proteção ao minoritário</h2>
<ul>
  <li><b>Tag along</b>: na venda do controle, o minoritário pode vender pelo menos <b>80%</b> do valor pago ao controlador (Lei das S.A., ações ON). No <b>Novo Mercado</b>, o tag along é de <b>100%</b>.</li>
  <li><b>Segmentos de listagem da B3</b>: Novo Mercado (só ações ON, o mais exigente), Nível 2, Nível 1, Bovespa Mais.</li>
  <li><b>Free float</b>: ações em circulação no mercado.</li>
</ul>

<h2>Análises e indicadores</h2>
<ul>
  <li><b>Fundamentalista</b>: valor intrínseco a partir de balanços, setor e economia (P/L, P/VP, ROE, EV/EBITDA, fluxo de caixa descontado).</li>
  <li><b>Técnica (grafista)</b>: padrões de preço e volume, suportes e resistências, tendências.</li>
</ul>

<h2>Aluguel de ações (BTC)</h2>
<p>O <b>doador</b> empresta as ações e recebe uma taxa (tributada como renda fixa, pela tabela regressiva). O <b>tomador</b> geralmente vende a descoberto, apostando na queda, ou usa as ações para estratégias. As operações são registradas na B3, que garante a devolução.</p>
`
        },
        {
          id: "b3-coe", titulo: "COE (Certificado de Operações Estruturadas)", prioridade: "med",
          resumo: "Estrutura, capital protegido e riscos.",
          html: `
<ul>
  <li>Emitido por <b>bancos</b>. Combina renda fixa e derivativos num único produto, com cenários de retorno definidos previamente.</li>
  <li><b>Valor nominal protegido</b> (capital protegido): no vencimento, o investidor recebe pelo menos o valor investido. <b>Valor nominal em risco</b>: pode haver perda de parte ou de todo o capital.</li>
  <li><b>Não tem FGC</b>. Tem <b>risco de crédito do emissor</b>: a "proteção" só vale se o banco não quebrar.</li>
  <li>A proteção vale <b>no vencimento</b>. A liquidez antes disso é baixa, e o resgate antecipado pode sair com perda.</li>
  <li>IR pela <b>tabela regressiva</b> da renda fixa (independentemente do ativo-objeto).</li>
  <li>A oferta exige o <b>DIE (Documento de Informações Essenciais)</b>, com cenários de ganho e perda.</li>
</ul>
<div class="callout key"><b>Na prova</b><p>"Capital protegido" não significa "sem risco". O cliente corre o risco de crédito do banco emissor, o risco de liquidez e o custo de oportunidade (pode receber só o principal, sem correção nenhuma).</p></div>
`
        },
        {
          id: "b3-exterior", titulo: "Exterior, cripto e derivativos: o básico", prioridade: "bas",
          resumo: "O mínimo necessário para não perder questões fáceis.",
          html: `
<h2>Investimentos no exterior</h2>
<ul>
  <li>Formas de acesso: <b>BDRs</b> (recibos de ações estrangeiras negociados na B3), <b>ETFs</b> internacionais na B3, <b>fundos</b> com parcela no exterior e conta direta em corretora estrangeira.</li>
  <li><b>Lei 14.754/2023</b>: rendimentos de aplicações financeiras de PF <b>no exterior</b> são tributados em <b>15%</b>, apurados <b>anualmente</b> na declaração.</li>
  <li>BDRs são tributados como renda variável no Brasil (15%, <b>sem</b> a isenção de R$ 20 mil).</li>
  <li>Riscos adicionais: <b>cambial</b>, jurisdição e regras sucessórias de outros países.</li>
</ul>

<h2>Criptoativos</h2>
<ul>
  <li><b>Lei 14.478/2022</b>: o marco legal. O <b>Banco Central</b> regula as prestadoras de serviços de ativos virtuais.</li>
  <li>Alta volatilidade, risco de custódia (perda de chaves, falência de corretora), risco regulatório.</li>
  <li>Ganhos em alienações de até <b>R$ 35 mil por mês</b> são isentos. Acima disso, há ganho de capital pela tabela progressiva.</li>
  <li><b>ETFs de cripto</b> na B3 são tributados como renda variável (15%).</li>
  <li>Termos: blockchain, DeFi (finanças descentralizadas), stablecoins, tokenização.</li>
</ul>

<h2>Derivativos</h2>
<div class="table-wrap"><table>
<tr><th>Instrumento</th><th>Característica principal</th></tr>
<tr><td><b>Termo</b></td><td>Compra ou venda para liquidação futura, a preço fixado. Liquidado no vencimento.</td></tr>
<tr><td><b>Futuro</b></td><td>Contrato padronizado em bolsa, com <b>ajuste diário</b> e exigência de <b>margem de garantia</b>.</td></tr>
<tr><td><b>Opções</b></td><td><b>Call</b>: direito de comprar. <b>Put</b>: direito de vender. O <b>titular</b> paga o <b>prêmio</b> e tem o direito. O <b>lançador</b> recebe o prêmio e tem a obrigação. <b>Americana</b>: exercício a qualquer momento. <b>Europeia</b>: só no vencimento.</td></tr>
<tr><td><b>Swap</b></td><td>Troca de indexadores (ex.: CDI × pré). Mercado de balcão.</td></tr>
</table></div>
<p><b>Usos</b>: <b>hedge</b> (proteção), <b>especulação</b> (busca de ganho assumindo risco), <b>arbitragem</b> (aproveitar distorções de preço) e <b>alavancagem</b>.</p>
`
        }
      ]
    },

    /* ======================= BLOCO 4 ======================= */
    {
      id: 4, cor: "b4", peso: 20, ordem: 4,
      nome: "Análise de portfólio e monitoramento",
      resumo: "Risco x retorno, Sharpe, Treynor, beta, rebalanceamento, portabilidade e eventos de vida.",
      topicos: [
        {
          id: "b4-risco", titulo: "Risco × retorno: Sharpe, Treynor e beta", prioridade: "max",
          resumo: "As fórmulas e, principalmente, como interpretá-las.",
          html: `
<h2>Medidas de risco</h2>
<ul>
  <li><b>Variância e desvio padrão (volatilidade)</b>: medem a dispersão dos retornos em torno da média. Quanto maior, mais risco.</li>
  <li><b>Beta (β)</b>: sensibilidade do ativo em relação ao mercado. β = 1 acompanha o mercado. β &gt; 1 é mais agressivo (amplifica os movimentos). β &lt; 1 é defensivo. β negativo anda no sentido contrário.</li>
  <li><b>VaR (Value at Risk)</b>: perda máxima esperada num período, com um nível de confiança (ex.: 95% de confiança de não perder mais que R$ X em 1 dia).</li>
  <li><b>Tracking error</b>: desvio de um fundo em relação ao benchmark. Num fundo indexado, deve ser baixo.</li>
</ul>

<h2>Índices de desempenho ajustado ao risco</h2>
<div class="formula">Sharpe = (Rp − Rf) / σp</div>
<p>Retorno <b>em excesso</b> à taxa livre de risco por unidade de <b>risco total</b> (desvio padrão). Quanto <b>maior</b>, melhor. Serve para comparar carteiras e fundos, principalmente quando a carteira é o <b>único investimento</b> do cliente (risco total relevante).</p>
<div class="formula">Treynor = (Rp − Rf) / βp</div>
<p>Retorno em excesso por unidade de <b>risco sistemático</b> (beta). Usado para carteiras <b>bem diversificadas</b>, em que o risco não sistemático já foi eliminado.</p>
<div class="formula">CAPM: E(R) = Rf + β × (Rm − Rf)</div>
<p>O retorno exigido de um ativo é a taxa livre de risco mais o beta vezes o prêmio de risco de mercado. <b>Alfa de Jensen</b> = retorno obtido − retorno esperado pelo CAPM. Alfa positivo indica que o gestor agregou valor.</p>

<div class="callout tip"><b>Exemplo</b><p>Fundo A: retorno de 14%, volatilidade de 8%. Fundo B: retorno de 16%, volatilidade de 12%. CDI de 10%.<br>Sharpe A = (14 − 10) / 8 = <b>0,50</b> · Sharpe B = (16 − 10) / 12 = <b>0,50</b>.<br>Empate: B rendeu mais, mas assumiu proporcionalmente mais risco.</p></div>
<div class="callout trap"><b>Pegadinha</b><p>Um Sharpe <b>negativo</b> significa que o fundo rendeu menos que a taxa livre de risco. Nesse caso, a comparação entre Sharpes negativos perde sentido prático.</p></div>
`
        },
        {
          id: "b4-rebal", titulo: "Diversificação e rebalanceamento", prioridade: "max",
          resumo: "Correlação, risco sistemático e como voltar à alocação-alvo.",
          html: `
<h2>Diversificação</h2>
<ul>
  <li>Combinar ativos com <b>baixa correlação</b> reduz o risco da carteira sem reduzir, na mesma proporção, o retorno esperado (Markowitz).</li>
  <li><b>Correlação</b> vai de −1 a +1. Com +1 não há benefício de diversificação. Com −1 o benefício é máximo. Com 0 não há relação.</li>
  <li><b>Risco não sistemático (diversificável, específico)</b>: ligado a uma empresa ou setor. É <b>eliminado</b> com diversificação.</li>
  <li><b>Risco sistemático (de mercado, não diversificável)</b>: afeta todos os ativos (juros, recessão, política). Medido pelo <b>beta</b>.</li>
  <li><b>Fronteira eficiente</b>: carteiras com o maior retorno possível para cada nível de risco.</li>
</ul>

<h2>Rebalanceamento</h2>
<p>Com o tempo, os ativos que sobem ganham peso e a carteira <b>se afasta da alocação-alvo</b> (e do perfil do cliente). Rebalancear é voltar aos percentuais definidos.</p>
<ul>
  <li><b>Por calendário</b>: revisões periódicas (trimestral, semestral, anual).</li>
  <li><b>Por bandas de tolerância</b>: rebalanceia quando uma classe sai de uma faixa (ex.: alvo de 30% em ações com banda de ±5 p.p.).</li>
  <li>Na prática, rebalancear é <b>vender o que subiu demais e comprar o que ficou para trás</b>. É uma disciplina anti-viés que contraria o efeito manada.</li>
  <li>Considere os <b>custos</b>: IR, IOF, corretagem, prazos de resgate. Uma alternativa eficiente é <b>direcionar novos aportes</b> para as classes abaixo do alvo.</li>
</ul>
<div class="callout tip"><b>Exemplo de rebalanceamento</b><p>Carteira de R$ 100 mil: alvo de 70% em RF e 30% em RV. As ações sobem e a carteira vai para R$ 120 mil, com R$ 72 mil em RF e R$ 48 mil em RV (40%). O alvo para R$ 120 mil é RV = R$ 36 mil. É preciso <b>vender R$ 12 mil de RV</b> e aplicar em RF.</p></div>

<h2>Monitoramento</h2>
<ul>
  <li>Compare o desempenho com o <b>benchmark</b> certo (CDI para RF pós, IMA-B para inflação, Ibovespa para ações).</li>
  <li>Reveja o perfil, os objetivos e os prazos. A carteira ideal muda com a vida do cliente.</li>
</ul>
`
        },
        {
          id: "b4-portabilidade", titulo: "Portabilidade", prioridade: "med",
          resumo: "Previdência, custódia e Tesouro: mudar sem vender.",
          html: `
<h2>Portabilidade de previdência</h2>
<ul>
  <li>Transferir a reserva de um plano para outro (de outra seguradora, por exemplo) <b>sem incidência de IR</b>, porque o dinheiro não passa pela mão do cliente.</li>
  <li>Só entre planos da <b>mesma modalidade</b>: PGBL → PGBL e VGBL → VGBL.</li>
  <li>Tabela <b>progressiva → regressiva</b>: permitida, com contagem de prazo reiniciada. <b>Regressiva → progressiva</b>: não permitida.</li>
  <li>De regressiva para regressiva, o prazo acumulado de cada aporte é <b>mantido</b>.</li>
  <li>Motivos comuns: taxas altas, gestão ruim, consolidação de planos.</li>
</ul>

<h2>Transferência de custódia</h2>
<ul>
  <li>Ações, FIIs, ETFs, BDRs e títulos privados podem ser transferidos de uma corretora para outra <b>sem vender</b> (sem gerar evento tributável), mantendo o custo de aquisição.</li>
  <li>Títulos do <b>Tesouro Direto</b> também podem ser transferidos entre instituições.</li>
  <li>Cotas de fundos abertos, em regra, <b>não</b> são transferíveis entre distribuidores sem resgate, salvo por mecanismos específicos (como a transferência de cotas por conta e ordem quando prevista).</li>
</ul>
<div class="callout key"><b>Por que cai na prova</b><p>A portabilidade evita resgatar e reaplicar, o que geraria IR e IOF, perderia o prazo acumulado e, no caso de títulos, sujeitaria o cliente à marcação a mercado.</p></div>
`
        },
        {
          id: "b4-eventos", titulo: "Eventos de vida", prioridade: "med",
          resumo: "Casamento, divórcio, filhos, herança e aposentadoria: quando e como revisar a carteira.",
          html: `
<p>Todo evento relevante obriga a <b>revisar perfil, objetivos, liquidez e alocação</b>. Na prova, o cliente quase sempre está passando por um deles.</p>
<div class="table-wrap"><table>
<tr><th>Evento</th><th>O que considerar</th></tr>
<tr><td><b>Casamento / união estável</b></td><td>Regime de bens. O padrão (legal) é a <b>comunhão parcial</b>: o que for adquirido durante o casamento é dos dois. Também existem comunhão universal, separação total e participação final nos aquestos. Revisar objetivos em comum, seguros e beneficiários.</td></tr>
<tr><td><b>Divórcio</b></td><td>Partilha de bens, possível necessidade de liquidez, queda de renda, reavaliação do perfil e de beneficiários (previdência e seguros).</td></tr>
<tr><td><b>Filhos</b></td><td>Aumento de despesas, reserva de emergência maior, planejamento da educação (horizonte longo: IPCA+, previdência), seguro de vida.</td></tr>
<tr><td><b>Herança / bônus / venda de empresa</b></td><td>Recurso extraordinário: cuidado com decisões impulsivas e com a contabilidade mental ("dinheiro fácil"). Refazer o perfil e o planejamento, diversificar, considerar tributação e sucessão.</td></tr>
<tr><td><b>Perda de emprego</b></td><td>Usar a reserva de emergência, reduzir risco, preservar liquidez.</td></tr>
<tr><td><b>Aposentadoria</b></td><td>Migrar da acumulação para a geração de renda, reduzir a volatilidade, planejar a fase de concessão da previdência.</td></tr>
</table></div>

<h2>Sucessão</h2>
<ul>
  <li>Os herdeiros necessários (descendentes, ascendentes e cônjuge) têm direito à <b>legítima</b>, metade do patrimônio. A outra metade pode ser disposta em <b>testamento</b>.</li>
  <li><b>Previdência</b> (PGBL/VGBL) fica fora do inventário, com liquidez rápida para os beneficiários.</li>
  <li>Outros instrumentos: doação em vida (com ou sem reserva de usufruto), holding familiar, seguro de vida.</li>
</ul>
<div class="callout tip"><b>Na prova</b><p>O evento de vida é o gatilho para <b>atualizar o suitability</b> antes de qualquer nova recomendação. A resposta certa raramente é "manter tudo como está".</p></div>
`
        }
      ]
    }
  ]
};
