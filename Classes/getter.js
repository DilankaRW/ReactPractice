class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _height;
  }

  getArea() {
    return this.width * this.height;
  }

  get area() {
    return this.width * this.height;
  }
}

const newSquare = new Square(10);

console.log(newSquare.getArea()); // Output - 100

console.log(newSquare.area); // Output - 100
