// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    /**
     * Add child node
     * @param {any} data 
     */
    add(data) {
        this.children.push(new Node(data));
    }

    /**
     * Remove child node 
     * @param {any} data 
     */
    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
       this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children)
            fn(node);
        }
    }

    traverseDF() {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children)
            fn(node);
        }
    }
}

/*
//example of the breadth first traversal
const node1 = new Node('CEO')
node1.children.push(new Node('CTO'))
node1.children.push(new Node('CMO'))
node1.children.push(new Node('COO'))
node1.children[0].children.push(new Node('VP 1'))
node1.children[0].children.push(new Node('VP 2'))
node1.children[1].children.push(new Node('VP of sales'))
node1.children[1].children.push(new Node('VP of marketing'))

const tree = new Tree();
tree.root = node1;
tree.traverseBF((node) => {
    console.log('POSITION', node.data)
})
*/

module.exports = { Tree, Node };
