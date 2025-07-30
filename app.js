let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatório();
let tentativas = 1;

function exibirTentoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagensNaTela(){
    exibirTentoNaTela("h1", "Olá, bem vindo ao jogo nsjs");
    exibirTentoNaTela("p", "Esolha um número entre 1 e 10");
}

exibirMensagensNaTela();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroAleatorio){
        exibirTentoNaTela("h1", "Parabens!, Você acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativa = "Voce acertou com "+tentativas+" "+palavraTentativa;
        exibirTentoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else{
        if(chute>numeroAleatorio){
            exibirTentoNaTela("p", "O seu número é maior");
        }else{
            exibirTentoNaTela("p", "O seu número é menor");
        }
        tentativas++;
        limparEspaco();
    }

}

function limparEspaco(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function gerarNumeroAleatório(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatório();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatório();
    limparEspaco();
    tentativas = 1;
    exibirMensagensNaTela();   
}