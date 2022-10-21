"use strict"

function skipLine(){
    document.write("</br>");
}

function writeContent(content){
    document.write(content);
}

let ageInput = prompt("Quantos anos você tem?");

function daysLivedCalc(age){
    let ageNum = age * 365;
    return ageNum ;
}

let daysLived = daysLivedCalc(ageInput);

let heartRate = (daysLived*(24*(60*80)));

writeContent("Você já viveu " + daysLived + " dias de vida!");
skipLine();
writeContent("E seu coração já bateu " + heartRate + " vezes. Haja Coração!")
console.log(heartRate);