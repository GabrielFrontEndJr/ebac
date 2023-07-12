const calcularMedia = (notas) => {
    let soma = 0;
    for (let c = 0; c < notas.length; c++) {
      soma += notas[c];
    }
  
    const media = soma / notas.length;
  
    return media;
  };
  
  const aprovacao = (notas) => {
    const media = calcularMedia(notas);
    const condicao = media >= 8 ? "aprovado" : "reprovado";
  
    return 'Média: ' + media + ' - Resultado: ' + condicao;
  };
  
  const contagemRegressiva = (numero) => {
    console.log(numero);
  
    const proximoNumero = numero - 1;
  
    if (proximoNumero > 0) {
      contagemRegressiva(proximoNumero);
    }
  };
  
  const formulario1 = document.getElementById('formulario-01');

  if (formulario1) {
    formulario1.addEventListener('submit', function(evento) {
      evento.preventDefault();
      evento.stopPropagation();
  
      // Verifica se o elemento possui a classe 'erro'
      if (this && this.getAttribute('class') && this.getAttribute('class').match(/erro/)) {
        return false;
      }
  
      const dados = new FormData(this);
      const notas = [];
  
      for (let key of dados.keys()) {
        const numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;
  
        if (!isNaN(numero)) {
          notas.push(numero);
        }
      }
  
      console.log(notas);
  
      const texto = aprovacao(notas);
  
      document.getElementById('resultado').innerHTML = texto;
    });
  }
  
  
  const validaCampo = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
      event.preventDefault();
  
      if (this.value === '') {
        document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      } else {
        document.querySelector('.mensagem').innerHTML = '';
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      }
    });
  };
  
  const validaCampoNumerico = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
      event.preventDefault();
  
      const numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, '') : this.value;
  
      if (numero !== '' && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
        document.querySelector('.mensagem').innerHTML = '';
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }
    });
  };
  
  const validaEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
      event.preventDefault();
  
      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
      if (this.value.match(emailValido)) {
        document.querySelector('.mensagem').innerHTML = '';
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }
    });
  };
  
  const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
  const camposNumericos = document.querySelectorAll('input.numero');
  const camposEmail = document.querySelectorAll('input.email');
  
  for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
  }
  
  for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
  }
  
  for (let emFoco of camposEmail) {
    validaEmail(emFoco);
  }
  