const arr1 = [5, 68, 7, 8, 9, 2, 45]; // Define the array

function sum(...args) { // * Use the rest parameter to accept any number of arguments *
  let sum = 0; // Initialize the sum variable
  for (const arg of args) { // Iterate through each argument
    sum += arg; // Add the current argument to the sum
  }
  console.log(sum) // Output - 144
}

sum(...arr1) // Spread the array into individual arguments for the function


// ...arr1 spreads the elements of arr1 as individual arguments to the sum function.
// The ...args rest parameter inside the function collects all these arguments into an array-like object.
// The for...of loop iterates over each argument, adding it to the sum variable.
// The total sum is logged to the console.