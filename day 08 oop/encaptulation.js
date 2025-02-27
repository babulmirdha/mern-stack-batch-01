class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  setAddress(value) {
    if (value == null || value == undefined) {
      throw new Error("Address is required");
    }

    this.address = value;
  }

  getAddress() {
    return this.address;
  }

  getDetails() {
    console.log(`Name is ${this.name},
		Address is: ${this.address}`);
  }
}

let person1 = new Person("Mukul", 21);

person1.address = "Mumbai"; // violation of encaptulation
console.log(person1.address); // violation of encaptulation

person1.setAddress("Dhaka"); // encaptulation

console.log(person1.getAddress()); // encaptulation

person1.setAddress("Faridpur, Bangladesh");

console.log(person1.getAddress());

// person1.getDetails();
