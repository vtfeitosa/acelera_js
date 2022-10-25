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
//na linha acima está arredondando o número aleatório q veio entre 0.1 e 1
//... multiplicando por 100, tornando o número sorteado um numero inteiro entre 10 e 100
//...pq o Math.round arredonda para um número inteiro
console.log (numberDrawn);

//Capturando o input do número escolhido pelo jogador para fazer a comparação
let playerNumber = prompt("Já pensei. Qual você acha que é? (Entre 0 e 100)");

//Compara o número sorteado pela máquina e o número escolhido pelo usuário
if(playerNumber == numberDrawn){
    //Se o jogador acertar o número que a máquina sorteou
    writePageContent("Uau! Você acertou, eu também pensei no número " + numberDrawn);

}else{
    //Se o jogador errar o número que a máquina sorteou
    writePageContent("Você errou! Eu tinha pensado no " + numberDrawn);

}