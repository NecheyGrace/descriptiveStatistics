class Circle {
  // Class property (shared by all instances)
  static PI = 3.14159;

  // Constructor to create instances
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method (operates on individual instances)
  getArea() {
    return Circle.PI * this.radius * this.radius;
  }

  // Class method (operates on the class itself)
  static getCircumference(radius) {
    return 2 * Circle.PI * radius;
  }
}

// Accessing class properties and methods:
console.log(Circle.PI);
console.log(Circle.getCircumference(5));

// Creating instances and accessing instance properties and methods:
const circle1 = new Circle(7);
console.log(circle1.radius);
console.log(circle1.getArea());

// Accessing class properties and methods again:
console.log(Circle.PI);
