class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Create (insert new node at the end)
    insert(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    // Read (get node at a given position)
    get(position) {
        if (position < 0 || position >= this.size()) {
            return null;
        }

        let count = 0;
        let current = this.head;
        while (count < position) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    // Update (modify node at a given position)
    update(position, data) {
        if (position < 0 || position >= this.size()) {
            return;
        }

        let count = 0;
        let current = this.head;
        while (count < position) {
            current = current.next;
            count++;
        }

        current.data = data;
    }

    // Delete (remove node at a given position)
    delete(position) {
        if (position < 0 || position >= this.size()) {
            return;
        }

        if (position === 0) {
            this.head = this.head.next;
        } else {
            let count = 0;
            let current = this.head;
            let previous = null;

            while (count < position) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
            current.next = null;
        }
    }

    // Size (get the number of nodes)
    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    // Print the linked list
    print() {
        let current = this.head;
        // while (current !== null) {
            console.log(current.data);
            // current = current.next;
        // }
    }
}


const linkedList = new LinkedList();

linkedList.insert("a")
linkedList.insert("b")
linkedList.insert("c")
linkedList.insert("d")
linkedList.insert("e")
linkedList.insert("f")
linkedList.insert("g")

linkedList.print()