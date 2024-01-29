let array = [3, 6, -2, -5, 7, 3]

const solution = (array) => {
    let prod1 = Math.max(...array);
    let arrayIndex = array.indexOf(prod1)

    let arr2 = []

    const newArray = array.map(function (valor, i, array) {
        if (valor !== prod1) {
            return arr2.push(valor)
        }
    })

    const prod2 = Math.max(...arr2);

    console.log(prod1 * prod2)
    return prod1 * prod2
}

solution(array) 