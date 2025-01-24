const inputField = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
    const nomeAmigo = inputField.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor insira um nome válido');
    } else if (listaAmigos.textContent.includes(nomeAmigo)) {
        inputField.value = '';
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = nomeAmigo;
        listaAmigos.appendChild(listItem);
    }
}


function sortearAmigo() {
    const amigos = Array.from(listaAmigos.children);

    if (amigos.length > 1) {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado].textContent;

        resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
    } else {
        alert('Adicione pelo menos um amigo antes de realizar o sorteio.');
    }
}

addButton.addEventListener('click', adicionarAmigo);