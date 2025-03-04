class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static create(name, age) {
    return new User(name, age);
  }
}

var user1 = new User("Ajay", 30);
console.log(user1.name, user1.age);

var user2 = new User("Mukul", 21);
console.log(user2.name, user2.age);

var user3 = User.create("Mukul", 21);
console.log(user3.name, user3.age);

var user4 = User.create("Mukul", 21);
console.log(user4.name, user4.age);

/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static create(name, age) {
    return new User(name, age);
  }
}
const user = User.create("Ajay", 30);
console.log(user);
>*/
