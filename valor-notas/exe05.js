/*
(5) Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível de notas de 100, 50, 10, 5 e 1
em que o valor lido pode ser decomposto. Escrever o valor lido e a relação de notas necessárias.
*/

var valor = 43;

var nota100 = valor / 100;
var valueInt100 = Math.trunc(nota100);
console.log(valueInt100 + " nota(s) de 100");

var totalNotas100 = valor % 100;
console.log("Resta " + totalNotas100);


var nota50 = totalNotas100 / 50;
var valueInt50 = Math.trunc(nota50);
console.log(valueInt50 + " nota(s) de 50");

var totalNotas50 = valor % 50;
console.log("Resta " + totalNotas50);


var nota10 = totalNotas50 / 10;
var valueInt10 = Math.trunc(nota10);
console.log(valueInt10 + " nota(s) de 10");

var totalNotas10 = valor % 10;
console.log("Resta " + totalNotas10);


var nota5 = totalNotas10 / 5;
var valueInt5 = Math.trunc(nota5);
console.log(valueInt5 + " nota(s) de 5");

var totalNotas5 = valor % 5;
console.log("Resta " + totalNotas5);


var nota1 = totalNotas5 / 1;
var valueInt1 = Math.trunc(nota1);
console.log(valueInt1 + " nota(s) de 1");

var totalNotas1 = valor % 1;
console.log("Resta " + totalNotas1);


var quantNotas = [
                    {nota: valueInt100, valor: 100, resto: totalNotas100},
                    {nota: valueInt50, valor: 50, resto: totalNotas50},
                    {nota: valueInt10, valor: 10, resto: totalNotas10},
                    {nota: valueInt5, valor: 5, resto: totalNotas5},
                    {nota: valueInt1, valor: 1, resto: totalNotas1}
                ];

console.log(quantNotas);