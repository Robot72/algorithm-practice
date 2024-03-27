// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    } 

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    /**
     * Not implemented 
     * @param {*} index 
     * @returns 
     */
    getAd(index) {
        return this.node;
    }

    removeAt(index) {
        if (!this.node) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
}

module.exports = { Node, LinkedList };
