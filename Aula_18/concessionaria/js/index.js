"use strict"

//Elemento do DOM no qual o conteúdo será impresso
const contentBox = document.querySelector("#pageMainContent");

//Função para pular linha
function skipLine(){
    contentBox.innerHTML += ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    contentBox.innerHTML += (content);
}

//Capturando elementos do DOM para "imprimir" o header e footer
const headerBox = document.querySelector(".development");
const footerBox = document.querySelector("footer");

//Header
headerBox .innerHTML = (`
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`);

//Footer
footerBox.innerHTML = (`
<section class="footer_extra">
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on Day | Month | 2022 </p>
</section>
`);

////////////////////////////

let veiculos = [];

function addCarro(modelo,ano,placa){

    let infoVeiculos = {
        modelo: modelo,
        ano: ano ,
        placa: placa
    }

    return infoVeiculos;
}

let carro1 = addCarro("fusca",1957,"OIOIOI");
let carro2 = addCarro("fiat",2002,"KKKKK");
let carro3 = addCarro("corola",2023,"KKRTOI");

console.log(carro1, carro2, carro3);

veiculos.push(carro1 , carro2, carro3);

console.log(veiculos);

for(let carNum = 0 ; carNum < veiculos.length ; carNum++){
    console.log(veiculos[carNum]);
}

