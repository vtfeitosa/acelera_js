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
let sorteados = [];

function compare(){
    numInp = (document.querySelector("#num"));

    while(sorteados.length < 6){
        sorteados.push(Math.round(Math.random()*60));
    }

    let acertou = false;

    for(let i=0 ; i < sorteados.length ; i++ ){

        if(sorteados[i] === Number(numInp.value)){
            acertou = true;

        }

    }

    if(acertou === true){
        alert(`Parabéns! Você acertou um dos números secretos :) (Número: ${numInp.value}) `);

    }else{
        alert("Infelizmente você errou :(");

    }

    console.log(acertou);
    console.log(sorteados);

    numInp.value = "";

    sorteados = [];
}
