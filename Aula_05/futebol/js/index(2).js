"use strict"
let box = document.querySelector("#pageContent");

//Função para pular linha

function skipLine(){
    box.innerHTML += ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    box.innerHTML += (content);
}

let vitoriasInp = prompt("Quantos jogos o seu time venceu?");
let empatesInp = prompt("Quantos jogos o seu time empatou?");
let derrotasInp = prompt("E quantos o seu time perdeu?");
let vitoriasAdversarioInp = prompt("Quantos jogos o Time Adversário venceu?");
let empatesAdversarioInp = prompt("Quantos jogos o Time Adversário empatou?");
let derrotasAdversarioInp = prompt("E quantos o Time Adversário perdeu?")


//Calculando total de pontos vindos do input de cada time 
function pontos(){
    let pontosTotalInput = (Number(vitoriasInp) * 3) + Number(empatesInp);
    return pontosTotalInpResult;
}

function pontosAdversario(){
    let pontosTotalAdversarioInpResul = (Number(vitoriasAdversarioInp) * 3) + Number(empatesAdversarioInp);
    return pontosTotalAdversarioInpResul;
}

let pontos = pontos(pontosTotalInpResult);
let pontosTotalAdversarioInpResul = pontosAdversario(pontosTotalAdversarioInpResul);

//Calculando o desconto de pontos por derrota (-1), de cada time
function descontoDerrota(derrotas){
    let pontosDescontados = ((pontos())-(Number(derrotas)));
    return pontosDescontados;
}

function descontoDerrotaAdversario(derrotasAdversario){
    let pontosDescontadosAdversario = ((pontos())-(Number(derrotasAdversario)));
    return pontosDescontadosAdversario;
}

let totalPontosDescontados = descontoDerrota(derrotasInp);
let totalPontosDescontadosAdv = descontoDerrotaAdversario(derrotasAdversarioInp);

//POntuação final, para descontar os pontos a menos de derrotas
function pontuacaoFinal(total,desc){
    let final = total - desc;
    return final;
}

let ptFinal = pontuacaoFinal(pontosTotalInpResult,totalPontosDescontados);
let ptFinalAdv = pontuacaoFinal(pontosTotalAdversarioInpResul,totalPontosDescontadosAdv);


writePageContent(`Nosso time fez ${ptFinal} pontos!`);
skipLine();
writePageContent(`O time adversário fez ${ptFinalAdv} pontos`);
skipLine();
writePageContent(comparando(ptFinal , ptFinalAdv));

function comparando(ptFinalNum , ptFinalAdvNum){
    if (ptFinalNum < totalAdversario) {
    return (`Nosso time está indo PIOR que o Time Adversário :(`);
    
    }else if (ptFinalNum > ptFinalAdvNum) {
    return (`Nosso time está indo MELHOR que o Time Adversário hihihi `); 
    
    }else if (ptFinalNum== ptFinalAdvNum) {
    return (`Nosso time está EMPATADO com o Time Adversário `); 
    }

}


