"use strict"

let fuelType = document.querySelector("#fuelType");
let alc = document.querySelector("#alc");
let gas = document.querySelector("#gas");

let path = document.querySelector("#path");
let tankCapacity = document.querySelector("#tankCapacity");

let fuelPrice = document.querySelector("#fuelPrice");

function fuelConsumption(){
    console.log("oi");

    let consumptionL = (parseInt(path.value)/parseInt(tankCapacity.value));
    
    let pathTraveled = (consumptionL).toFixed(2);

    let pathPrice = ((pathTraveled) * parseFloat(fuelPrice.value));

    consumption.innerHTML = ("Seu veículo percorre cerca de " + pathTraveled
        + " Km/Litro de " + fuelType.value + " consumido.</br>" + "O valor gasto de combustível com esse trajeto é R$"
        + pathPrice + " reais.</br>");

}
