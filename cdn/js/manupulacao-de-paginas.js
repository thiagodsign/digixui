var rotas = {
  '/:nomeDaPagina': incluirConteudo,
};

Router(rotas).init(['/instalacao.html']);

function incluirConteudo(nomeDaPagina) {
  $.get('/documentacao/' + nomeDaPagina)
      .then(function (conteudo) {
          $('#doc-conteudo-principal').empty().append(conteudo);
      });
}