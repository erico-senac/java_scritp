console.log("Observando a tipagem em JS");
console.log("Variáveis em JS");
console.log("Tecnicas de nomeação de Variáveis");
document.write('<p>Pascal Camel Snake Kebab</p>');
let mensagem_de_entrada = 'Olá seja bem vindo!';
console.log(mensagem_de_entrada);
mensagem_de_entrada = 2024;
console.log(mensagem_de_entrada);
mensagem_de_entrada = true;
console.log(mensagem_de_entrada);
mensagem_de_entrada = NaN;
console.log(mensagem_de_entrada);

mensagem_de_entrada = 'Olá seja bem vindo!';
console.log(typeof(mensagem_de_entrada));
mensagem_de_entrada = 2024;
console.log(typeof(mensagem_de_entrada));
mensagem_de_entrada = true;
console.log(typeof(mensagem_de_entrada));
mensagem_de_entrada = NaN;
console.log(typeof(mensagem_de_entrada));

/* Operadores aritméticos 
    + adição
    - subtração
    / divisão
    * multiplicação
    % resto (mod)
    ** potencia
*/

/* Operadores de comparação 
    >   maior
    >=  maior ou igual
    <   menor
    <=  menor ou igual
    !=  dirente
    ==  igual
    === igual (verificando até o tipo)
*/

let numero1 = prompt('Digite um número');
let numero2=10;

document.writeln('<p>o valor de numero1 é: '+numero1+'</p>');
document.writeln('<p>o valor de numero2 é: '+numero2+'</p>');
document.writeln(`<p>${numero1===numero2}</p>` );/* template string */

/*Operadores de incremento / auto incremento */
numero1++;//11
numero2--;//9
document.writeln(`<p>o valor de numero1 é: ${numero1++}</p>`);
document.writeln('<p>o valor de numero2 é: '+numero2+'</p>');

document.writeln(`<p>o valor de numero1 é: ${numero1}</p>`);

/*Operadores de incremento e atribuição
    +=
    -=
    /=
    *=
    %=
*/
numero1 += 2; // numero1 = numero1 + 2
/*Estruturas de controle, repetição */
if(numero1 > 20){
    document.write('Verdade');
}
else{
    document.write('Falso');
}

for(let cont = 0; cont < 10; cont++){
    document.writeln(`<p>cont = ${cont}<\p>`);
}
