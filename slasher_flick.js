/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()

//START
  function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr;
  }

  slasher([1, 2, 3], 2);
*/

function slasher(arr, howMany) {
  for(var i=0; i < howMany; i ++){
    arr.shift();
  }
  console.log(arr);
  return arr;
}
