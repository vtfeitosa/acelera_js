"use strict"

let age_p1 = document.querySelector('#age_1');
let age_p2 = document.querySelector('#age_2');
let age_p3 = document.querySelector('#age_3');

let media = document.querySelector("#media");

function skipLine() {
    media.innerHTML +=("<hr><br><hr>");
   }

let Year = 2022;

function averageAge(){
    let total = (parseInt(age_p1.value) + parseInt(age_p2.value) + parseInt(age_p3.value));

    media.innerHTML = ("A média de idades das 3 pessoas é: ");
    skipLine();
    media.innerHTML += (Math.round((total)/3));

}