// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let new_str = "";
  for (let i = 1; i <= str.length; i++) {
     new_str += str[str.length - i];
  }
  return new_str;
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  if (num === 0 || num === 1){
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return -1;
  }
  let arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    arr3.push([arr1[i],arr2[i]]);
  }
  return arr3;
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  temparr1 = []
  temparr2 = []
  finalarr= []

  for (let i = 0; i < arr.length; i++) {
    temparr1.push(arr[i][0]);
    temparr2.push(arr[i][1]);
  }
  finalarr.push(temparr1, temparr2);
  return finalarr;
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  if (num === 0) {
    return str;
  }
  num = num % str.length;
  return str.substring(num + 1, str.length) + str.substring (0,num+1);
  // or return str.slice(num + 1) + str.slice (0, num + 1);
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  let today = new Date();
  let hour = today.getHours();
  let daytime = "";
  if (hour >= 12) {
    daytime = "night";
  }
  else {
    daytime = "morning";
  }
  return `Today's date is ${today.getMonth()} ${today.getDate()}th, ${today.getFullYear()}. It is ${hour-12}:${today.getMinutes()} in the ${daytime}.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
