var numeroAleatorio = Math.floor(Math.random()*100)+1
//Input
var campoPalpite = document.querySelector('.campoPalpite')
var envioPalpite = document.querySelector('.envioPalpite')
//Paragrafos
var palpite = document.querySelector('.palpite')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('baixoOuAlto')
//Controle
var contagemPalpites = 1
var botaoReinicio

campoPalpite.focus()

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if (palpiteUsuario <= 0 || palpiteUsuario > 100) {
        window.alert('ERRO! Numero invalido em Digite seu Palpite.')
        contagemPalpites--
    } 
    if (contagemPalpites == 1) {
        palpite.textContent += `Palpites anteriores: ` 
    }

    palpite.textContent += palpiteUsuario + ' ..';
    if (palpiteUsuario == numeroAleatorio) {
        ultimoResultado.textContent = 'Voce acertou! PARABENS'
        ultimoResultado.style.backgroundColor = 'green'
        fimDejogo();

    }else if (contagemPalpites >= 10) {
        ultimoResultado.textContent = 'VOCÊ GASTOU TODAS AS SUAS CHANCES!'
        ultimoResultado.style.backgroundColor = 'black'
        ultimoResultado.style.color = 'white'
        fimDejogo();

    } else if (palpiteUsuario < numeroAleatorio) {
        ultimoResultado.textContent = 'Valor digita foi Baixo'
        ultimoResultado.style.backgroundColor = 'red'

    } else if (palpiteUsuario > numeroAleatorio) {
        ultimoResultado.textContent = 'Valor digita foi alto'
        ultimoResultado.style.backgroundColor = 'red'

    }

    contagemPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
    //window.alert(contagemPalpites) //-->debug
}

envioPalpite.addEventListener('click',conferirPalpite)

function fimDejogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Reiniciar'
    document.body.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    //Retonar a contagem Para um
    contagemPalpites = 1

    //
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }

    //Remove o Botão
    botaoReinicio.parentNode.RemoveChild(botaoReinicio)
    //Habilita o Campo e Envio de novo
    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()

    //Reseta a cor do campo Para branco
    ultimoResultado.style.backgroundColor = 'white'
    //Gera um novo Numero Aleatorio
    numeroAleatorio = Math.floor(Math.random()*100)+1
}