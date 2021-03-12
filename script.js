const listaTarefa = document.getElementById('lista-tarefas');
const botãoCriar = document.getElementById('criar-tarefa');
const elementoUsuario = document.getElementById('texto-tarefa');
/* Função criada com ajuda dos colegas dos Plantoes. Com a ajuda do racionio de Camila
 Arruda e Issac foi posivel desenvolver o trecho do codigo onde adiciona tarefas a lista.
 Referencias de sites no final do codigo. */

function corFundo(event) {
  const elementoClicado = event.target;

  console.log('Elemento clicado');
  if (elementoClicado.classList.contains('corFundo')) {
    console.log('O elemento clicado foi desativado');
    return elementoClicado.classList.remove('corFundo');
  }
  console.log(document.getElementsByClassName('corFundo'))
  const elementoAtivo = document.getElementsByClassName('corFundo')[0];
  if (elementoAtivo !== undefined) {
    elementoAtivo.classList.remove('corFundo');
    console.log('O elemento anteriormente ativo foi desativado');
  }
  console.log('O elemento clicado foi ativado');
  return elementoClicado.classList.add('corFundo');
}

function criaTarefa() {
  if (elementoUsuario.value === '') {
    alert('Adicione uma tarefa!');
    elementoUsuario.focus();
  } else {
    const novaTarefa = document.createElement('li');
    listaTarefa.appendChild(novaTarefa).innerHTML = elementoUsuario.value;
    novaTarefa.addEventListener('click', corFundo);
    elementoUsuario.value = '';
    elementoUsuario.focus();
  }
}

botãoCriar.addEventListener('click', criaTarefa);

// listaTarefa.addEventListener('click', corFundo);

/* https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement */
