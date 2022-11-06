"use strict"

////////////////

let playerNumber = "";
let nChutes = 0;
let numSorteadoInt = sorteio(1000);
console.log(numSorteadoInt);

while (nChutes !== -1) {

    let result = compare();

    if (result === "ERRO") {
        alert("ERRO! Insira um número válido.");

    } else if (result === "acertou") {
        alert("Uau! Você acertou, eu também pensei no número " + numSorteadoInt + "!");
        nChutes = -1;

    } else if (result === "MAIOR") {
        alert("O número que eu sorteei era MAIOR que o escolhido por você!");
        nChutes++;

    } else if (result === "MENOR") {
        alert("O número que eu sorteei era MENOR que o escolhido por você!");
        nChutes++;
    }

}

//Sorteando um número aleatório e transformando em inteiro com o uso do parâmetro n
function sorteio(n) {
    let numSorteado = Math.round((Math.random() * n));
    //na linha acima está arredondando o número aleatório q veio entre 0.1 e 1 pq o Math.round arredonda 
    //...para um número inteiro pq multiplica por 100 q é o parâmetro usado como valor de n
    return numSorteado;
}

function compare() {
    console.log("oi3");
    playerNumber = prompt("Insira um número para comparação");

    //Compara o número sorteado pela máquina e o número escolhido pelo usuário
    if (isNaN(playerNumber)) {
        //Se for isNan for "true", significa que o valor preenchido não foi um número,
        //... e aí dá o erro e pede para recarregar a página
        return "ERRO";

    } else {
        //se a função aterior responder "false", signtifica que é um número e aí executa
        //...as funções das linhas a seguir, fazendo mais comparações:
        if (playerNumber == numSorteadoInt) {
            //Se o jogador acertar o número que a máquina sorteou
            return "acertou";

        } else if (playerNumber < numSorteadoInt) {
            return "MAIOR";

        } else if (playerNumber > numSorteadoInt) {
            return "MENOR";

        }
    }
}