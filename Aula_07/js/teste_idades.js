"use strict"

//Elemento do DOM no qual o conteúdo principal será impresso
let contentBox = document.querySelector("#pageMainContent");

//Função para pular linha
function skipLine(){
    contentBox.Text += ("</br>");
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

////////////////////

writePageContent(`
<h3>Insira 3 idades e calcule a média ao clicar no botão:</h3>
<section>
<div class="ageBox">
<label>Pessoa 1:<input id="age_1" placeholder="Idade"></label>
</div>
<div class="ageBox">
<label>Pessoa 2:<input id="age_2" placeholder="Idade"></label>
</div>
<div class="ageBox">
<label>Pessoa 3:<input id="age_3" placeholder="Idade"></label>
</div>
<div id="btnBox">
<button id="btn" onclick="averageAge()">Calcular</button>
</div>
</section>
<p id="result"></p>
`);


let age_p1 = document.querySelector('#age_1');
let age_p2 = document.querySelector('#age_2');
let age_p3 = document.querySelector('#age_3');

let result = document.querySelector("#result");
let Year = 2022;

function averageAge(){
    let total = (parseInt(age_p1.value) + parseInt(age_p2.value) + parseInt(age_p3.value));

    result.innerText = ("A média de idades das 3 pessoas é: ");
    skipLine();
    result.innerText += (Math.round((total)/3));

}