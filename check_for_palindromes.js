/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

//Start

  function palindrome(str) {
    // Good luck!
    return true;
  }

  palindrome("eye");
  
*/

function palindrome(str) {
  var regExp = /\W+|_/gi;         //create a variable to hold your regular expression. \W returns only non-alphanumeric characters
  var strArr = [];                //create an array to hold your split string and to reverse it
  var newStr;                     //creat a variable to hold your new string after joining the array
  str = str.replace(regExp, '');  //.replace replaces all results from our expression with nothing (empty quotes)
  str = str.toLowerCase();        //self explanatory
  strArr = str.split('');         //split our string into an array using each character as the delimiter
  strArr = strArr.reverse();      //reverse the order of the array
  newStr = strArr.join('');       //join the array back into a string without a separator
  console.log(str);
  console.log(newStr);
  if (newStr == str){             //if the original and new strings match return true
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    return false;
  }
  
}
