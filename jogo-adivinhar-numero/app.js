var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;
var icon;

var diferenca;
var textAltoOuBaixo;

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.display = 'block';
        ultimoResultado.style.color = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = 'FIM DE JOGO';
        ultimoResultado.style.fontSize = '3rem'
        ultimoResultado.style.color = 'black';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'ERRADO!';
        ultimoResultado.style.display = 'block';
        ultimoResultado.style.color = 'red';

        diferenca = Math.abs(palpiteUsuario - numeroAleatorio);

        if (palpiteUsuario < numeroAleatorio) {
            textAltoOuBaixo = 'baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            textAltoOuBaixo = 'alto!';
        }

        dicaPalpites(textAltoOuBaixo, diferenca);
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

function dicaPalpites(texto, diferenca) {

    if (diferenca > 50)
        baixoOuAlto.textContent = 'Seu palpite está muito ' + texto;

    else if (diferenca <= 50 && diferenca > 10)
        baixoOuAlto.textContent = 'Seu palpite está ' + texto;

    else if (diferenca <= 10)
        baixoOuAlto.textContent = 'Seu palpite está perto! Mas está ' + texto;
}

function configFimDeJogo() {
    palpites.style.display = 'none';
    campoPalpite.style.display = 'none';
    envioPalpite.style.display = 'none';

    botaoReinicio = document.createElement('button');
    icon = document.createElement('i');
    icon.classList.add('fas', 'fa-redo-alt', 'fa-3x');
    botaoReinicio.appendChild(icon);
    document.querySelector('main').appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    palpites.style.display = 'block';
    campoPalpite.style.display = 'block';
    envioPalpite.style.display = 'block';
    ultimoResultado.style.fontSize = '1.8rem'
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.display = 'none';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

envioPalpite.addEventListener('click', conferirPalpite);