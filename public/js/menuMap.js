// menuMap.js

// Este objeto mapeia as intenções identificadas pelo agente (NLU)
// para as rotas de navegação do front-end e mensagens de contexto.

const menuRedirectMap = {
  // --- SEÇÃO PRINCIPAL ---
  buscar_dentistas: {
    url: "/buscar-dentistas.html",
    redirectTo: "Buscar dentistas",
    message: "Usuário deseja encontrar um dentista na rede.",
  },
  dentistas_favoritos: {
    url: "/dentistas-favoritos.html",
    redirectTo: "Dentistas favoritos",
    message: "Redirecionando para a lista de dentistas favoritos do usuário.",
  },
  irpf: {
    url: "/irpf.html",
    redirectTo: "IRPF",
    message: "Usuário precisa do informe de rendimentos para o IRPF.",
  },
  minha_cobertura: {
    url: "/minha-cobertura.html",
    redirectTo: "Minha cobertura",
    message: "Usuário deseja visualizar os detalhes da sua cobertura.",
  },
  perguntas_frequentes: {
    url: "/perguntas-frequentes.html",
    redirectTo: "Perguntas frequentes",
    message: "Redirecionando para a seção de perguntas frequentes.",
  },
  adicionar_dependente: {
    url: "/adicionar-dependente.html",
    redirectTo: "Adicionar dependente",
    message:
      "Usuário deseja iniciar o processo para adicionar um novo dependente.",
  },
  fale_conosco: {
    url: "/fale-conosco.html",
    redirectTo: "Fale conosco",
    message: "Redirecionando para os canais de contato e suporte.",
  },
  meus_tratamentos: {
    url: "/meus-tratamentos.html",
    redirectTo: "Meus tratamentos",
    message: "Usuário deseja visualizar o histórico de tratamentos realizados.",
  },
  extrato_de_protocolos: {
    url: "/extrato-de-protocolos.html",
    redirectTo: "Extrato de protocolos",
    message: "Usuário solicitou o extrato de protocolos de atendimento.",
  },
  beneficios: {
    url: "/beneficios.html",
    redirectTo: "Benefícios",
    message: "Redirecionando para a seção de benefícios e vantagens do plano.",
  },
  redes_sociais: {
    url: "/redes-sociais.html",
    redirectTo: "Redes sociais",
    message: "Redirecionando para os perfis de redes sociais.",
  },
  odontoconecta: {
    url: "/odontoconecta.html",
    redirectTo: "OdontoConecta",
    message: "Redirecionando para a plataforma OdontoConecta.",
  },
  dentista_online: {
    url: "/dentista-online.html",
    redirectTo: "Dentista online",
    message:
      "Usuário deseja acessar o serviço de atendimento com dentista online.",
  },
  navegacao_guiada: {
    url: "/navegacao-guiada.html",
    redirectTo: "Navegação guiada",
    message: "Iniciando o tour de navegação guiada pelo aplicativo.",
  },

  // --- SEÇÃO FINANCEIRO ---
  financeiro_historico_pagamento: {
    url: "/financeiro-historico-pagamento.html",
    redirectTo: "Financeiro/Histórico de pagamento",
    message: "Redirecionando para o histórico de pagamentos do usuário.",
  },
  financeiro_atualizar_pagamento: {
    url: "/financeiro-atualizar-pagamento.html",
    redirectTo: "Financeiro/Atualizar forma de pagamento",
    message: "Usuário quer alterar seu método de pagamento.",
  },
  financeiro_carta_quitacao: {
    url: "/financeiro-carta-quitacao.html",
    redirectTo: "Financeiro/Carta de quitação",
    message: "Usuário solicitou a carta de quitação anual de débitos.",
  },

  // --- SEÇÃO REEMBOLSO ---
  reembolso_orientacoes: {
    url: "/reembolso-orientacoes.html",
    redirectTo: "Reembolso/Orientações",
    message:
      "Usuário pediu para ver as orientações sobre como solicitar reembolso.",
  },
  reembolso_solicitar: {
    url: "/reembolso-solicitar.html",
    redirectTo: "Reembolso/Solicitar Reembolso",
    message:
      "Usuário confirmou que deseja iniciar uma nova solicitação de reembolso.",
  },
  reembolso_enviar_documentos: {
    url: "/reembolso-enviar-documentos.html",
    redirectTo: "Reembolso/Enviar documentos",
    message: "Redirecionando para a área de envio de documentos de reembolso.",
  },
  reembolso_acompanhar: {
    url: "/reembolso-acompanhar.html",
    redirectTo: "Reembolso/Acompanhar solicitação",
    message: "Usuário deseja verificar o status de um reembolso existente.",
  },
  reembolso_extrato: {
    url: "/reembolso-extrato.html",
    redirectTo: "Reembolso/Extrato de reembolso",
    message: "Usuário pediu o extrato consolidado de reembolsos.",
  },
};

// Exportamos o mapa para que ele possa ser usado em outros arquivos
export default menuRedirectMap;
