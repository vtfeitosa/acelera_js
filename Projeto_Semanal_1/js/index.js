"use strict"

let entrega = "";
const result = document.querySelector("#result");

function definirEntrega(valorEntrega){
    result.innerText = "Frete calculado para " + valorEntrega;
    entrega = valorEntrega;
}

function calcProdutos(){
    let produto1 = prompt("Qual o valor do produto 1?");
    let produto2 = prompt("Qual o valor do produto 2?");
    let somaProdutos = Number(produto1) + Number(produto2);
    let somaTotal = somaProdutos + entrega;

    alert("A soma dos produtos com o frete é " + somaTotal);

}

