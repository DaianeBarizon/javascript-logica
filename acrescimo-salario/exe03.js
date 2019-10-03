/*
(3) Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo.
Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário.
Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento.
Mostre o salário antigo, o novo salário e a diferença. 
Código  Cargo       Percentual
101     Gerente     10%
102     Engenheiro  20%
103     Técnico     30%
*/

var salario = 92.000;
var codigo = 103;
var cargo;

switch(codigo) {
  case 101:
    cargo = "O cargo é Gerente";
    novoSalario = salario + ((salario * 10) / 100);
    break;
  case 102:
    cargo = "O cargo é Engenheiro";
    novoSalario = salario + ((salario * 20) / 100);
    break;
  case 103:
    cargo = "O cargo é Técnico";
    novoSalario = salario + ((salario * 30) / 100);
    break;
  default:
    cargo = "Outros cargos";
    novoSalario = salario + ((salario * 40) / 100);
}

console.log(cargo);
console.log("Salário antigo: " + salario);

var diferenca = novoSalario - salario;
console.log("Acréscimo de: " + parseFloat(diferenca.toFixed(2)));
console.log("Seu novo salário: " + novoSalario);
