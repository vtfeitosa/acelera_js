"use strict"

//Elemento do Dom no qual o conteúdo será impresso
let box = document.querySelector("#pageContent");

//Função para pular linha
function skipLine(){
    box.innerHTML += ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    box.innerHTML += (content);
}

//Sorteando um número aleatório
let numberDrawn = (Math.round((Math.random())*100));
//na linha acima está arredondando o número aleatório q veio entre 
console.log (numberDrawn);

let playerNumber = prompt("Já pensei. Qual você acha que é? (Entre 0 e 100)");

if(playerNumber == numberDrawn){
    writePageContent("Uau! Você acertou, eu também pensei no número " + numberDrawn);

}else{
    writePageContent("Você errou! Eu tinha pensado no " + numberDrawn);

}