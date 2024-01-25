function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento != null && elemento.LocalName === 'audio') {
            elemento.play();    
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}
const ListaDeTeclas =  document.querySelectorAll('.tecla');

let contador = 0;
//para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =  `#som_${instrumento}`
    //template string 
    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Espaço')

        if (evento.code == 'Espaço'  || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
