// Merging Arrays with the Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // The spread operator (...) unpacks the elements of arr1 and arr2, effectively merging them into a single array.
console.log(arr3); // Output - [1, 2, 3, 4, 5, 6]

// Merging Objects with the Spread Operator
const obj1 = { first: 10, second: 20 };
const obj2 = { third: 30, fourth: 40 };
const obj3 = { ...obj1, ...obj2 }; // The spread operator (...) unpacks the properties of obj1 and obj2, combining them into obj3.
console.log(obj3); // Output - { first: 10, second: 20, third: 30, fourth: 40 }
