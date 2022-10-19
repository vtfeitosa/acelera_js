"use strict"

let fuelType = document.querySelector("#fuelType");
let alc = document.querySelector("#alc");
let gas = document.querySelector("#gas");

let path = document.querySelector("#path");
let tankCapacity = document.querySelector("#tankCapacity");


function fuelConsumption(){
    console.log("oi");

    let consumptionL = (parseInt(path.value)/parseInt(tankCapacity.value));
    
    consumption.innerHTML = ("Seu veículo percorre cerca de " + Math.round(consumptionL) + " Km/Litro de " + fuelType.value + ".");
}
