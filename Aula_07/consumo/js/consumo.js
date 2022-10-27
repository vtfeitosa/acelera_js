"use strict"

//Elemento do DOM no qual o conteúdo será impresso
let contentBox = document.querySelector("#pageMainContent");

//Função para pular linha
function skipLine(){
    result.innerHTML += ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    contentBox.innerHTML += (content);
}

//Capturando elementos do DOM para "imprimir" o header e footer
let headerBox = document.querySelector(".development");
let footerBox = document.querySelector("footer");

//Header
headerBox.innerHTML = (`
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`);

//Footer
footerBox.innerHTML = (`
<section class="footer_extra">
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on 27 | October | 2022 </p>
</section>
`);

//////////////

writePageContent(`
<h1>Álcool ou Gasolina?</h1>
<p>Se você ainda fica na dúvida sobre o consumo de combustíveldo seu veículo, faça já o teste! </br>Preencha os dados, e verifique qual o nível do consumo de acordo com o combustível usado.</p>
<div id="calcBox">
    <div id="fuelBox">
        <select id="fuelType">
            <option selected disabled>-- Selecione um Combustível --</option>
            <option value="Álcool">Álcool</option>
            <option value="Gasolina">Gasolina</option>
        </select>
    </div>
    <div id="priceBox">
        <label>Valor do Litro de Combustível:<input id="fuelPrice" placeholder="BRL - Reais"></label>
    </div>
    <div id="pathBox">
        <label>Percurso percorrido:<input id="path" placeholder="Km"></label>
    </div>
    <div id="tankBox">
        <label>Capacidade do Tanque:<input id="tankCapacity" placeholder="Litros"></label>
    </div>
    <div id="btnBox">
        <button id="btn" onclick="readInput(path.value,tankCapacity.value,fuelPrice.value)">Calcular</button>
    </div>
</div>
<p id="result"></p>
`);

//////////////

//Capturando Inputs
let fuelType = document.querySelector("#fuelType");
let path = document.querySelector("#path");
let tankCapacity = document.querySelector("#tankCapacity");
let fuelPrice = document.querySelector("#fuelPrice");

//Elemento do dom onde vai ser "impresso" o resultado
let result = document.querySelector("#result");
   
//Função que lê o valor do input e converte para número inteiro
function readInput(pathInput , tankCapacityInput , fuelPriceInput){
    let pathInp = (Number(pathInput));
    let tankInp = (Number(tankCapacityInput));
    let fuelPriceInp = (Number(fuelPriceInput));
    console.log(pathInp)

    let pathTraveled = ((pathInp/tankInp).toFixed(2));
    let pathPrice = (tankInp * fuelPriceInp);
    let kmPrice = (((pathPrice)/pathInp).toFixed(2));

    result.innerHTML += ("Seu veículo percorre cerca de " + pathTraveled + " Km/Litro de " + fuelType.value + " consumido.");
    skipLine();
    result.innerHTML += ("O valor gasto de combustível com esse trajeto é R$" + pathPrice + " reais.");
    skipLine();
    result.innerHTML += "Abastecendo seu veículo com " + fuelType.value + " você gasta cerca de R$" + kmPrice + " por Km percorrido.";

}