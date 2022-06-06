const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const csenha = document.querySelector('#csenha');
const cpf = document.querySelector('#cpf');
const cep = document.querySelector('#cep');
const tel = document.querySelector('#tel')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
});

function checkInputs(){
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()
    const csenhaValor = csenha.value.trim()
    const cpfValor = cpf.value.trim()
    const cepValor = cep.value.trim()
    const telValor = tel.value.trim() 

    if(nomeValor === ''){
        errorValidation(nome, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(nome, 'Obrigado')
    }

    if(cpfValor == '' || cpfValor.length > 14){
        errorValidation(cpf, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(cpf, 'Somente números')
    }

    if(cepValor == '' || cepValor.length > 9){
        errorValidation(cep, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(cep, 'Obrigado')
    }

    if(telValor == '' || telValor.length > 14){
        errorValidation(tel, 'Preencha esse campo, por gentileza')
    } else {
        sucessoValidation(tel, 'Obrigado')
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

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

function mTel(tel) {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}

function mCNPJ(cnpj){
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
}
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{5})(\d)/,"$1-$2")
    return cep
}
function mNum(num){
    num=num.replace(/\D/g,"")
    return num
}



