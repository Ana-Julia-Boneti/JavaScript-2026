const readline = require('readline-sync')

let nome = readline.question("qual o seu nome?");
let idade = readline.questionInt("Qual sua idade?");
let temCupom= true;

let PRECO_CHEIO = 30;

console.log("Tentando comprar o ingresso...")

 if (idade >= 60 ){
    console.log (" seu cupom de desconto é de 50%");
 }
 else if (idade <18 && temCupom == true){
    console.log (`seu cupom é de 20% e seu ingresso custou ${PRECO_CHEIO * 0.8}`);
}
else{
    console.log ("Voce não tem cupom, seu valor sera de 30 reais");
}