function numRandom(max, min, qtd) {
  let arr = [];

  for (let i = 0; i < qtd; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
}

const func = numRandom(2, 100, 100);
console.log(func);
