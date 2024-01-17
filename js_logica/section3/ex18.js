const palindromo = (frase) => {
    let reversedFrase = frase.split('').reverse().join('')
    //split coloca a string em um array, e divide seus caracteres
    //reverse reverte a ordem do array
    //join tranforma um array em uma string, no caso não colocamos nada para serem inseridas em seus espaçoes

    if (reversedFrase === frase) {
        console.log("É um palíndromo")
        return true;
    } else {
        console.log('Não é um palíndromo');  
        return false
    }
}

palindromo('osso')