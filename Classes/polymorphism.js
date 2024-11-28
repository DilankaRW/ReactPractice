class Animal {
  constructor() {
    console.log("an Animal is Created.");
  }

  makeSound() {
    console.log("Animals genaraly make sounds");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log("A Dog is Created");
  }

  //   The Dog and Cat classes override the makeSound() method from the Animal class, providing their specific implementation. When makeSound() is called on a Dog or Cat object, the overridden version is used.
  //   Polymorphism allows child classes to have specialized behavior while retaining the structure of the parent class.

  makeSound() {
    console.log("Dogs normaly Bark");
  }
}

class Cat extends Animal {
  constructor() {
    super();
    console.log("A cat is Created");
  }
  makeSound() {
    console.log("Cats Meow... meow..");
  }
}

const someAnimal = new Animal();
someAnimal.makeSound();

const tommy = new Dog();
tommy.makeSound();

const lassy = new Cat();
lassy.makeSound();

// Output
// An Animal is Created.
// Animals generally make sounds
// An Animal is Created.
// A Dog is Created
// Dogs normally bark
// An Animal is Created.
// A Cat is Created
// Cats meow... meow..
