/* seleções */
const nome = document.querySelector('#nome');
const curso = document.querySelector('[curso]');
const js_nome = document.querySelector('[js_nome]');

/* uso das seleções */

/* nome.innerText = prompt('Qual seu nome?');
let nome_curso = prompt('Qual seu curso?'); */

/* curso.innerHTML = `<div style ="background-color: #456">${nome_curso}</div>`; */

js_nome.innerHTML = `<p>Olá eu me chamo <span>${nome.value}</span></p>`