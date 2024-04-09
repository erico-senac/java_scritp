let nome = prompt("Digite seu nome");
let idade =  parseInt(prompt("Digite sua idade"));
let sexo = prompt('Digite M para masculino ou F para feminino' )

if(sexo.toLowerCase() === 'm'){
    if (idade < 18){
        document.write(`${nome}, você escapou!`);
    } else if(idade === 18){
        document.write(`${nome}, deve servir ao TG`);
    }else {
        document.write(`${nome}, deve ter servido ao TG`);
    }    
}else{
    document.write(`${nome}, você é Menina.`);
}