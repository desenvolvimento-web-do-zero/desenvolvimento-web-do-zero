
 // Seleciona todos os cartões de tecnologia
const cartoes = document.querySelectorAll(".cartao");

// Percorre cada cartão
cartoes.forEach(function(cartao) {

    // Adiciona uma ação ao clicar no cartão
    cartao.addEventListener("click", function(evento) {

        // Verifica se o clique foi no botão da aula
        if (evento.target.closest(".botao-aula")) {
            return;
        }

        // Alterna a classe de destaque
        cartao.classList.toggle("cartao-selecionado");

    });

});

// Seleciona o botão e o menu
const botaoMenu = document.querySelector("#menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

// Abre ou fecha o menu ao clicar no botão
botaoMenu.addEventListener("click", function() {

    const menuAberto =
        menuPrincipal.classList.toggle("menu-aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "✕" : "☰";

});

// Fecha o menu depois de clicar em um link
menuPrincipal.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        menuPrincipal.classList.remove("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";

    });

});

/* Seleciona todos os botões das aulas */
const botoesAula =
    document.querySelectorAll(".botao-aula");

/* Configura cada botão */
botoesAula.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Localiza a aula dentro do mesmo cartão
        const aula =
            botao.parentElement.querySelector(".conteudo-aula");

        // Inverte o estado de visibilidade
        aula.hidden = !aula.hidden;

        // Atualiza o texto do botão
        botao.textContent = aula.hidden
            ? "Ver aula"
            : "Ocultar aula";

        // Informa o estado para tecnologias assistivas
        botao.setAttribute(
            "aria-expanded",
            String(!aula.hidden)
        );

    });

});

const botaoCorrigirHTML = document.querySelector("#corrigir-html");
const resultadoHTML = document.querySelector("#resultado-html");

if (botaoCorrigirHTML && resultadoHTML) {

    botaoCorrigirHTML.addEventListener("click", function () {

        const respostaSelecionada = document.querySelector(
            'input[name="resposta-html"]:checked'
        );

        if (!respostaSelecionada) {
            resultadoHTML.textContent =
                "Escolha uma alternativa antes de conferir a resposta.";

            resultadoHTML.className = "resposta-aviso";
            return;
        }

        const resposta = respostaSelecionada.value;

        if (resposta === "h1") {

            resultadoHTML.textContent =
                "Parabéns! Você acertou! A tag <h1> representa um título principal. Ela ajuda a organizar o conteúdo da página.";

            resultadoHTML.className = "resposta-correta";

        } else if (resposta === "p") {

            resultadoHTML.textContent =
                "Ainda não foi dessa vez! A tag <p> é utilizada para criar parágrafos. Para o título principal, usamos <h1>.";

            resultadoHTML.className = "resposta-incorreta";

        } else if (resposta === "img") {

            resultadoHTML.textContent =
                "Quase! A tag <img> é utilizada para inserir imagens. A tag que representa o título principal é <h1>.";

            resultadoHTML.className = "resposta-incorreta";
        }

    });

}

const botaoCorrigirCSS = document.querySelector("#corrigir-css");
const resultadoCSS = document.querySelector("#resultado-css");

if (botaoCorrigirCSS && resultadoCSS) {

    botaoCorrigirCSS.addEventListener("click", function () {

        const respostaSelecionada = document.querySelector(
            'input[name="resposta-css"]:checked'
        );

        if (!respostaSelecionada) {
            resultadoCSS.textContent =
                "Escolha uma alternativa antes de conferir a resposta.";

            resultadoCSS.className = "resposta-aviso";
            return;
        }

        const resposta = respostaSelecionada.value;

        if (resposta === "css") {

            resultadoCSS.textContent =
                "Parabéns! Você acertou! O CSS controla a aparência da página, incluindo cores, fontes, espaçamentos e bordas.";

            resultadoCSS.className = "resposta-correta";

        } else if (resposta === "html") {

            resultadoCSS.textContent =
                "Ainda não foi dessa vez! O HTML organiza a estrutura e o conteúdo da página. O CSS é responsável pela apresentação visual.";

            resultadoCSS.className = "resposta-incorreta";

        } else if (resposta === "javascript") {

            resultadoCSS.textContent =
                "Quase! O JavaScript permite adicionar comportamentos e interatividade. Para definir cores e fontes, utilizamos o CSS.";

            resultadoCSS.className = "resposta-incorreta";
        }

    });

}

const botaoCorrigirJavaScript = document.querySelector("#corrigir-javascript");
const resultadoJavaScript = document.querySelector("#resultado-javascript");

if (botaoCorrigirJavaScript && resultadoJavaScript) {

    botaoCorrigirJavaScript.addEventListener("click", function () {

        const respostaSelecionada = document.querySelector(
            'input[name="resposta-javascript"]:checked'
        );

        if (!respostaSelecionada) {
            resultadoJavaScript.textContent =
                "Escolha uma alternativa antes de conferir a resposta.";

            resultadoJavaScript.className = "resposta-aviso";
            return;
        }

        const resposta = respostaSelecionada.value;

        if (resposta === "interatividade") {

            resultadoJavaScript.textContent =
                "Parabéns! Você acertou! O JavaScript permite criar interações, responder a cliques, validar formulários e atualizar o conteúdo da página.";

            resultadoJavaScript.className = "resposta-correta";

        } else if (resposta === "estrutura") {

            resultadoJavaScript.textContent =
                "Ainda não foi dessa vez! O HTML é responsável pela estrutura e pelo conteúdo. O JavaScript acrescenta comportamentos à página.";

            resultadoJavaScript.className = "resposta-incorreta";

        } else if (resposta === "aparencia") {

            resultadoJavaScript.textContent =
                "Quase! O CSS é responsável pela aparência visual. O JavaScript permite adicionar comportamentos e interatividade.";

            resultadoJavaScript.className = "resposta-incorreta";
        }

    });

}
