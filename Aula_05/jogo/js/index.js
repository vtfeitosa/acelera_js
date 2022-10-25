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

//Mltiplicando por 100, tornando o número sorteado um numero inteiro entre 1 e 100
let numSorteadoInt = sorteio(100);

//Sorteando um número aleatório e transformando em inteiro com o uso do parâmetro n
function sorteio(n){
let numSorteado = Math.round((Math.random()* n ));
//na linha acima está arredondando o número aleatório q veio entre 0.1 e 1 pq o Math.round arredonda 
//...para um número inteiro pq multiplica por 100 q é o parâmetro usado como valor de n
console.log (numSorteado);
return numSorteado;
}

//Capturando o input do número escolhido pelo jogador para fazer a comparação
let playerNumber = prompt("Já pensei. Qual você acha que é? (Entre 0 e 100)");

//Compara o número sorteado pela máquina e o número escolhido pelo usuário
if(playerNumber == numSorteadoInt){
    //Se o jogador acertar o número que a máquina sorteou
    writePageContent("Uau! Você acertou, eu também pensei no número " + numSorteadoInt);

}else if(playerNumber != numSorteadoInt){
    //Se o jogador errar o número que a máquina sorteou
    writePageContent("Você errou! Eu tinha pensado no " + numSorteadoInt);

    //Vai ser feita outra comparação se era > ou < 
    if(playerNumber < numSorteadoInt){
        skipLine();
        writePageContent( "O número que eu sorteei era MAIOR que o escolhido por você!");

    }else if(playerNumber > numSorteadoInt){
        skipLine();
        writePageContent( "O número que eu sorteei era MENOR que o escolhido por você!");
    }   
}