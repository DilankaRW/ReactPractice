// Array destructuring: Unpacks elements from an array into variables.
// Object destructuring: Unpacks properties from an object into variables, with optional renaming using key: alias.
// Rest syntax (...): Collects remaining items into a new array or object.

// Array Destructuring

const arr1 = [1, 2, 3, 4, 5];
// let a = arr1[0];
// let b = arr1[1];
// console.log(a,b);

const [first, second, ...rest_arguments] = arr1;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest_arguments); // Output: [3, 4, 5]

// first is assigned the value of the first element (1).
// second is assigned the value of the second element (2).
// ...rest_arguments collects the remaining elements ([3, 4, 5]) into a new array.

// Object Destructuring

const obj1 = { one: 10, two: 20, three: 30, four: 40, five: 50 };
const { one: x, two, ...rest_obj } = obj1;

console.log(x); // Output: 10
console.log(two); // Output: 20
console.log(rest_obj); // Output: { three: 30, four: 40, five: 50 }

// one is renamed to x and assigned the value 10.
// two is assigned the value 20.
// ...rest_obj collects the remaining properties ({ three: 30, four: 40, five: 50 }) into a new object.