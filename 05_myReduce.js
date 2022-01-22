/**
  Implement your own version or Array.reduce()
  The function should take:
    an array: arr
    a function: f
    an initial value: init
  The function should output the new list with only the elements for which f(arr[i]) === true
  Example:
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 0)
    -> 15
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 5)
    -> 20
*/

const myReduce = (arr, f, init) => {
  if(arr.length === 0) {
    return init;
  } 
  else {
    const [first, ...rest] = arr;
    const newf = f(init, first);
    return myReduce(rest, f, newf);
  }
  // let result = [];
  // console.log(arr[0]);
  // console.log(f(arr[0]));
  // console.log(f(arr));
  // for (let i = 0; i < arr.length; i++){
  //   if (f(arr)[i]) {
  //     result.push(f(arr[i]));
  //   }
  // }

  // console.log(f(result));

  // return f(result);


}

module.exports = myReduce
