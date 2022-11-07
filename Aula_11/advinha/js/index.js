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
<p>Last Update on 07 | November | 2022 </p>
</section>
`);

////////////////////////////

writePageContent(`
<label><input type="text" id="num"></input></label>
<button id="btn" onclick="compare()">Compare com o número que estou pensando!</button>`
);

let numInp = "";
let sorteado = "";

function compare(){
    sorteado = Math.round(Math.random()*100);
    numInp = document.querySelector("#num");
    numInp.value = "";

    if(sorteado === (Number(numInp.value))){
        alert("Parabéns! Você acertou o número secreto");

    }else{
        alert("Infelizmente você errou!");

    }
    
}
