import {noteTemplate} from "./templates.js"

//Captura os elementos do dom para o innerHTML
const btnNotes = document.querySelector(".link-pagina-notas");
const btnLivros = document.querySelector(".link-pagina-livros");
const btnEdit = document.querySelector("section nav button:nth-of-type(3)");
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

//Adicionar um Cartão de Nota Inteiro na section.cards-list usando as variações de tag cadastradas acima.
function addCard(){
    //Capturando elemento do DOM para "imprimir" as 3 notas que são exibidas na tela inicial "Notas"
    const cardsList = document.querySelector("section.cards-list");
    cardsList.innerHTML = noteTemplate(noteTagBook + noteTagTasks) + noteTemplate(noteTagBook) + noteTemplate("");

}

//Exportando função para ser executada em scripts/index.js(linha24)
export function btnActive(btnName){
    //Capturando no dom o "subtítulo" da pagina que está na nev, será exibido o nome do botão selecionado
    const titleBox = document.querySelector(".logo");

    //Guiando o .js a executar as funções a seguir, devem ser "invocadas rsrs" de acordo com parametros
    //...definidos a partir  do botão que foi clicado, recebidos de scripts/index.js(a partir da linha 9)
    if (btnName === "notes"){
        titleBox.innerHTML = "Notas";
        btnNotes.classList.add("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.remove("active");
        addCard();
    
    }if (btnName === "edit"){
        titleBox.innerHTML = "Editar Tags";
        btnNotes.classList.remove("active");
        btnEdit.classList.add("active");
        btnTrash.classList.remove("active");
    
    }if (btnName === "trash"){
        titleBox.innerHTML = "Lixeira";
        btnNotes.classList.remove("active");
        btnEdit.classList.remove("active");
        btnTrash.classList.add("active");
    }
}


