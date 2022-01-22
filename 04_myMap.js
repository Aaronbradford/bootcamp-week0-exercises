/**
  Implement your own version or Array.map()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list that is arr, but with the function applied to each element
  Try recursion rather than a for loop!
  Example:
    myMap([1, 2, 3], v => v * 2)
    -> [2, 4, 6]
 */

    const myMap = (arr, f) => {
      let result = [];
      
      if (arr.length === 0) {
        return result;
      }
    
      result.push(f(arr[0]), ...myMap(arr.slice(1), f));
    
      return result;
    
      // for (let i = 0; i < arr.length; i++) {
      //   result.push(f(arr[i]));
      // }
      // return result;
    }
    
    module.exports = myMap
    