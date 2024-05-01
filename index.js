// Desevolver app que converte graus celcius para Farhenheit

import express from 'express'; //permite criar app web de forma rápida


const host = '0.0.0.0' //ip que representa todas as placas de rede do pc que está executando essa app
const app = express ();
const porta = 3000; //identifica o programa dentre outros que estão em execução no pc que estiver executando essa app
function retornaPaginaInicial (requisicao, resposta) {
    resposta.write ('<!DOCTYPE html>');
    resposta.write ('<html>');

    resposta.write ('<head>');
    resposta.write ('<meta charset = "utf-8">');
    resposta.write ('<title>Pagina inicial</title>');
    resposta.write ('</head>');
    
    resposta.write ('<body>');
    resposta.write ('<h1>Página Inicial</h1>');
    resposta.write ('</body>');
    resposta.write ('</html>');

    resposta.end ();
};

function enviarDinheiro (requisicao, resposta){
    //valor
    let  valorDesejado = requisicao.query.valor;
    if (!valorDesejado){
        valorDesejado = 0;
    }

    resposta.write ('<!DOCTYPE html>');
    resposta.write ('<html>');

    resposta.write ('<head>');
    resposta.write ('<meta charset = "utf-8">');
    resposta.write ('<title>Dar Dinheiro</title>');
    resposta.write ('</head>');
    
    resposta.write ('<body>');
    if (valorDesejado >0)
        resposta.write ('<h1>Dinheiro '+valorDesejado+'</h1>');
    else 
        resposta.write ('<h1>Valor não informado. Informe na url: http://localhost:3000/dinheiro?valor=[valorDesejado]</h1>');

    resposta.write ('</body>');
    resposta.write ('</html>');

    resposta.end ();
}


function converterCelsiusFirenheit (requisicao, resposta){
    let grausCelsius = parseFloat(requisicao.query.grausCelsius);
    let sequencia = parseInt(requisicao.query.sequencia);
    if (!sequencia){
        sequencia = 0;
    }
    resposta.write ('<!DOCTYPE html>');
    resposta.write ('<html>');

    resposta.write ('<head>');
    resposta.write ('<meta charset = "utf-8">');
    resposta.write ('<title>Converter Graus</title>');
    resposta.write ('</head>');
    
    resposta.write ('<body>');
    resposta.write ('<h1>Celsius para Feirenheit</h1>');
    
    if (grausCelsius){
        for (let i = 0; i<sequencia+1; i++){            
            const resultado = (grausCelsius*(9/5))+32;
            resposta.write ('<p>'+grausCelsius+' graus Celsius é igual a '+resultado+' graus Feireinheit</p>');
            grausCelsius += 1;
        }
    }
    else{
        resposta.write ('<p>Sem parametro para calcular na url</p>');
    }


    resposta.write ('</body>');
    resposta.write ('</html>');
    resposta.end ();

}
app.get ('/', retornaPaginaInicial);
app.get ('/dinheiro', enviarDinheiro);
app.get ('/conversor', converterCelsiusFirenheit);



//()=>{} função anonima conhecida como arrow function
app.listen(porta, host, ()=>{
    console.log("O servidor está executando em http://"+host+':'+porta);
} );


