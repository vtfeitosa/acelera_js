"use strict"

function skipLine(){
    document.write("</br>");
}

function writeContent(content){
    document.write(content);
}

let age = prompt("Quantos anos você tem?");
let days = age * 365;
let heartRate = (days*(24*(60*80)));

writeContent("Você já viveu " + days + " dias de vida!");
skipLine();
writeContent("E seu coração já bateu " + heartRate + " vezes. Haja Coração!")
console.log(heartRate);


