let nota1 = 6;
let nota2 = 4;
let nota3 = 6;
let nota4 = 5;

const nomeAluno = "Alice";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7){
    console.log("A aluna " + nomeAluno + " está aprovado")
}
if (media >= 5 && media < 7){
    console.log("A aluna " + nomeAluno + " está de se liga")
}
if (media < 5){
    console.log("A aluna " + nomeAluno + " está reprovado")
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);
