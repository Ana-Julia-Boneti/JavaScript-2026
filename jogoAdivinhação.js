const readline = require('readline-sync')

console.log("Jogo de Adivinhação, chute um número de 1 a 10:");

const numeroSecreto = Math.floor(Math.random()*10 + 1);

let palpite = readline.questionInt("Qual é o seu palpite?");
let tentativas = 1;

while(palpite != numeroSecreto){
    if(palpite < numeroSecreto){
        console.log("O numero Secreto é maior que seu chute");
    }
else{
    console.log ("O numero secreto é menor que o seu chute");
}
palpite = readline.questionInt("Tente de novo");
tentativas++;
}
console.log(`Parabéns, você acertou o ${numeroSecreto} em ${tentativas} chutes`)