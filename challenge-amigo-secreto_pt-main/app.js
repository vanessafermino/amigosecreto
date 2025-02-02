
//principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    nomeAmigos = document.getElementById('amigo').value;
  
    if (nomeAmigos === '') {
      alert('Por favor, digite um nome válido.');
      return;
    }
  
    var li = document.createElement('li');
    li.innerHTML = nomeAmigos;
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('amigo').value = '';
  }
  
  function sortearAmigo() {
    var listaAmigos = document.getElementById('listaAmigos');
    var quantidadeDeAmigos = listaAmigos.children.length;
  
    if (quantidadeDeAmigos === 0) {
      alert('Adicione pelo menos um nome para realizar o sorteio.');
      return;
    }
  
    var indiceAleatorio = Math.floor(Math.random() * quantidadeDeAmigos);
    var amigoSorteado = listaAmigos.children[indiceAleatorio].innerHTML;
    document.getElementById(
      'resultado',
    ).innerHTML = `O amigo secreto é: ${amigoSorteado}`;
  }
  
  function limparCampo() {
    var listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
  
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    var inputAmigo = document.getElementById('amigo');
    inputAmigo.value = '';
  }


    