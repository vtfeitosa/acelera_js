"use strict"

//Função para pular linha
function skipLine() {
    return ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content) {
    let pageContentBox = document.querySelector("#pageContent");
    pageContentBox.innerHTML = (content);
}


writePageContent(`
<div class="calcBox">
<h1>Calcule o preço do seu carro usado:</h1>
<label>Preço do carro novo:<input id="purchasePrice" type="number" placeholder="Número Inteiro"></input></label>
${skipLine()}
<label>Idade do carro:<input id="carAge" type="number" placeholder="Anos"></input></label>
${skipLine()}
<button id=btn onclick="calcPrice()" >Calcular</button>
${skipLine()}
<p id="result"></p>
</div>`);


function calcPrice() {
    let purchasePrice = document.getElementById("purchasePrice");
    let carAge = document.querySelector("#carAge");
    let result = document.querySelector("#result");

    if (Number.isInteger(carAge.value)) {
        result.innerText = "ERRO! Insira números válidos nos campos acima.";

    } else if (Number.isInteger(purchasePrice.value)) {
        result.innerText = "ERRO! Insira números válidos nos campos acima.";

    }else {
        console.log("é um numero valido");

        if (carAge.value < 3) {
            console.log("menos de 3 anos");
            let salePrice = (purchasePrice.value * 0.8);
            console.log(salePrice);
            result.innerText = `O preço de venda do seu carro usado é: ${Math.round(salePrice)}`

        } if ((carAge.value >= 3) && (carAge.value < 10)) {
            console.log("entre 3 e 10 anos");
            let salePrice = (purchasePrice.value * 0.7);
            console.log(salePrice);
            result.innerText = `O preço de venda do seu carro usado é: ${Math.round(salePrice)}`

        } if (carAge.value >= 10) {
            console.log("mais de 10 anos");
            let salePrice = (purchasePrice.value * 0.5);
            console.log(salePrice);
            result.innerText = `O preço de venda do seu carro usado é: ${Math.round(salePrice)}`
        }
    }
}

