var aluno1 = {nome:"Daine",nota:4};
var aluno2 = {nome:"Barizon",nota:5};
var aluno3 = {nome:"Barros",nota:3};
var aluno4 = {nome:"Paula",nota:9};
var aluno5 = {nome:"Juliane",nota:10};

var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
var alunosAprovadosOrdemDesc = [];

function ordemDecrescente(a, b) {
    return a.nota < b.nota;
}

var ordenarDesc = alunos.sort(ordemDecrescente);
//console.log(ordenarDesc);
for(var i=0; i<ordenarDesc.length; i++){
    if(ordenarDesc[i].nota >= 5){
        alunosAprovadosOrdemDesc.push(ordenarDesc[i]);
    }
}

console.log(alunosAprovadosOrdemDesc);


