"use strict";

//Elemento do DOM no qual o conteúdo será impresso
const contentBox = document.querySelector("#pageMainContent");

//Função para pular linha
function skipLine() {
  contentBox.innerHTML += "</br>";
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content) {
  contentBox.innerHTML += content;
}

//Capturando elementos do DOM para "imprimir" o header e footer
const headerBox = document.querySelector(".development");
const footerBox = document.querySelector("footer");

//Header
headerBox.innerHTML = `
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`;

//Footer
footerBox.innerHTML = `
<section class="footer_extra">
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on 02 | November | 2022 </p>
</section>
`;

////////////////////////////

let anoLimite = "";
let result = "";
let anoDeCopa = parseInt(
  prompt("Você gostaria de começar a contagem a partir de que ano?")
);

//Para escrever os anos que tem copa, contando apenas até o limite
function calc() {
  while (anoDeCopa <= anoLimite) {
    writePageContent(anoDeCopa + " tem copa!");
    anoDeCopa = anoDeCopa + 4;
    skipLine();
  }
}

//Conferir se os capos estão preenchidos com anos válidos
if (anoDeCopa < 1930) {
  //Se não,Pedir para recarregar e inserir novamente
  writePageContent(
    `Ops...A Copa do Mundo só rolou a partir de 1930 rsrs Que tal recarregar a página e digitar algum ano seguinte a esse?`
  );
} else {
  //se sim, captar o próximo parâmentro
  anoLimite = parseInt(
    prompt(
      "Descubra em que anos seguintes haverá copa! Digite um ano limite para comparação."
    )
  );

  if (anoLimite < anoDeCopa) {
    //se for um ano inválido...
    writePageContent(
      `Ops...Você precisa digitar um ano seguinte ao ano do início da contagem(${anoDeCopa}). Que tal recarregar a página e digitar algum ano seguinte a esse?`
    );
  } else {
    //se for um ano válido, executar a função para calcular entre esses anos
    calc();
  }

  //Atribuindo ao Result o ultimo valor que anoLimite teve;
  result = anoLimite;

  if (anoLimite >= result) {
    //Para quando o ano limite for maior ou igual a ele mesmo, imprimir a mensagem de finalização.
    writePageContent(`Ufa! Esses foram os anos de copa até ${anoLimite}`);
  }
}
