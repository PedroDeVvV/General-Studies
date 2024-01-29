function operation(n1, n2, op = '+') {

    let result;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        default:
            console.log("Operador inválido");
    }

    console.log(result)
    return result;
}


operation(100, 2, '*')