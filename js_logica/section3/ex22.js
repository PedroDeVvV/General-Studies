const arr = [2, 2, 2, 3 ];

function identifyElementFrequency(arr) {
  let mostRepeat = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr.length; j++) {
      if(arr[i] === arr[j]) {
        mostRepeat.push(arr[i])
      }
    }
  }
}

identifyElementFrequency(arr);
