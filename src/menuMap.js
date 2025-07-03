// menuMap.js

// Este objeto mapeia as intenções identificadas pelo agente (NLU)
// para as rotas de navegação do front-end e mensagens de contexto.

const menuRedirectMap = {
  // --- SEÇÃO PRINCIPAL ---
  'buscar_dentistas': {
    redirectTo: 'Buscar dentistas',
    message: 'Usuário deseja encontrar um dentista na rede.'
  },
  'dentistas_favoritos': {
    redirectTo: 'Dentistas favoritos',
    message: 'Redirecionando para a lista de dentistas favoritos do usuário.'
  },
  'irpf': {
    redirectTo: 'IRPF',
    message: 'Usuário precisa do informe de rendimentos para o IRPF.'
  },
  'minha_cobertura': {
    redirectTo: 'Minha cobertura',
    message: 'Usuário deseja visualizar os detalhes da sua cobertura.'
  },
  'perguntas_frequentes': {
    redirectTo: 'Perguntas frequentes',
    message: 'Redirecionando para a seção de perguntas frequentes.'
  },
  'adicionar_dependente': {
    redirectTo: 'Adicionar dependente',
    message: 'Usuário deseja iniciar o processo para adicionar um novo dependente.'
  },
  'fale_conosco': {
    redirectTo: 'Fale conosco',
    message: 'Redirecionando para os canais de contato e suporte.'
  },
  'meus_tratamentos': {
    redirectTo: 'Meus tratamentos',
    message: 'Usuário deseja visualizar o histórico de tratamentos realizados.'
  },
  'extrato_de_protocolos': {
    redirectTo: 'Extrato de protocolos',
    message: 'Usuário solicitou o extrato de protocolos de atendimento.'
  },
  'beneficios': {
    redirectTo: 'Benefícios',
    message: 'Redirecionando para a seção de benefícios e vantagens do plano.'
  },
  'redes_sociais': {
    redirectTo: 'Redes sociais',
    message: 'Redirecionando para os perfis de redes sociais.'
  },
  'odontoconecta': {
    redirectTo: 'OdontoConecta',
    message: 'Redirecionando para a plataforma OdontoConecta.'
  },
  'dentista_online': {
    redirectTo: 'Dentista online',
    message: 'Usuário deseja acessar o serviço de atendimento com dentista online.'
  },
  'navegacao_guiada': {
    redirectTo: 'Navegação guiada',
    message: 'Iniciando o tour de navegação guiada pelo aplicativo.'
  },

  // --- SEÇÃO FINANCEIRO ---
  'financeiro_historico_pagamento': {
    redirectTo: 'Financeiro/Histórico de pagamento',
    message: 'Redirecionando para o histórico de pagamentos do usuário.'
  },
  'financeiro_atualizar_pagamento': {
    redirectTo: 'Financeiro/Atualizar forma de pagamento',
    message: 'Usuário quer alterar seu método de pagamento.'
  },
  'financeiro_carta_quitacao': {
    redirectTo: 'Financeiro/Carta de quitação',
    message: 'Usuário solicitou a carta de quitação anual de débitos.'
  },
  
  // --- SEÇÃO REEMBOLSO ---
  'reembolso_orientacoes': {
    redirectTo: 'Reembolso/Orientações',
    message: 'Usuário pediu para ver as orientações sobre como solicitar reembolso.'
  },
  'reembolso_solicitar': {
    redirectTo: 'Reembolso/Solicitar Reembolso',
    message: 'Usuário confirmou que deseja iniciar uma nova solicitação de reembolso.'
  },
  'reembolso_enviar_documentos': {
    redirectTo: 'Reembolso/Enviar documentos',
    message: 'Redirecionando para a área de envio de documentos de reembolso.'
  },
  'reembolso_acompanhar': {
    redirectTo: 'Reembolso/Acompanhar solicitação',
    message: 'Usuário deseja verificar o status de um reembolso existente.'
  },
  'reembolso_extrato': {
    redirectTo: 'Reembolso/Extrato de reembolso',
    message: 'Usuário pediu o extrato consolidado de reembolsos.'
  }
};

// Exportamos o mapa para que ele possa ser usado em outros arquivos
export default menuRedirectMap;