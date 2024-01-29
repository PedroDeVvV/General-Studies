let arr = [0, 1, 1, 2, 3, 5];
let arr2 = [0, 1, 1, 2];
let arr3 = [0, 1, 1];

function fibonacci(arr, vezes) {
  let newArray = [...arr];
  for (let i = 0; i < vezes; i++) {
    let contador = 0;
    for (let i in newArray) {
      contador += 1;
    }

    let lastNumber = newArray[contador - 1];
    let penultimateNumber = newArray[contador - 2];
    let nextItemArray = lastNumber + penultimateNumber;
    newArray.push(nextItemArray);
  } 
  console.log(newArray);
  return newArray;
}

fibonacci(arr, 5);  
fibonacci(arr2, 8);
fibonacci(arr3, 4);
