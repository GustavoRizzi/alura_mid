
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Aqui tratamos a entrada do paramentro dentro do tocaSom, para caso alguém passe um elemento que não existe.

    // localName retorna o tipo do elemento, ex: button, audio...
    // podemos deixar só elemento ao invés de elemento != null
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto:
//let contador = 0;
//while (contador < listaDeTeclas.length) {
//contador = contador + 1(no final do laço)    


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //Constante retornando cada tecla: ex <button class="tecla tecla_pom">Pom</button>...
    const tecla = listaDeTeclas[contador]
    
    //Constante retornando a segunda classe do nosso elemento: ex tecla_pom
    const instrumento = tecla.classList[1];

    //template string criando uma string com uma constante dentro ex: #som_tecla_pom
    const idAudio = `#som_${instrumento}`

    console.log(idAudio);

    //cada tecla no laço vai executar a função tocasom ao clicar na tecla
    tecla.onclick = function (){
        tocaSom(idAudio)
    }

    //quando clicamos em uma tecla salvamos a informação dessa tecla dentro do "evento"
    tecla.onkeydown = function (evento) {

        //evento.code nos retorna a tecla apertada ( || significa OR/OU)
        if (evento.code === 'Space' ||  evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    //quando soltamos a tecla volta ao normal a estilização dos botoes revomento a classe ativa.
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}