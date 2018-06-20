var botaoHamburguer = document.querySelector('.botao-hamburguer');
var menuLateralFechado = document.querySelector('.menu-lateral');
var menuLateral = document.querySelector('.menu-lateral');
var listaDeItemsDoMenuLateral = document.querySelector('.menu-lateral__lista');
var sobreposicao = document.querySelector('.sobreposicao');

function verificarSeOMenuLateralEstaMinimizado() {
  if(document.querySelector('.menu-lateral').classList.contains('menu-lateral_minimizado')) {
    return true;
  } else {
    return false;
  }
};

function verificarSeOMenuLateralEstaFechado() {
 if(document.querySelector('.menu-lateral').classList.contains('menu-lateral_fechado')) {
    return true;
  } else {
    return false;
  }
}

function verificarSeExisteABarraNavegacao() {
  if(document.querySelector('.barra-navegacao')) {
    return true;
  } else {
    return false;
  }
};

function verificarSeOViewportEhMenorQueTablet() {
  if(window.innerWidth < 900) {
    return true;
  } else {
    return false;
  }
}

function fecharMenuLateral() {
  menuLateral.classList.add('menu-lateral_fechado');
  menuLateral.classList.remove('menu-lateral_minimizado');
}

function abrirMenuLateral() {
  menuLateral.classList.remove('menu-lateral_fechado');
  menuLateral.classList.remove('menu-lateral_minimizado');
}

function minimizarMenuLateral() {
  menuLateral.classList.add('menu-lateral_minimizado');
}

function mudarOEstadoDoBotaoHamburguerParaFechar() {
  botaoHamburguer.classList.remove('botao-hamburguer_estado-minimizar');
  botaoHamburguer.classList.remove('botao-hamburguer_estado-maximizar');
  botaoHamburguer.classList.add('botao-hamburguer_estado-fechar');
}

function mudarOEstadoDoBotaoHamburguerParaNormal() {
  botaoHamburguer.classList.remove('botao-hamburguer_estado-minimizar');
  botaoHamburguer.classList.remove('botao-hamburguer_estado-maximizar');
  botaoHamburguer.classList.remove('botao-hamburguer_estado-fechar'); 
}

function mudarOEstadoDoBotaoHamburguerParaMaximizar() {
  botaoHamburguer.classList.remove('botao-hamburguer_estado-minimizar');
  botaoHamburguer.classList.remove('botao-hamburguer_estado-fechar');
  botaoHamburguer.classList.add('botao-hamburguer_estado-maximizar');
}

function mudarOEstadoDoBotaoHamburguerParaMinimizar() {
  botaoHamburguer.classList.remove('botao-hamburguer_estado-fechar');
  botaoHamburguer.classList.remove('botao-hamburguer_estado-maximizar');
  botaoHamburguer.classList.add('botao-hamburguer_estado-minimizar');
}

function mostrarSobreposicao() {
  document.querySelector('.sobreposicao').classList.add('sobreposicao_ativo');
}

function esconderSobreposicao() {
  document.querySelector('.sobreposicao').classList.remove('sobreposicao_ativo');
}

function maximizarOConteudo() {
  document.querySelector('.pagina__conteudo-container').classList.remove('pagina__conteudo-container_minimizado');
  document.querySelector('.pagina__conteudo-container').classList.add('pagina__conteudo-container_maximizado');
}

function minimizarOConteudo() {
  document.querySelector('.pagina__conteudo-container').classList.remove('pagina__conteudo-container_maximizado');
  document.querySelector('.pagina__conteudo-container').classList.add('pagina__conteudo-container_minimizado');
}

function expandirTotalmenteOConteudo() {
  document.querySelector('.pagina__conteudo-container').classList.remove('pagina__conteudo-container_maximizado');
  document.querySelector('.pagina__conteudo-container').classList.remove('pagina__conteudo-container_minimizado');
}

function maximizarABarraNavegacao() {
  if(verificarSeExisteABarraNavegacao()) {
    document.querySelector('.barra-navegacao').classList.remove('barra-navegacao_com-menu-expandido');
    document.querySelector('.barra-navegacao').classList.add('barra-navegacao_com-menu-minimizado');
  }
}

function minimizarABarraNavegacao() {
  if(verificarSeExisteABarraNavegacao()) {
    document.querySelector('.barra-navegacao').classList.remove('barra-navegacao_com-menu-minimizado');
    document.querySelector('.barra-navegacao').classList.add('barra-navegacao_com-menu-expandido');
  }
}

function expandirTotalmenteABarraNavegacao() {
  if(verificarSeExisteABarraNavegacao()) {
    document.querySelector('.barra-navegacao').classList.remove('barra-navegacao_com-menu-minimizado');
    document.querySelector('.barra-navegacao').classList.remove('barra-navegacao_com-menu-expandido');
  }
}


function gerenciarOEstadoDoMenuLateral() {


  if(verificarSeOViewportEhMenorQueTablet()) {
    
    fecharMenuLateral();
    expandirTotalmenteABarraNavegacao();
    expandirTotalmenteOConteudo();
    mudarOEstadoDoBotaoHamburguerParaNormal();
    esconderSobreposicao();

    sobreposicao.onclick = function() {
      fecharMenuLateral();
      mudarOEstadoDoBotaoHamburguerParaNormal()
      esconderSobreposicao();
    }

    botaoHamburguer.onclick = function() {
      if(verificarSeOMenuLateralEstaFechado()) {
        abrirMenuLateral();
        mudarOEstadoDoBotaoHamburguerParaFechar()
        mostrarSobreposicao();
      } else {
        fecharMenuLateral();
        mudarOEstadoDoBotaoHamburguerParaNormal()
        esconderSobreposicao();
      }
    }
  
    listaDeItemsDoMenuLateral.onclick = function() {
      fecharMenuLateral();
      mudarOEstadoDoBotaoHamburguerParaNormal()
      esconderSobreposicao();
    }
  
  } else {

    esconderSobreposicao();
    mudarOEstadoDoBotaoHamburguerParaNormal();
  
    if(verificarSeOMenuLateralEstaMinimizado()) {
  
      maximizarABarraNavegacao();
      maximizarOConteudo();
      mudarOEstadoDoBotaoHamburguerParaMaximizar();
    } else {
  
      abrirMenuLateral();
      minimizarOConteudo();
      minimizarABarraNavegacao();
      mudarOEstadoDoBotaoHamburguerParaMinimizar();
    }

    botaoHamburguer.onclick = function() {
      if(verificarSeOMenuLateralEstaMinimizado()) {
        abrirMenuLateral();
        minimizarOConteudo();
        minimizarABarraNavegacao();
        mudarOEstadoDoBotaoHamburguerParaMinimizar();
      } else {
        minimizarMenuLateral();
        maximizarOConteudo();
        maximizarABarraNavegacao();
        mudarOEstadoDoBotaoHamburguerParaMaximizar();
      }
    }

    listaDeItemsDoMenuLateral.onclick = function() {
      if(verificarSeOMenuLateralEstaMinimizado()) {
        maximizarABarraNavegacao();
        maximizarOConteudo();
      } else {
        minimizarABarraNavegacao();
        minimizarOConteudo();
      }
    }
  
  }
  
}

function gerenciarOEstadoDoMenuLateralAoMudarOTamanhoDoViewport() {
  window.addEventListener("resize", function(){
    gerenciarOEstadoDoMenuLateral();
  });
}

function configurarAoClicarNoHamburguer() {
      $('.botao-hamburguer').click(function () {
          var deveEsconder = localStorage['deveEsconderMenuLateral'];
          if (deveEsconder === 'true') {
              localStorage['deveEsconderMenuLateral'] = 'false';
          }else if (deveEsconder === 'false') {
              localStorage['deveEsconderMenuLateral'] = 'true';
          } else {
              localStorage['deveEsconderMenuLateral'] = 'true';
          }
      });
  }

  function tratarExibicaoDoMenuLateral() {
      var deveEsconder = localStorage['deveEsconderMenuLateral'];
      if (deveEsconder === 'true') {
          $('.menu-lateral').addClass('menu-lateral_minimizado');
          
      } else {
          $('.menu-lateral').removeClass('menu-lateral_minimizado');
      }
  }

  $.ajaxSetup({ cache: false });

  $(document).ready(function () {
      gerenciarOPaddingBottomDaPagina();
      gerenciarOPaddingBottomAoMudarOTamanhoDoViewport();
      configurarAoClicarNoHamburguer();
      tratarExibicaoDoMenuLateral();
  });

