// GLOBAL **********

// GLOBAL SCOPE -> let & const 

let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {

  let output = "";

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
  // myGlobal: 10 oopsGlobal: 5
}

// LOCAL **********

function myLocalScope() {
    const myVar = "Var ";
    console.log('inside myLocalScope', myVar);
}
myLocalScope(); // inside myLocalScope Var 

// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// ReferenceError: myVar is not defined

// UNDEFINED **********

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3); // undefined 
