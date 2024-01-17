let array = [-23, 4, -3, 8, -12]
let array2 = [3, 6, -2, -5, 7, 3]

const solution = (array2) => {
   let maxVal = null;
   let valTemp = null;
   for(let i = 0; i < array.length - 1; i++) {
       valTemp = array[i] * array[i + 1];
       if(valTemp > maxVal) {
           maxVal = valTemp;
       }
   }
   console.log(maxVal)
   return maxVal;
}

solution(array) 