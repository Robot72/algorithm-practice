const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

test('Validate something', () => {
  const n = new Node(10);

  n.insert(9);
  n.insert(11);
  n.insert(8);
  n.insert(12);
  n.insert(7);
  n.insert(13);
  n.insert(6);
  n.insert(14);
  n.insert(5);

  expect(validate(n)).toEqual(true);
});