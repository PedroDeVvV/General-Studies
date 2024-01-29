const max = (n1, n2) => {
    if (n1 > n2) {
        console.log(`O ${n1} é maior que ${n2}`)
        return n1;
    } else if (n2 > n1) {
        console.log(`O ${n2} é maior que ${n1}`)
        return n2;
    } else {
        console.log('Os dois são iguais')
    }
}

max(36, 36)

const min = (n1, n2) => { 
    if (n1 < n2) {
        console.log(`O ${n1} é menor que ${n2}`)
        return n1;
    } else if (n2 < n1) {
        console.log(`O ${n2} é menor que ${n1}`)
        return n2;
    } else {
        console.log('Os dois são iguais')
    }
}

min(99, 113)