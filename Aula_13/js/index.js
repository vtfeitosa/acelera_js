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

// //Header
// headerBox.innerHTML = (`
// <p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
// `);

// //Footer
// footerBox.innerHTML = (`
// <section class="footer_extra">
// <p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
// <p>Last Update on Day | Month | 2022 </p>
// </section>
// `);

////////////////////////////

function somaEspecial(num1, num2) {
	let resultado1 = num1 * 2;
	let resultado2 = num2 / 2;
	return resultado1 + resultado2;
}

console.log(somaEspecial(10, 30));

function compare(num1,num2){

    if(num1 === num2){
        return "IGUAIS";

    }else{
        return "DIFERENTES";
    }
}

console.log(compare(10,30));

function printNumbers(){

    let i = 1;
    while(i <= 10){
        console.log(i);
        i++;
    }

}

console.log(printNumbers());

function printInterval(x,y){

    while(x <= y){
        console.log(x);
        x++
    }

}

printInterval(5,10);

function imprime100(){

    let x = 100;

    while(x >= 0){
        console.log(x);
        x--
    }
}

imprime100();

function paresAte(maximo){

    let numPar = 2;

    while(numPar <= maximo){
        console.log(numPar);
        numPar = numPar + 2;
    }
}

paresAte(10);

function transformaEmArray(st1,st2,st3){
    let arrayGroup = [];
    console.log(arrayGroup);

    while(arrayGroup.length < 3 ){
    arrayGroup.push(st1);
    arrayGroup.push(st2);
    arrayGroup.push(st3);

    console.log(arrayGroup);

    }
    
}

transformaEmArray(1,2,3);


let arrayGroup = [1,5,9,21];

function verificaPontas(array){

    console.log(array[array.length -1]);

    if(array[0] > array[array.length -1]){
        return "true";

    }else{
        return "false";
    }
}

console.log(verificaPontas(arrayGroup));

function returnIntegersArray(){

    let x = 1;
    arrayGroup = [];

    while(x <= 50){
        arrayGroup.push(x)
        x++
    }

    console.log(arrayGroup)

}

returnIntegersArray();