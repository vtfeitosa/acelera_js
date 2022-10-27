"use strict"

let fuelType = document.querySelector("#fuelType");
let alc = document.querySelector("#alc");
let gas = document.querySelector("#gas");

let path = document.querySelector("#path");
let tankCapacity = document.querySelector("#tankCapacity");

let fuelPrice = document.querySelector("#fuelPrice");

consumption = document.querySelector("#consumption");

function skipLine() {
    consumption.innerHTML +=("<br>");
   }   
   
function fuelConsumption(){

    let consumptionL = (parseInt(path.value)/parseInt(tankCapacity.value));
    
    let pathTraveled = (consumptionL).toFixed(2);

    let pathPrice = ((tankCapacity.value) * parseFloat(fuelPrice.value));

    let kmPrice = ((pathPrice)/path.value);

    console.log(kmPrice);

    consumption.innerHTML = ("Seu veículo percorre cerca de " + pathTraveled + " Km/Litro de " + fuelType.value + " consumido.");
    skipLine();
    consumption.innerHTML += ("O valor gasto de combustível com esse trajeto é R$" + pathPrice + " reais.");
    skipLine();
    consumption.innerHTML += ("Abastecendo seu veículo com " + fuelType.value + " você gasta cerca de R$" + kmPrice + " reais por Km percorrido.");

}
