// Função para filtrar carnes
function filtrarCarne() {
    const radios = document.getElementsByName('animal');
    let animalSelecionado;

    // Verificar qual radio foi selecionado
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        animalSelecionado = radios[i].value;
        break;
      }
    }

    const resultadoElement = document.getElementById('resultado');

    // Filtrar carnes por tipo de animal
    const resultado = filtrarPorAnimal(carne, animalSelecionado);

    // Limpar lista de resultados
    resultadoElement.innerHTML = '';

    // Adicionar itens filtrados à lista
    resultado.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.nome;
      resultadoElement.appendChild(li);
    });
  }