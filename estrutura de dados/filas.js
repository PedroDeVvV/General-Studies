function Queue() {
    let items = []

    this.enqueue = function (element) {
        //adiciona um novo item
        items.push(element);
    }

    this.dequeue = function () {
        //remove um item
        return items.shift();
    }

    this.front = function () {
        //retorna o primeiro elemento da fila
        return items[0]
    }

    this.isEmpty = function () {
        //verifica se a fila está vázia ou não
        return items.length === 0
    }

    this.size = function () {
        //retorna o tamanho da fila
        return items.length
    }

    this.print = function () {
        //imprimir a fila no console
        console.log(items.toString())
    }
}

let fila = new Queue();

fila.enqueue(' Pedro'); //Adiciona na ultima posição da fila
fila.enqueue(' Leana');//Adiciona na ultima posição da fila
fila.enqueue(' Gabi');//Adiciona na ultima posição da fila
fila.enqueue(' Ric');//Adiciona na ultima posição da fila
fila.enqueue(' André');//Adiciona na ultima posição da fila
fila.enqueue(' Bad');//Adiciona na ultima posição da fila
fila.print();
fila.dequeue(); //Remove o primeiro da fila
fila.print();
console.log(fila.front())// retorna o primeiro elemento da fila
console.log(fila.isEmpty())// retorna se a fila está vázia
console.log(fila.size())// retorna o tamanho da fila


function PrioriryQueue(element, priority) {
    let items = []

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)

        let added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }
        if (!added) {
            items.push(queueElement)
        }
    }
    this.dequeue = function () {
        return items.shift()
    }

    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i].element + ' ' + items[i].priority)
        }
    }
}

let pqueue = new PrioriryQueue();
pqueue.enqueue("Pedro", 2)
pqueue.enqueue("Leana", 1)
pqueue.enqueue("Bad", 4)
pqueue.enqueue("Sage", 3)
pqueue.print();


function hotPotato(nameList, num) {
    let queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    let eliminated = ''

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + ' was eliminated from the hot Potato game')
    }
    return queue.dequeue()
}

function getRamdonNumber(max) {
    return Math.floor(Math.random() * max)
}

// console.log(getRamdonNumber(90))

let names = ['Leana', 'Pedro', 'Ismael', 'Henrique', 'Pablo']
let winner = hotPotato(names, getRamdonNumber(100))
console.log("Winner is: ", winner)