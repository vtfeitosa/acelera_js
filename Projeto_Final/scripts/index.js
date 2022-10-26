import { btnActivator} from "./activateButton.js";

//Captura os elementos do dom para o innerHTML
const btnNotes = document.querySelector(".link-pagina-notas");
const btnBooks = document.querySelector(".link-pagina-livros");
const btnTasks = document.querySelector(".link-pagina-afazeres");
const btnEdit = document.querySelector("section nav > button:nth-child(3)");
const btnTrash = document.querySelector(".link-pagina-lixeira");
const inputBox = document.querySelector("section.form-card.input-principal");

//Selecionando os botões e atribuindo a cada um, o evento "click" para executar
//...gerar uma variável que será o parâmetro de funções executadas a seguir.
btnNotes.addEventListener("click" , ()=>{
    btnActivator("notes");
} );
btnBooks.addEventListener("click" , ()=>{
    btnActivator("books");
});
btnTasks.addEventListener("click" , ()=>{
    btnActivator("tasks");
});
btnEdit.addEventListener("click" , ()=>{
    btnActivator("edit");
});
btnTrash.addEventListener("click" , ()=>{
    btnActivator("trash");
});

inputBox.addEventListener("click" , ()=>{
    inputBox.classList.add("focus");
});
