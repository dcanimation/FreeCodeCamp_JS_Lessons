/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

//Starting Code
  function reverseString(str) {
    return str;
  }

  reverseString("hello");

*/

//My Code

function reverseString(str) {
  var strArr = [];            //create an array to store the split string
  strArr = str.split('');     //split the string by character by using empty quotes as the seperator and store in the array
  strArr = strArr.reverse();  //reverse the array
  str = strArr.join('');      //join the array back into a string using empty quotes as the seperator to remove the default commas
  
  console.log(str);           //console.log for testing
  return str;
}

reverseString("hello");
