/*
(4) A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber
quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de
poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com
base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular
os dados solicitados.
*/

var quantPao = 1000;
var quantBroa = 100;

function totalVendaPao() {
    const unidPao = 0.12;
    var quantTotalPao = (quantPao * unidPao);
    return parseFloat(quantTotalPao.toFixed(2));
}

function totalVendaBroa() {
    const unidBroa = 1.50;
    var quantTotalBroa = (quantBroa * unidBroa);
    return parseFloat(quantTotalBroa.toFixed(2));
}

function somarTotalItens(){
    return totalVendaPao() + totalVendaBroa();
}

function investirPoupanca(){
    var diferencaInvestir = somarTotalItens() * 10 / 100;
    return parseFloat(diferencaInvestir.toFixed(2));
}

console.log("R$ " + somarTotalItens() + " vendido no dia");
console.log("Deve insvestir: R$ " + investirPoupanca() + " em sua poupança");