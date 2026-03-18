const readline = require('readline-sync')

let = corSemaforo = readline.question("Qual a cor do semaforo? ");
let = veiculoEmergencia = false;

if (veiculoEmergencia === true){
    console.log ("ALERTA: Ambulancia detectada! todos os sinais fechados. CRUZAMENTO LIVRE.");
 }
 else if (corSemaforo === "verde"){
    console.log ("Pode passar! siga com cuidado");
}
else if (corSemaforo === "amarelo"){
    console.log ("Atenção! Reduza a velocidade e prepare-se para parar");
}
else {
    console.log("PARE! Aguarde o sinal verde");
}


