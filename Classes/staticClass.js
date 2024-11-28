class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  getArea() {
    return this.width * this.height;
  }

  static calArea(a, b) {
    return a * b;
  }
}

const square = new Square(10);

console.log(square.getArea()); // Output - 100
console.log(Square.calArea(5, 6)); // Output - 30