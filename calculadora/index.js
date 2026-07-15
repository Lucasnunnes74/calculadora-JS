let textCalculadora = document.querySelector('.calculadora input');
let limpar = document.querySelector('.limpar');
let apaga = document.querySelector('.apaga');
let resultado = document.querySelector('.igual');
let erro = document.querySelector('.texto-erro');
let numero = document.querySelectorAll('.numero');
let operador = document.querySelectorAll('.operador');
let valorConta = '';

const numeroAdd = () => {
    numero.forEach(botao => {
        botao.addEventListener('click', event => {
            valorConta = valorConta + event.target.textContent;
            atualizarDisplay();
            validaMsg();
        });
    });
}
const operadorAdd = () => {
    validaMsg();
    operador.forEach(botao => {
        botao.addEventListener('click', event => {
            if (valorConta) {
                if (!isNaN(valorConta.slice(-1))) {
                    valorConta = valorConta + event.target.textContent;
                    atualizarDisplay();
                    validaMsg();
                } else {
                    mostrarErro("você já adicionou o seu operador, adicione o valor que deseja fazer a sua conta.");
                }
            }
            else {
                mostrarErro('Adicione um numero antes de um operador.');
            }
        });
    });
}
const clearConta = () => {
    limpar.addEventListener('click', event => {
        validaMsg();
        valorConta = '';
        atualizarDisplay();
    })
}
const resultadoConta = () => {
    resultado.addEventListener('click', event => {
        if (textCalculadora.value !== '') {
            if (/[+\-*/]/.test(textCalculadora.value) && !isNaN(valorConta.slice(-1))) {
                validaMsg();
                textCalculadora.value = eval(valorConta);
                valorConta = textCalculadora.value;
            }
            else if (isNaN(valorConta.slice(-1))) {
                mostrarErro('Você inseriu um operador, mas não colocou o valor para calculo.');
            }
            else {
                mostrarErro('Sem operador no calculo, adicione para calculo.');
            }
        }
        else {
            mostrarErro('Não existe valores para calcular.');
        }
    })
}
const apagarUltimo = () => {
    apaga.addEventListener('click', event => {
        valorConta = valorConta.slice(0, -1);
        atualizarDisplay();
    })
}

const validaMsg = () => {
    console.log(erro.textContent)
    if (erro.textContent !== '') {
        mostrarErro('');
    }
}
const atualizarDisplay = () => {
    textCalculadora.value = valorConta;
}
const mostrarErro = (mensagem) => {
    erro.textContent = mensagem;
}
numeroAdd();
operadorAdd();
clearConta();
apagarUltimo();
resultadoConta();