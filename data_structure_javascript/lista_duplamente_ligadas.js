function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null
        this.prev = null
    }

    let length = 0;
    let head = null;
    let tail = null;
    let previous = null;

    this.append = function (element) {
        //adiciona um elemento no final da lista
        let node = new Node(element),
            current

        if (head === null) {
            head = node
            tail = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }

            current.next = node
            tail = node
        }
        length++
    }

    this.insert = function (position, element) {
        //dll
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            current = head,
                previous,
                index = 0

            if (position === 0) {
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if (position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function (position) {
        //dll
        if (position > - 1 && position < length) {
            let current = head,
                previous,
                index = 0

            if (position === 0) {
                head = current.next

                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                current = tail
                tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function (element) {
        //remove o elemento 
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function (element) {
        //retorna a posição do elemento
        let current = head,
            index = 0

        while (current) {
            if (element == current.element) {
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function () {
        //retorna se está vázia ou não
        return length === 0
    }

    this.size = function () {
        //retorna o tamanho da instância
        return length
    }

    this.getHead = function () {
        return head
    }

    this.toString = function () {
        //converte em string 
        let current = head,
            string = ''

        while (current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function () {
        //imprime no console
        console.log(this.toString())
    }
}

let dll = new DoublyLinkedList()
dll.append("Leana");
dll.append("Pedro");
dll.append("Alana");
dll.insert(0, 'Reinaldo');
dll.insert(4, 'Adair');
dll.insert(5, 'Eder');
dll.print()
dll.removeAt(0)
dll.print()
dll.removeAt(1)
dll.print()
dll.removeAt(2)
dll.print()
