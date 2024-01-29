let qtdTabuada = 10

function tabuada(num) {
    let mult;
    for (let i = 0; i <= qtdTabuada; i++) {
        mult = num * i;
        console.log(`${num} X ${i} = ${mult} `)
    }
}

tabuada(2)