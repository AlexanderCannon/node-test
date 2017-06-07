const square = x => x * x;

console.log(square(9));

const user = {
  name: "Joseph",
  sayHi: () => {
    // console.log(arguments);
    console.log(`Hi ${user.name}`)
  },
  sayHiAlt() {
    // console.log(arguments);
    console.log(`Hi ${this.name}`)
  }
};


user.sayHi();
user.sayHiAlt(1,2,3);