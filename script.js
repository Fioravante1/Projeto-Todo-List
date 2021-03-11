const textoUsuario = document.querySelectorAll('#texto-tarefa');
const listaTarefa = document.querySelectorAll('#lista-tarefas');
const botãoCriar = document.querySelectorAll('#criar-tarefa');

function limparTexto() {
  const textoVazio = '';
  if (textoUsuario !== textoVazio) {
    textoUsuario.value = '';
  }
}

function criaTarefa() {
    const textoVazio = '';
    for (let index = 0; index < listaTarefa.length; index += 1) {
        if (textoUsuario !== textoVazio) {
            let novaPosição = document.createElement('li');
            listaTarefa.appendChild(novaPosição);
        }
    }
}



https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement