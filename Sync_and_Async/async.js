// Asynchronous
// In an asynchronous environment, tasks can start and proceed independently of the main program flow. The main thread doesn’t wait for the asynchronous task to complete.

console.log("Start");
setTimeout(() => {
  console.log("Processing...");
}, 2000); // Executes after 2 seconds
console.log("End");

// Output:
// Start
// End
// Processing...