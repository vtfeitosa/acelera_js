"use strict"

//Função para pular linha
function skipLine(){
    document.write("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    let box = document.querySelector("#pageContent");
    box.innerHTML = (content);
}

writePageContent(`<div><h1>Minha página, modificada por JavaScript</h1><p id= contentFromInput ></p></div><div><input id= inputContent placeholder="teste" ></input><button id=btn onclick=" writeFromInput()" >Adicionar</button>`);


function writeFromInput(){
    let inputContent = document.getElementById("inputContent");
    let contentFromInput = document.querySelector("#contentFromInput");
    contentFromInput.innerHTML += (inputContent.value);    
}