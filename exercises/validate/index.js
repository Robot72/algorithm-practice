const Node = require('./node');
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    console.log('Current Node', node.data, 'Min', min, 'Max', max)
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    
    return true;
}

/*
    10
    /  \
   5    15
  / \   /  \
 0  7  99  20 
 /
-1
const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(-1);
n.insert(20);
n.insert(7);
n.right.left = new Node(99);

console.log(validate(n));
*/

module.exports = validate;
