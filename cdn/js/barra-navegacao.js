function verificarSeOViewportEhMenorQueTablet() {
    if(window.innerWidth < 900) {
        return true;
    } else {
        return false;
    }
}

function verificarSeExisteOCabecalhoSistemaEObterAAlturaDele() {
    var alturaDoCabecalhoSistema = 0;
    if (document.querySelector('.cabecalho-sistema')) {
        var cabecalhoSistema = document.querySelector('.cabecalho-sistema');
        if(cabecalhoSistema.classList.contains('cabecalho-sistema_fixo')) {
            alturaDoCabecalhoSistema = cabecalhoSistema.clientHeight;
            return alturaDoCabecalhoSistema;
        } else {
            return alturaDoCabecalhoSistema = 0;    
        }
    } else {
        return alturaDoCabecalhoSistema = 0;
    }
}

function verificarSeExisteOABarraNavegacaoEObterAAlturaDela() {
    var alturaDaBarraNavegacao = 0;
    if (document.querySelector('.barra-navegacao')) {
        var barraNavegacao = document.querySelector('.barra-navegacao');
        if (barraNavegacao.classList.contains('barra-navegacao_fixa')) {
            alturaDaBarraNavegacao = barraNavegacao.clientHeight;
            return alturaDaBarraNavegacao;
        } else {
            return alturaDaBarraNavegacao = 0;
        }
    } else {
        return alturaDaBarraNavegacao = 0;
    }
}

function gerenciarOPaddingBottomDaPagina() {
    var tagBody = document.querySelector('body');
    var alturaTotalDoPaddingBottom = 0;
    var alturaDoCabecalhoSistema = 0;
    var alturaDaBarraNavegacao = 0;

    if(verificarSeOViewportEhMenorQueTablet()){
        alturaDoCabecalhoSistema = verificarSeExisteOCabecalhoSistemaEObterAAlturaDele();
    } else {
        alturaDoCabecalhoSistema = verificarSeExisteOCabecalhoSistemaEObterAAlturaDele();
        alturaDaBarraNavegacao = verificarSeExisteOABarraNavegacaoEObterAAlturaDela();
    }

    alturaTotalDoPaddingBottom = alturaDaBarraNavegacao + alturaDoCabecalhoSistema;

    tagBody.setAttribute('style','padding-top: ' + alturaTotalDoPaddingBottom + 'px');
}

function gerenciarOPaddingBottomAoMudarOTamanhoDoViewport() {
    window.addEventListener("resize", function(){
        gerenciarOPaddingBottomDaPagina();
    });
}