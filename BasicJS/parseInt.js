const a = parseInt("007"); // 7

// If the first character in the string can't be converted into a number, then it returns NaN

function convertToInteger(str) {
    return parseInt(str);
}

// It takes a second argument for the radix, which specifies the base of the number in the string.
// The radix can be an integer between 2 and 36.

const b = parseInt("11", 2); // 3 

function convertFromBinary(str) {
    return parseInt(str, 2);
}