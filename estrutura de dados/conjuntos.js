function Set() {
    let items = {}

    this.add = function (value) {
        //adicionar um nvo item ao conjunto
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function (value) {
        //remove um item do conjunto
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false;
    }

    this.has = function (value) {
        //retorna se o valor existe ou não
        return items.hasOwnProperty(value)
    }

    this.clear = function (value) {
        //limpa items
        items = {}
    }

    this.size = function () {
        return Object.keys(items).length
    }

    this.values = function (value) {
        //retorna um array com todos os valores do conjunto
        let values = [],
            keys = Object.keys(items)
        for (let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function (otherSet) {
        let unionSet = new Set(),
            values = this.values()

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values();

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }
}


// let set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(5)
// console.log(set.size())
// console.log(set.values())
// set.delete(4)
// console.log(set.values())
// console.log(set.has(9))
// console.log(set.has(1))

let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

let unionAB = setA.union(setB)
console.log(unionAB.values)