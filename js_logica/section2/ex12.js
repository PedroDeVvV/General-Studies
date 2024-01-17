let num = 100;

function isPrime(num) {
    if (num < 1) {
        console.log(`Um número primo precisa ser positivo`)
        return false
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
        console.log(`${i}`);
    }
}

isPrime(num)