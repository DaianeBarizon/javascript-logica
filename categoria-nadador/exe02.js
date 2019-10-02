/*
(2) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias:
infantil A = 5 - 7 anos infantil B = 8-10 anos juvenil A = 11-13 anos juvenil B = 14-17 anos adulto = maiores de 18 anos
*/

var idade = 5;
var categoria = "";
 
if ((idade >= 5) && (idade <= 7)) {
    categoria = "Está na categoria Infantil A";
} else if ((idade >= 8) && (idade <=10)) {
    categoria = "Está na categoria Infantil B";
} else if ((idade >= 11) && (idade <=13)) {
    categoria = "Está na categoria Juvenil A";
} else if ((idade >= 14) && (idade <=17)) {
    categoria = "Está na categoria Juvenil B";
} else if (idade >= 18) {
    categoria = "Está na categoria Adulto";
} else {
    categoria = "Idade inferior a primeira categoria";
}
console.log(categoria);