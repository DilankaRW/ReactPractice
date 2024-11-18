this.name = "Sri Lanka";

const obj1 = {
  name: "Ceylon",
  normalfunction: function () {
    console.log(this.name); // Output : Ceylon
  },
  arrowfunction: () => {
    console.log(this.name); // Sri Lanka
  },
};

// Arrow functions do not have their own this. Instead, they inherit this from their defining scope.
// In this case, the defining scope of arrowfunction is the global context, where this.name is "Sri Lanka".

// console.log(this.name); // Output : Sri Lanka

obj1.normalfunction();
obj1.arrowfunction();
