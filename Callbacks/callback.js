function openFile(callback) {
  setTimeout(() => {
    console.log("File Opend");
    callback();
  }, 3000);
}

function addSomething() {
  console.log("Something Addeed to the File.");
}

function removeSomething() {
  console.log("Something Removed from the File.");
}

openFile(removeSomething);
openFile(addSomething);

// Output:
// File Opend
// File Opend
// Something Removed from the File.
// Something Addeed to the File.