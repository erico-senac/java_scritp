/* seleções */
const nome = document.querySelector('#nome');
const tp_logradouro = document.querySelector('#tp_logradouro');
const logradouro = document.querySelector('#logradouro');
const numero = document.querySelector('#numero_endereco');
const js_nome = document.querySelector('[js_nome]');

function pegar_e_imprimir(){
    if(nome.value != ""){
        js_nome.innerHTML = `<p>Olá eu me chamo <span>${nome.value}</span>
        morro em <span>${tp_logradouro.value}</span> <span>${logradouro.value}</span>,
        <span>${numero.value}</span>
        </p>`;
    }
}

const botao_enviar = document.getElementById('submit');
botao_enviar.addEventListener('click',pegar_e_imprimir);