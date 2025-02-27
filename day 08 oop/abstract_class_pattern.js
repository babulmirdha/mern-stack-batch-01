class Shape {
  constructor(name) {
    console.log(this.constructor);

    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.name = name;
  }

  // Abstract method
  calculateArea() {
    throw new Error("Abstract method must be implemented");
  }

  // Common method, implemented
  display() {
    console.log(`${this.name} area: ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  //override
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// const shape = new Shape(); // Error: Cannot instantiate abstract class

const circle = new Circle(5);
circle.display(); // Circle area: 78.53981633974483

const rectangle = new Rectangle(4, 6);
rectangle.display(); // Rectangle area: 24
