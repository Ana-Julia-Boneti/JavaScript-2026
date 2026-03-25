let compras = [" Morango", "banana", "pão", "Leite", "Queijo"];

console.log(compras)

console.log("O primeiro item da lista é " + compras[0]);
console.log("O ultimo item da lista é " + compras[4]);

compras[2] = "macarrão";
//console.log(compras[2]);
compras.push("Coca");
compras.push("Limão");
//console.log(compras);
compras.pop();
compras.pop();
compras.pop();
console.log(compras);

console.log(compras.length)