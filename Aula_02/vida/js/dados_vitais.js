"use strict"

//Função para pular linha
function skipLine(){
    document.write("</br>");
}

//Função para escrever um determinado conteúdo na página
function writeContent(content){
    document.write(content);
}

//Atribuit o valor inserido no prompt ao valor de ageInput
let ageInput = prompt("Quantos anos você tem?");

//Função para calcular a quantidade de dias vividos
function daysLivedCalc(age){
    //O parãmetro age é o valor que foi atribuído na linha 23
    let ageDays = age * 365;
    return ageDays ;
}

let daysLived = daysLivedCalc(ageInput);
//Essa variável daysLived recebe o resultado da função(linha20),
//...e usou como parâmetro para esse cálculo, o agrInput(linha14)

//Função para calcular a quantidade de batimentos cardíacos que a
//...pessoa teve durante sua vida
function heartRateCalc(){
    let heartRateNum = (daysLived*(24*(60*80)));
    //essa função não pegou parâmentro pq a informação já estava no geral
    return heartRateNum ;
    //esse retorno é atribuído á variavel nomeada heartRate(linha36)
}

let heartRate = heartRateCalc();

writeContent("Você já viveu " + daysLived + " dias de vida!");
skipLine();
writeContent("E seu coração já bateu " + heartRate + " vezes. Haja Coração!")