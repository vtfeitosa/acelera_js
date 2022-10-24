//Criando uma nota nova no cards-list
export function noteTemplate(tag){
return `<div class="card">
    <div class="card-nota">
        <div class="card-nota-titulo">
            <input placeholder="Título" value="Titulo 1" />
            <button
                class="pin botao-icone botao-icone-34"
                tabindex="-1"
            >
                <span class="icone-24 icone-pin"></span>
            </button>
        </div>
        <div
            contenteditable="true"
            class="card-nota-corpo"
            placeholder="Nota"
            oninput="if(this.innerText === '') this.innerHTML = '';"
        >
            corpo 1
        </div>
        <div class="card-nota-tags">
            ${tag}
        </div>
    </div>

    <div class="card-botoes">
        <div class="ferramentas">
            <button
                class="botao-icone botao-icone-34 botao-trocar-cor"
            >
                <span
                    class="icone-18 icone-paleta-cores"
                ></span>
            </button>
            <button
                class="botao-icone botao-icone-34 botao-editar-tags"
            >
                <span class="icone-18 icone-lapis"></span>
            </button>
            <button
                class="botao-icone botao-icone-34 botao-mover-lixeira"
            >
                <span class="icone-18 icone-lixeira"></span>
            </button>
        </div>
    </div>
    </div>`
}