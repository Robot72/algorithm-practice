// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
    }


}

class LinkedList {
    constructor() {
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
