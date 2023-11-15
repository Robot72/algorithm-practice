let user = {
  name: 'Dami',
  age: 4,
  money: 780,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    if (hint == 'default') {
      return `My name is ${this.name}`;
    } else if (hint == 'number') {
      return this.age;
    } else {
      return 'User';
    }
  }
}

console.log(''+user)
console.log(+user)
console.log(user + 5)
console.log(user.toString())
console.log(user.valueOf())
