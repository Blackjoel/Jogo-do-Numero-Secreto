1 - Crie uma fun��o que calcule o �ndice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que ser�o recebidos como par�metro.


function calcularIMC(altura, peso) {
    if (altura <= 0 || peso <= 0) {
        return "Altura e peso devem ser maiores que zero.";
    }
    var imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com duas casas decimais
}

// Exemplo ://

var altura = 1.75; // Altura em metros
var peso = 68; // Peso em quilogramas
var imc = calcularIMC(altura, peso);
console.log("O IMC �: " + imc);



2 - Crie uma fun��o que calcule o valor do fatorial de um n�mero passado como par�metro.

function calcularFatorial(numero) {
    if (numero < 0) {
        return "O n�mero deve ser n�o negativo.";
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    var fatorial = 1;
    for (var i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Exemplo de uso
var numero = 5; // N�mero para calcular o fatorial
var resultado = calcularFatorial(numero);
console.log("O fatorial de " + numero + " �: " + resultado);

O fatorial de 5 �: 120


3 - Crie uma fun��o que converte um valor em d�lar, passado como par�metro, e retorna o valor equivalente em reais.Para isso, considere a cota��o do d�lar igual a R$4, 80.
    
function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 4.80; // Cota��o do d�lar em reais
    if (valorEmDolar < 0) {
        return "O valor em d�lar deve ser n�o negativo.";
    }
    var valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2); // Retorna o valor em reais com duas casas decimais
}

// Exemplo de uso
var valorEmDolar = 100; // Valor em d�lar
var valorEmReal = converterDolarParaReal(valorEmDolar);
console.log("O valor de $" + valorEmDolar + " � equivalente a R$" + valorEmReal + " reais.");

 O valor de $100 � equivalente a R$480.00 reais.
undefined

4 - Crie uma fun��o que mostre na tela a �rea e o per�metro de uma sala retangular, utilizando altura e largura que ser�o dadas como par�metro.

function calcularAreaPerimetroSala(altura, largura) {
    if (altura <= 0 || largura <= 0) {
        console.log("Altura e largura devem ser maiores que zero.");
        return;
    }

    var area = altura * largura;
    var perimetro = 2 * (altura + largura);

    console.log("A �rea da sala �: " + area + " metros quadrados.");
    console.log("O per�metro da sala �: " + perimetro + " metros.");
}

// Exemplo de uso
var altura = 8; // Altura da sala em metros
var largura = 6; // Largura da sala em metros
calcularAreaPerimetroSala(altura, largura);

 A �rea da sala �: 48 metros quadrados.
 O per�metro da sala �: 28 metros.

5 - Crie uma fun��o que mostre na tela a �rea e o per�metro de uma sala circular, utilizando seu raio que ser� fornecido como par�metro.Considere Pi = 3, 14.
    
function calcularAreaPerimetroSalaCircular(raio) {
    const pi = 3.14;
    
    if (raio <= 0) {
        console.log("O raio deve ser maior que zero.");
        return;
    }

    var area = pi * raio * raio;
    var perimetro = 2 * pi * raio;

    console.log("A �rea da sala �: " + area + " metros quadrados.");
    console.log("O per�metro (circunfer�ncia) da sala �: " + perimetro + " metros.");
}

// Exemplo de uso
var raio = 8; // Raio da sala em metros
calcularAreaPerimetroSalaCircular(raio);

 A �rea da sala �: 200.96 metros quadrados.
 O per�metro (circunfer�ncia) da sala �: 50.24 metros.
undefined


6 - Crie uma fun��o que mostre na tela a tabuada de um n�mero dado como par�metro.

function mostrarTabuada(numero) {
    console.log("Tabuada do " + numero + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Exemplo de uso
var numero = 5; 
// N�mero para gerar a tabuada
mostrarTabuada(numero);

 Tabuada do 5:
 5 x 1 = 5
 5 x 2 = 10
 5 x 3 = 15
 5 x 4 = 20
 5 x 5 = 25
 5 x 6 = 30
 5 x 7 = 35
 5 x 8 = 40
 5 x 9 = 45
 5 x 10 = 50

