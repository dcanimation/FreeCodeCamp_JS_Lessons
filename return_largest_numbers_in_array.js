/*

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//START

  function largestOfFour(arr) {

    return arr;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
*/

function largestOfFour(arr) {
  var newArr = [];
  var lrgNum = 0;
  for (var i = 0; i < arr.length; i++ ){
    for (var j = 0; j < arr[i].length; j++ ){
      if ( arr[i][j] > lrgNum ) {
        lrgNum = arr[i][j];
      }
    }
    newArr.push(lrgNum);
    lrgNum = 0;
    console.log(newArr);
  }
  arr = newArr;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
