"use strict";
//Elemento do DOM no qual o conteúdo será impresso
const contentBox = document.querySelector("#pageMainContent");

//Função para pular linha

function skipLine() {
    result.innerHTML += "</br>";
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content) {
  contentBox.innerHTML += content;
}

writePageContent(`
    <h1>Pontuação de Partida</h1>
    <!--Verificar Formulario na div abaixo-->
    <div">
        <div class="team1">
            <h2>Seu Time</h2>
            <label>Quantos jogos o seu time venceu? <input id="vitoriasInp" type="number"></label>
            <label>Quantos jogos o seu time empatou? <input id="empatesInp" type="number"></label>
            <label>E quantos o seu time perdeu? <input id="derrotasInp" type="number"></label>
        </div>
        <div class="team2">
            <h2>Time Adversário</h2>
            <label>Quantos jogos o Time Adversário venceu? <input id="vitoriasAdversarioInp" type="number"></label>
            <label>Quantos jogos o Time Adversário empatou? <input id="empatesAdversarioInp" type="number"></label>
            <label>E quantos o Time Adversário perdeu? <input id="derrotasAdversarioInp" type="number"></label>
        </div>
    </div>
    <button onclick="showResult()">Calcular</button>
    <div id="divResult">
        <p id="result"></p>
    </div>
`);

let vitoriasInp = document.querySelector("#vitoriasInp");
let empatesInp = document.querySelector("#empatesInp");
let derrotasInp = document.querySelector("#derrotasInp");
let vitoriasAdversarioInp = document.querySelector("#vitoriasAdversarioInp");
let empatesAdversarioInp = document.querySelector("#empatesAdversarioInp");
let derrotasAdversarioInp = document.querySelector("#derrotasAdversarioInp");

/////////////////////////////

//Calculando total de pontos vindos do input de cada time

function calcPontos(vitorias, empates, derrotas) {
  let totalPontos = Number(vitorias) * 3 + Number(empates) - Number(derrotas);

  return totalPontos;
}

function comparando(ptFinalNum, ptFinalAdvNum) {
  if (ptFinalNum < ptFinalAdvNum) {
    return `Nosso time está indo PIOR que o Time Adversário :(`;

  } else if (ptFinalNum > ptFinalAdvNum) {
    return `Nosso time está indo MELHOR que o Time Adversário hihihi `;
    
  } else if (ptFinalNum === ptFinalAdvNum) {
    return `Nosso time está EMPATADO com o Time Adversário `;
  }
}

function showResult() {
  let ptFinal = calcPontos(
    vitoriasInp.value,
    empatesInp.value,
    derrotasInp.value
  );
  let ptFinalAdv = calcPontos(
    vitoriasAdversarioInp.value,
    empatesAdversarioInp.value,
    derrotasAdversarioInp.value
  );
  const result = document.querySelector("#result");
  result.innerHTML = "";

  result.innerText += `Nosso time fez ${ptFinal} pontos!`;
  skipLine();
  result.innerText += `O time adversário fez ${ptFinalAdv} pontos`;
  skipLine();
  result.innerText += (comparando(ptFinal, ptFinalAdv));

  const divResult = document.getElementById("divResult");

  if (ptFinal < ptFinalAdv) {
    divResult.style.color  = "red";

  } else if (ptFinal > ptFinalAdv) {
    divResult.style.color = "green";
    
  } else if (ptFinal === ptFinalAdv) {
    divResult.style.color  = "black";
  }
}
