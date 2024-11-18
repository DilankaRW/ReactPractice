// Copying Arrays with the Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a shallow copy of arr1
arr1[0] = 18;
console.log(arr1, arr2);
// Output - [18, 2, 3] [1, 2, 3]

// Copying Objects with the Spread Operator
const obj1 = { one: 10, two: 20, three: 30 };
const obj2 = { ...obj1 }; // Creates a shallow copy of obj1
obj1["one"] = 15;
console.log(obj1, obj2);
// Output - { one: 15, two: 20, three: 30 } { one: 10, two: 20, three: 30 }
