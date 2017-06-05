/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

//START
  function destroyer(arr) {
    // Remove all the values
    return arr;
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

*/

function destroyer(arr) {
  var args = Array.from(arguments);
  var newArr = [];
  function destroy(value) {
    return value != args[i]; 
  }
  
  for( var i = 0; i < args.length; i++){
    if (i > 0){
      arr = arr.filter(destroy);
    }
    console.log(arr);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
