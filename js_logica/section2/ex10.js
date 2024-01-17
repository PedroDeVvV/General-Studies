
function sum(n) {

    let result = 0;
    for (let i = n; i >= 1; i--) {
        result += i;
    }
    console.log(`A soma dos números de 1 a ${n} é ${result}`)
}

sum(9);