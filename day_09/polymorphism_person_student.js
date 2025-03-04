// Inheritance example
class Person {
  constructor(name) {
    this.name = name;
  }
  // method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, id) {
    // super keyword for calling the above
    // class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},
        Student ID: ${this.id}`;
  }
}

let student1 = new Student("Mukul", 22);
console.log(student1.toString());
