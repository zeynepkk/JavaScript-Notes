// comment 

/* multi-line
comment
*/

// undefined, null, boolean, string, symbol, bigint, number, object

var myName;

var myFirstName = "Zeynep";
var myLastName = "Akkaya";

/*
When JavaScript variables are declared, they have an initial value of undefined.
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
If you concatenate a string with an undefined variable, you will get a string of undefined.
*/

// camelCase

// When you use let, a variable with the same name can only be declared once.

// variables declared using const are read-only. 

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// i++ i-- i+= i-= i*= i/=

const doubleQuoteStr = "I am a \"double quoted\" string inside \"double quotes\".";

// \ escape character 
/*
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed
*/

const myName = "Zeynep";
const myStr = "My name is " + myName + " and I am well!";

// LENGTH ******
myName.length; // 6
myName[0]; // Z
myName[myName.length - 1] // p -> last letter

const myArray = ["city", 55];
myArray[0]; // city
myArray[0] = "country";

// PUSH
myArray.push(1);
myArray.push(["Istanbul", "Ankara"]);

// POP
const popped = myArray.pop();

// SHIFT
const shifted = myArray.shift();

// UNSHIFT
myArray.unshift("dark");

console.log(myArray); // [ 'dark', 55, 1 ]

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// TYPE COERCION
1 == '1' // true
"3" == 3  // true
3 === '3' // false

// TYPEOF
typeof 3 // number
typeof '3' // string

1 != true  // false
0 != false // false
3 !== '3' // true

// && AND 
// || OR

// if & else if & else 

switch (lowercaseLetter) { // ===
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
    default:
        console.log("Err");
        break;
}

switch (val) {
  case 1:
  case 2:
  case 3:
    console.log("1, 2, or 3");
    break;
  case 4:
    console.log("4 alone");
}

function isEqual(a, b) {
    return a === b;
}

function abTest(a, b) {
  if(a<0 || b<0) {
    return undefined;
}
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Object - properties

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"],
  5: "five"
};

delete cat[5];

// .hasOwnProperty(propname) -> true & false
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

const arr2 = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}

// do ... while

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}