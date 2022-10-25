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

function calcPontos(vitorias,empates,derrotas){
    let totalPontos = (((Number(vitorias) * 3) + Number(empates)) - Number(derrotas) );
    return totalPontos;
}

let ptFinal = calcPontos(vitoriasInp,empatesInp,derrotasInp);
let ptFinalAdv = calcPontos(vitoriasAdversarioInp,empatesAdversarioInp,derrotasAdversarioInp);


writePageContent(`Nosso time fez ${ptFinal} pontos!`);
skipLine();
writePageContent(`O time adversário fez ${ptFinalAdv} pontos`);
skipLine();
writePageContent(comparando(ptFinal , ptFinalAdv));

function comparando(ptFinalNum , ptFinalAdvNum){
    if (ptFinalNum < ptFinalAdvNum) {
    return (`Nosso time está indo PIOR que o Time Adversário :(`);
    
    }else if (ptFinalNum > ptFinalAdvNum) {
    return (`Nosso time está indo MELHOR que o Time Adversário hihihi `); 
    
    }else if (ptFinalNum== ptFinalAdvNum) {
    return (`Nosso time está EMPATADO com o Time Adversário `); 
    }

}


