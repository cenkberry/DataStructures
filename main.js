class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {

        if (!this.tail) {
            this.head = new Node(value);
            this.tail = new Node(value);
        } 
        else {
            let oldtail = this.tail;
            this.tail = new Node(value);
            this.tail.prev = oldtail;
        }
    };

    prepend(value) {

        if (!this.head) {
            this.head = new Node(value);
            this.tail = new Node(value);
        } 
        else {
            let oldhead = this.head;
            this.head = new Node(value);
            oldhead.prev = this.head;
            this.head.next = oldhead;
        }
    };

    deleteHead() {
        if (!this.head) {
            return null;
        } 
        else {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } 
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
    };

    deleteTail() {
        if (!this.tail) {
            return null;
        } 
        else {
            let removeTail = this.tail;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = removeTail.prev;
                this.tail.next = null;
            }
            return removeTail.value;
        }
    };

    search(value){
        let current = this.head;

        while(current){
            if(current.value = value){
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend("A");
list.deleteHead();
list.deleteTail();
console.table(list);


