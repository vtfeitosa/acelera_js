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
headerBox.innerHTML = (`
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`);

//Footer
footerBox.innerHTML = (`
<section class="footer_extra">
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on 02 | November | 2022 </p>
</section>
`);

////////////////////////////

let anoDeCopa = 1930;
let anoLimite = prompt("Descubra em que anos seguintes averá copa! Digite um ano limite para comparação.");

if (anoLimite < anoDeCopa){
    writePageContent(`Ops...A Copa do Mundo só rolou a partir de 1930 rsrs Que tal recarregar a página e digitar algum ano seguinte a esse?`)

}

while(anoDeCopa <= anoLimite){
    writePageContent(anoDeCopa + " tem copa!");
    anoDeCopa = anoDeCopa + 4;
    skipLine();
}

if (anoDeCopa < 1927 ){
    skipLine();
    writePageContent(`Ufa! Esses foram os anos de copa até ${anoLimite}.`)

}
