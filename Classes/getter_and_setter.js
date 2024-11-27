class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  getArea() {
    return this.width * this.height;
  }

  // Getter - A getter is a method used to retrieve or "get" the value of a property. It allows you to access a property as if it were a simple variable, but behind the scenes, it executes a function.

  get area() {
    console.log(this.width, this.height);
    return this.width * this.height;
  }

  // Setter - A setter is a method used to update or "set" the value of a property. It allows you to control how a property value is assigned, often with validation or transformation logic.

  set area(newArea) {
    this.width = Math.sqrt(newArea);
    this.height = Math.sqrt(newArea);
  }
}

const newSquare = new Square(10);

console.log(newSquare.getArea()); // Output - 100

console.log(newSquare.area); // Output - 100

newSquare.area = 25;

console.log(newSquare.getArea()); // Output: 25
