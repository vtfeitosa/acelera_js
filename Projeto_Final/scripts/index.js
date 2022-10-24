import { btnActive} from "./activateButton.js";

//Captura os elementos do dom para o innerHTML
const btnNotes = document.querySelector(".link-pagina-notas");
const btnBooks = document.querySelector(".link-pagina-livros");
const btnEdit = document.querySelector("section nav button:nth-of-type(3)");
const btnTrash = document.querySelector(".link-pagina-lixeira");

//Selecionando os botões e atribuindo a cada um, o evento "click" para executar
//...gerar uma variável que será o parâmetro de funções executadas a seguir.
btnNotes.addEventListener("click" , ()=>{
    btnSelected("notes");
} );
btnBooks.addEventListener("click" , ()=>{
    btnSelected("books");
});
btnEdit.addEventListener("click" , ()=>{
    btnSelected("edit");
});
btnTrash.addEventListener("click" , ()=>{
    btnSelected("trash");
});

//Quando o botão for selecionado, executar a função de "ativação" em scripts/activateButton.js(linha33)
function btnSelected(btnName){
    btnActive(btnName);
}
