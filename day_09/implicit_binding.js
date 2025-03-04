const person = {
  name: "Ram",
  age: 22,
  greet: function () {
    return `Hello ${this.name}, you are ${this.age} years old`;
  },
};

console.log(person.greet());
