/* seleções */
const nome = document.querySelector('#nome').value;
const tp_logradouro = document.querySelector('#tp_logradouro').value;
const logradouro = document.querySelector('#logradouro').value;
const numero = document.querySelector('#numero_endereco').value;
const js_nome = document.querySelector('[js_nome]');

js_nome.innerHTML = `<p>Olá eu me chamo <span>${nome.value}</span></p>`;