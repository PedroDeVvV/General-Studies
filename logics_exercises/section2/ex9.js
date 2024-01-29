let preco = 2.50
let idade = 35;

const calcTarifa = (preco, idade) => {

    let tarifa = 0;
    if (idade <= 6) {
        console.log("Tarifa gratuita, prossiga.")
        return 0;
    }
    else if (idade > 6 && idade <= 18) {
        tarifa = preco / 2;
        console.log(`A tarifa é R$ ${tarifa}.`);
        return tarifa;
    } else if (idade >= 60) {
        tarifa = preco * 0.3;
        console.log(`A tarifa é R$ ${tarifa}.`);
        return tarifa;
    } else {
        console.log(`A tarifa é R$ ${preco}.`);
        return preco;
    }
}

calcTarifa(preco, idade);