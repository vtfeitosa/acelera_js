//Ativação da Lista de Tags
const tagsList = document.querySelector(".nav-tags-list");
const divTagBooks =  `<button class="link-pagina-livros">
<span class="icone-24 icone-bandeira"></span>
<span>Livros</span>`
const divTagTasks = `<button class="link-pagina-afazeres">
<span class="icone-24 icone-bandeira"></span>
<span>Afazeres</span>`;

tagsList.innerHTML += divTagBooks + divTagTasks;

//Captura os elementos do dom para o innerHTML
const btnNotes = document.querySelector(".link-pagina-notas");
const btnBooks = document.querySelector(".link-pagina-livros");
const btnEdit = document.querySelector("section nav > button:nth-child(3)");
const btnTasks = document.querySelector(".link-pagina-afazeres");
const btnTrash = document.querySelector(".link-pagina-lixeira");

//Ícone da TagBook a ser impresso no html
const noteTagBook =  `<div class="nota-tag">
<button class="nota-tag-nome">
    <span>livros</span>
</button>
<button class="nota-tag-remover">
    <span class="icone-14 icone-x"></span>
</button>
</div>`;

//Ícone da TagTasks a ser impresso no html
const noteTagTasks =  `<div class="nota-tag">
<button class="nota-tag-nome">
    <span>afazeres</span>
</button>
<button class="nota-tag-remover">
    <span class="icone-14 icone-x"></span>
</button>
</div>`;

import {noteTemplate} from "./templates.js"

const cardsList = document.querySelector("section.cards-list");
const inputPrincipal = document.querySelector(".input-principal");
const esvaziarLixeira = document.querySelector(".esvaziar-lixeira");

let card_01 = noteTemplate(noteTagBook + noteTagTasks);
let card_02 = noteTemplate(noteTagBook);
let card_03 = noteTemplate(""); 

//Exportando função para ser executada em scripts/index.js(linha24)
export function btnActivator(btnName){
    //Capturando no dom o "subtítulo" da pagina que está na nev, será exibido o nome do botão selecionado
    const titleBox = document.querySelector(".logo");
    console.log(btnName);
    //Guiando o .js a executar as funções a seguir, devem ser "invocadas rsrs" de acordo com parametros
    //...definidos a partir  do botão que foi clicado, recebidos de scripts/index.js(a partir da linha 9)

    if (btnName === "notes"){
        inputPrincipal.classList.remove("oculto");
        esvaziarLixeira.classList.add("oculto");

        titleBox.innerHTML = "Notas";
        btnNotes.classList.add("active");
        btnBooks.classList.remove("active");
        btnTasks.classList.remove("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.remove("active");

        cardsList.innerHTML = ("");
        cardsList.innerHTML += card_01;
        cardsList.innerHTML += card_02;
        cardsList.innerHTML += card_03;

    
    }if (btnName === "books"){
        inputPrincipal.classList.remove("oculto");
        esvaziarLixeira.classList.add("oculto");

        titleBox.innerHTML = "Livros";
        btnNotes.classList.remove("active");
        btnBooks.classList.add("active");
        btnTasks.classList.remove("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.remove("active");
        cardsList.innerHTML = ("");
        cardsList.innerHTML += card_01;
        cardsList.innerHTML += card_02;

    
    }if (btnName === "tasks"){
        inputPrincipal.classList.remove("oculto");
        esvaziarLixeira.classList.add("oculto");

        titleBox.innerHTML = "Afazeres";
        btnNotes.classList.remove("active");
        btnBooks.classList.remove("active");
        btnTasks.classList.add("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.remove("active");
        cardsList.innerHTML = ("");
        cardsList.innerHTML += card_01;

    
    }if (btnName === "edit"){
        inputPrincipal.classList.remove("oculto");
        esvaziarLixeira.classList.add("oculto");

        console.log("falta add modal");
        titleBox.innerHTML = "Editar Tags";
        btnNotes.classList.remove("active");
        btnBooks.classList.remove("active");
        btnTasks.classList.remove("active");
        btnTrash.classList.remove("active");

        openEditModal();
    
    }if (btnName === "trash"){
        inputPrincipal.classList.add("oculto");
        esvaziarLixeira.classList.remove("oculto");

        titleBox.innerHTML = "Lixeira";
        btnNotes.classList.remove("active");
        btnBooks.classList.remove("active");
        btnTasks.classList.remove("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.add("active");

        cardsList.innerHTML = ("");
        cardsList.innerHTML += card_03;

    }
}

function openEditModal(){
    const editModal = document.querySelector("section.modal-tags");
    editModal.classList.remove("oculto");
    editModal.classList.add("modal-aberto-display");
    editModal.classList.add("modal-aberto-fundo");

}