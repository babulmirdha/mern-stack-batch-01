function Person(name, job, yearOfBirth) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
}

console.log(Person.prototype);

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

console.log(Person.prototype);

var person1 = new Person("Mukul", "Developer", 1998);

person1.calculateAge();
