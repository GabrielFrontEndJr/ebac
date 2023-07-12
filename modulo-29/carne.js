// Função para filtrar carnes por tipo de animal
function filtrarPorAnimal(carne, animal) {
  return carne.filter(item => item.animal.toLowerCase() === animal.toLowerCase());
}

// Função para filtrar as carnes selecionadas
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
  const resultado = filtrarPorAnimal(carnes, animalSelecionado);

  // Limpar lista de resultados
  resultadoElement.innerHTML = '';

  // Adicionar itens filtrados à lista
  resultado.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.nome;
    resultadoElement.appendChild(li);
  });
}


let carne = [
    { nome: 'Fraldinha', preco: 12, animal: 'Vaca' },
    { nome: 'Panceta', preco: 12, animal: 'Porco' },
    { nome: 'Coxinha', preco: 2, animal: 'Frango' },
    { nome: 'Maminha', preco: 20, animal: 'Vaca' },
    { nome: 'Costela', preco: 18, animal: 'Vaca' },
    { nome: 'Linguiça', preco: 8, animal: 'Porco' },
    { nome: 'Alcatra', preco: 25, animal: 'Vaca' },
    { nome: 'Picanha', preco: 30, animal: 'Vaca' },
    { nome: 'Lombo', preco: 15, animal: 'Porco' },
    { nome: 'Salsicha', preco: 5, animal: 'Porco' },
    { nome: 'Asa de Frango', preco: 10, animal: 'Frango' },
    { nome: 'Filé Mignon', preco: 40, animal: 'Vaca' },
    { nome: 'Bisteca', preco: 12, animal: 'Porco' },
    { nome: 'Coração de Frango', preco: 8, animal: 'Frango' },
    { nome: 'Cupim', preco: 22, animal: 'Vaca' },
    { nome: 'Paleta', preco: 16, animal: 'Porco' },
    { nome: 'Peito de Frango', preco: 9, animal: 'Advinha' },
    { nome: 'Carré', preco: 14, animal: 'Porco' },
    { nome: 'Rabo de Vaca', preco: 25, animal: 'Vaca' },
    { nome: 'Coxa de Frango', preco: 7, animal: 'Frango' },
  ];
