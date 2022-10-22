"use strict"

//Função para pular linha
function skipLine(){
    document.write("</br>");
}

//Função para escrever um determinado conteúdo na página
function writeContent(content){
    let box = document.querySelector("body main");
    box.innerHTML = (content);
}

writeContent(`<h1>Minha página, modificada por JavaScript</h1> <input placeholder="TESTE" ></input>`);
