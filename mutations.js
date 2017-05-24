/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

//START
function mutation(arr) {
  
  return arr;
}

mutation(["hello", "hey"]);

*/

function mutation(arr) {
  var baseArr = [];
  var compArr = [];
  var newCompArr = [];
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  baseArr = arr[0].split('');
  compArr = arr[1].split('');
  for (var i = 0; i < compArr.length; i++) {
    if ( baseArr.includes(compArr[i])) {
      newCompArr.push(compArr[i]);
      console.log(newCompArr);
    }
  }
  if (compArr.join() == newCompArr.join()){
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
  
  return arr;
}

mutation(["hello", "Hey"]);
