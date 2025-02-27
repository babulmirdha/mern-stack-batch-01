function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.show = function () {
  console.log(this.name, this.age);
};

var p = new Person("John", 30);

console.log(p);
console.log(p.name);
console.log(p.age);

p.show();

person1 = new Person("Mukul", 21);
person1.show();
