const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const csenha = document.getElementById('csenha');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
});

function checkInputs(){
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()
    const csenhaValor = csenha.value.trim()

    if(nomeValor === ''){
        errorValidation(nome, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(nome, 'Obrigado')
    }

    if(emailValor === ''){
        errorValidation(email, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(email, 'Obrigado')
    }

    if(senhaValor === ''){
        errorValidation(senha, 'Preencha esse campo, por gentileza')
    } else if(senhaValor.length < 8) {
        errorValidation(senha, 'Desculpe, mas sua senha é horrível')
    } else {
        sucessoValidation(senha, 'Obrigado')
    }

    if(csenhaValor === ''){
        errorValidation(csenha, 'Preencha esse campo, por gentileza')
    } else if (senhaValor !== csenhaValor ){
        errorValidation(csenha, 'Presta atenção, preenche esse trem direito')
    } else {
        sucessoValidation(csenha, 'Obrigado')
    }
}


function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'controle error'
}

function sucessoValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'controle success'

}