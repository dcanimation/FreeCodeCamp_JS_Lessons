/*
Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array.

//START
  function chunkArrayInGroups(arr, size) {
    // Break it up.
    return arr;
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);
 */
 
 function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var newIndex = 0;
  var newSize = size;
  var numArr = Math.floor(arr.length / size);
  if (arr.length % size > 0){
    numArr = numArr + 1;
  }
  for (var i = 0; i < numArr; i++){
    newArr.push(arr.slice(newIndex, newSize));
    newIndex = newIndex + size;
    newSize = newSize + size;
  }
  console.log(newArr);
  arr = newArr;
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
