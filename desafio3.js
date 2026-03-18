const readline = require('readline-sync')

let = nomeHeroi = readline.question("Digite o nome do seu heroi: ")
let = pontoXp = readline.questionInt(" quantos pontos voce fez? ");

if ( pontoXp < 100){
    categoria = ("A categoria é Iniciante");
 }
 else if (pontoXp < 500){
    categoria = ("A categoria é Guerreiro.");
}
else if (pontoXp < 1000){
    categoria = ("A categoria é Mestre.");
}
else {
    categoria =("Lenda viva");
}

console.log(`O herói ${nomeHeroi} possui ${pontoXp} de experiência e seu rank atual é: ${categoria}`);