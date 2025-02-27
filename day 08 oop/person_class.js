class Person {
  
  //String name;
  //int age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.name, this.age);
  }
}

var p = new Person("John", 30);

console.log(p);
console.log(p.name);
console.log(p.age);

p.show();
