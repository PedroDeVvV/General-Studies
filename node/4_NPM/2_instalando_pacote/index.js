const _ = require('lodash')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 8, 9]

diff = _.difference(a, b)

console.log(diff)