class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.name, this.age);
  }

  toString() {
    return `${this.name} is ${this.age} years old.`;
  }
}

var p = new Person("John", 30);

console.log(p.toString());
// console.log(p.name);
// console.log(p.age);

// p.show();
