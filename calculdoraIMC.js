function calculoIMC (peso, altura){
    let imc = peso / (altura ** 2);

    console.log("Seu IMC é," + imc);

    if (imc < 18.5){
        console.log("classificação: Abaixo do peso");
    }
    else if(imc >= 18.5 && imc <= 24.9){
        console.logt("Classificação: Peso normal");
    }
    else if(imc >= 25 && imc <= 29.9){
        console.log("Classificação: Sobre peso");
    }
    else {
        console.log("Classificação: obesidade");
    }
}
calculoIMC(70, 1.65)