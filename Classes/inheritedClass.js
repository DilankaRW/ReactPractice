class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    console.log("A new Person Created");
  }
}

class Programmer extends Person {
  constructor(_name, _age, _language) {
    super(_name, _age); // Calls the constructor of the parent class
    // this.name = _name;
    // this.age = _age;
    this._language = _language;
  }

  code() {
    return `${this.name} is a programmer &
    knows ${this._language}`;
  }
}

const john = new Person("john", "32");

const jane = new Programmer("jane", "28", "JavaScript");
console.log(jane.code());

// Output
// A new Person Created
// A new Person Created
// Jane is a programmer and knows JavaScript
