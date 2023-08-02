"use strict";

function Pessoa(nome) {
  this.nome = nome;
}
function Aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
  Pessoa.call(this, nome);
}
var alunos = [{
  "nome": "Gabriel",
  "nota": 7.5
}, {
  "nome": "Francesca",
  "nota": 5.5
}, {
  "nome": "Anderson",
  "nota": 8.8
}, {
  "nome": "Ana Beatriz",
  "nota": 9.5
}, {
  "nome": "Carol",
  "nota": 6.3
}, {
  "nome": "Franchesco",
  "nota": 7.9
}];
var alunosAprovados = alunos.filter(function (aluno) {
  if (aluno.nota >= 6) {
    return aluno;
  }
});
console.log(alunosAprovados);