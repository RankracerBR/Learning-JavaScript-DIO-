// Tipos primitivos

// boolean 
var vOuF = false;
console.log(typeof(vOuF));

//number 
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'augusto';
console.log(typeof(nome));

//function 
var funcao = function(){}
console.log(typeof(funcao));
//como declarar
/*var variavel = 'diana';
variavel = 'martine';
console.log(variavel);*/

/*let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);*/

const constante = 'diana';
console.log(constante)

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
//atribuição
var atribuicao = 'diana';

//comparação
var comparacao =  '0' == 0;
console.log(comparacao);

// Comparação Idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição 

var adicao = 1 + 1;
console.log(adicao);

//subtração 

var subtracao = 2 - 1;
console.log(subtacao);

//Multiplicação 
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//Divisão inteira 
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//Potenciação 
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

//Menor que 
var menorQue = 5 < 2;
console.log(menorQue);

//Maior ou igual a 
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//Menor ou igual

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual)

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao)