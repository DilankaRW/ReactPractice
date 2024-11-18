function sum(a, b, c) {
  console.log(a + b + c);
}
// sum is a function that takes three arguments (a, b, and c).

const arr = [1, 2, 3];
const obj = { one: 10, two: 20, three: 30 };

sum(...arr); // Output - 6
sum(...Object.values(obj)); // Output - 60

// Object.values(obj) extracts the values of the object into an array: [10, 20, 30]
