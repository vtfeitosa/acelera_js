"use strict"

//Elemento do Dom no qual o conteúdo será impresso
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
<p>Last Update on 29 | October | 2022 </p>
</section>
`);

////////////////
let numSorteadoInt = "";

//Mltiplicando por 100, tornando o número sorteado um numero inteiro entre 1 e 100
numSorteadoInt = sorteio(100);

//Sorteando um número aleatório e transformando em inteiro com o uso do parâmetro n
function sorteio(n){
let numSorteado = Math.round((Math.random()* n ));
//na linha acima está arredondando o número aleatório q veio entre 0.1 e 1 pq o Math.round arredonda 
//...para um número inteiro pq multiplica por 100 q é o parâmetro usado como valor de n
console.log (numSorteado);
return numSorteado;
}

writePageContent(`
<div id="drawBox">
    <h1>Qual é o número?</h1>
    <p>Eu (máquina), pensei em um número. Qual você acha que é? (Entre 0 e 100)</p>
    <input id="playerNumber" placeholder="input">
    <button id="palpiteBtn">palpite</button>
    <button id="reSortear">re-sortear</button>
    <p id="result"></p>
</div>
`);


let palpiteBtn = document.querySelector("#palpiteBtn");
palpiteBtn.addEventListener ("click" , compare);

//Capturando o input do número escolhido pelo jogador para fazer a comparação
//let playerNumber = document.querySelector("#playerNumber");

//Elemento do DOM no qual será "impresso" o resultado
let result = document.querySelector("#result");

function compare(){
    //Capturando o input do número escolhido pelo jogador para fazer a comparação
    let playerNumber = document.querySelector("#playerNumber");

    //Compara o número sorteado pela máquina e o número escolhido pelo usuário
    if (isNaN(playerNumber.value)){
        //Se for isNan for "true", significa que o valor preenchido não foi um número,
        //... e aí dá o erro e pede para recarregar a página
        writePageContent("ERRO! Insira um número válido.")

    }else {
        //se a função aterior responder "false", signtifica que é um número e aí executa
        //...as funções das linhas a seguir, fazendo mais comparações:
        if(playerNumber.value == numSorteadoInt){
            //Se o jogador acertar o número que a máquina sorteou
            writePageContent("Uau! Você acertou, eu também pensei no número " + numSorteadoInt);
        
        }else{
            //Se o jogador errar o número que a máquina sorteou
            writePageContent("Você errou! Eu tinha pensado no " + numSorteadoInt);
        
            //Vai ser feita outra comparação se era > ou < 
            if(playerNumber.value < numSorteadoInt){
                skipLine();
                writePageContent( "O número que eu sorteei era MAIOR que o escolhido por você!");
        
            }else if(playerNumber.value > numSorteadoInt){
                skipLine();
                writePageContent( "O número que eu sorteei era MENOR que o escolhido por você!");
            }   
        }
    }
}

let reSorteioBtn = document.querySelector("#reSortear");
reSorteioBtn.addEventListener("click" , reSortear);

function reSortear(){
    numSorteadoInt = sorteio(100);
}


