/*
(1) Faça um programa que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
*/

var yearsOld = Number(0);
var monthYearsOld = Number(9);
var dayYearsOld = Number(3);

//Pegando Data Atual
var data = new Date();

// Construindo Data de Nascimento
var a = data.setFullYear(data.getFullYear() - yearsOld);
var m = data.setMonth(data.getMonth() - monthYearsOld);
var d = data.setDate(data.getDate() - dayYearsOld);

//Setando as variavéis
var d = data.getDate() 
var m = data.getMonth()
var a = data.getFullYear();

//Mostrando Dias
var totalDays = (new Date() - new Date(a, m, d)) / (1000 * 60 * 60 * 24);
console.log(Math.round(totalDays) + " dias");
