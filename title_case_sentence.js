/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//START

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/

function titleCase(str) {
  var strArr = [];                            //array to store the split str parameter 
  var wordArr = [];                           //array to store split strArr words
  var newStr;                                 //variable to stor our new caplitalized string
  strArr = str.split(' ');                    //split the provided sentence into individual words
  for (var i = 0; i < strArr.length; i++){    //loop through the array
    newStr = strArr[i].toLowerCase();         //convert the current word to lower case and store it
    wordArr = newStr.split('');               //split and store the current word in previously created array 
    wordArr[0] = wordArr[0].toUpperCase();    //convert the first letter in the letter array to capital
    newStr = wordArr.join('');                //join the letter array into a single string variable
    strArr[i] = newStr;                       //put our new capitalized string back into the original word array
    str = strArr.join(' ');                   //join the updated word array and store back in the str variable
  }
  return str;
}

titleCase("I'm a little tea pot");



