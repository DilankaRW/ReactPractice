// Regular functions have access to arguments.
function add(a, b, c) {
  return arguments;
}
console.log(add(10, 20, 30)); // Output: [Arguments] { '0': 10, '1': 20, '2': 30 }

// Arrow functions do not have their own arguments object.
// const add2 = (a, b, c) => {
//   return arguments;
// };
// console.log(add2(15, 25, 35)); // Output: ReferenceError: arguments is not defined

// Use the rest parameter (...args) in arrow functions to handle variable arguments.
const add2 = (a, b, c, ...args) => {
  return [a, b, c, ...args];
};
console.log(add2(15, 25, 35));
