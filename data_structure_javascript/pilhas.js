function Stack() {
    let items = []

    this.push = function (element) {
        //adiciona um elemento no array
        items.push(element);
    }

    this.pop = function () {
        // remover o item do topo da pilha
        return items.pop()
    }

    this.peek = function () {
        //devolve o elemento que está no topo da pilha
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        //informar se a pilha está vázia ou não
        return items.length === 0;
    }

    this.clear = function () {
        //limpa a pilha
        items = [];
    }

    this.size = function () {
        //informar o tamanho da pilha
        return items.length
    }

    this.print = function () {
        //imprime a pilha no console
        console.log(items.toString());
    }
}

// let pilha = new Stack();
// pilha.push(2)
// pilha.push(3)
// pilha.push(4)
// console.log(pilha.peek())
// console.log(pilha.isEmpty())
// pilha.print();

function dec2Bin(decNumber) {
    let restStack = [],
        rest,
        binaryString = ''

    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        console.log("RESTO: ", rest)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while (restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

// console.log('Resultado da conversão: ', dec2Bin(25))

//CONVERSÃO decimal para bases

function baseConverter(decNumber, base) {
    let restStack = [],
        rest,
        baseString = '',
        digits = '0123456789ABCDEF'

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}

console.log(baseConverter(123, 2))