/* seleções */
const nome = document.querySelector('[nome]');
const curso = document.querySelector('[curso]');

/* uso das seleções */

nome.innerText = prompt('Qual seu nome?');
let nome_curso = prompt('Qual seu curso?');

curso.innerHTML = `<div style ="background-color: #456">${nome_curso}</div>`;