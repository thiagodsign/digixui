$('code:not(.html_no-escape)').each(function () {
    var that = $(this);
    // cache the content of 'code'
    var html = that.html();
    that.empty();
    // escape the content
    that.text(html);
});

$(document).ready(function () {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
});

// Copia o código do ícone clicando nele

$('.lista-icones__item').click((event) => {
    var $temp = $("<input>");
    $("body").append($temp);
    let icone = $(event.currentTarget).find("code").text();
    $temp.val('<i class="' + icone + '" aria-hidden="true"></i>').select();
    document.execCommand("copy");
    $temp.remove();
});

// Faz busca na lista de ícones

function buscaDeIcones() {
    var input, filter, ul, li, span, i;
    input = document.getElementById("pesquisa");
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista-de-icones");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("code")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Muda exibição do menu ativo de acordo sua url

$(function () {
    let endereco = location.hash.split("/")[1].split(".")[0];
    $('a').removeClass('menu-lateral__link_ativo');
    $(`a[href="/documentacao/#/${endereco}.html"]`).addClass("menu-lateral__link_ativo");
});

$(".menu-lateral__link").click(function () {
    $(window).scrollTop(0);
});

//Muda as abas da documentacao

$('#segundaAbaDoFormulario').click(() => {
    $('#conteudoDaPrimeiraAba').addClass("doc-abas__conteudo_desativado");
    $('#conteudoDaPrimeiraAba').removeClass("doc-abas__conteudo_ativado");
    $('#conteudoDaSegundaAba').removeClass("doc-abas__conteudo_desativado");
    $('#conteudoDaSegundaAba').addClass("doc-abas__conteudo_ativado");
    $('#segundaAbaDoFormulario').addClass("doc-abas__aba-selecionada");
    $('#primeiraAbaDoFormulario').removeClass("doc-abas__aba-selecionada");
});

$('#primeiraAbaDoFormulario').click(() => {
    $('#conteudoDaPrimeiraAba').removeClass("doc-abas__conteudo_desativado");
    $('#conteudoDaPrimeiraAba').addClass("doc-abas__conteudo_ativado");
    $('#conteudoDaSegundaAba').removeClass("doc-abas__conteudo_ativado");
    $('#conteudoDaSegundaAba').addClass("doc-abas__conteudo_desativado");
    $('#segundaAbaDoFormulario').removeClass("doc-abas__aba-selecionada");
    $('#primeiraAbaDoFormulario').addClass("doc-abas__aba-selecionada");
});
 
// barra-navegacao

gerenciarOPaddingBottomDaPagina();
gerenciarOPaddingBottomAoMudarOTamanhoDoViewport();


// Menu lateral
gerenciarOEstadoDoMenuLateral();
gerenciarOEstadoDoMenuLateralAoMudarOTamanhoDoViewport();
