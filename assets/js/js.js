/* seleções */
const nome = document.querySelector('#nome');
const tp_logradouro = document.querySelector('#tp_logradouro');
const logradouro = document.querySelector('#logradouro');
const numero = document.querySelector('#numero_endereco');
const js_nome = document.querySelector('[js_nome]');


const pega_imprimi = () => {
    if(nome.value != ""){
        let p = document.createElement('p');
        p.innerHTML = `Olá eu me chamo <span>${nome.value}</span>
        morro em <span>${tp_logradouro.value}</span> <span>${logradouro.value}</span>,
        <span>${numero.value}</span>`;
        js_nome.appendChild(p);
    } else {
        js_nome.innerHTML = "";
    }
};

const botao_enviar = document.getElementById('submit');
botao_enviar.addEventListener('click', pega_imprimi);