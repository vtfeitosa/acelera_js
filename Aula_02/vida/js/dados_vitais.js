"use strict"

function skipLine(){
    document.write("</br>");
}

function writeContent(content){
    document.write(content);
}

let ageInput = prompt("Quantos anos você tem?");

function daysLivedCalc(age){
    let ageDays = age * 365;
    return ageDays ;
}

let daysLived = daysLivedCalc(ageInput);

function heartRateCalc(rate){
    let heartRateNum = (daysLived*(24*(60*80)));
    return heartRateNum ;
}

let heartRate = heartRateCalc()

writeContent("Você já viveu " + daysLived + " dias de vida!");
skipLine();
writeContent("E seu coração já bateu " + heartRate + " vezes. Haja Coração!")