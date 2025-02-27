var p = {
  name: "John",
  age: 30,
  show: function () {
    console.log(this.name, this.age);
  },
};

p.show();

//Copy object
var d = Object.create(p);
d.name = "Jane";
d.age = 40;
d.show();

// d.name = "Jane";
// console.log(d.show());

// console.log(p === d);
