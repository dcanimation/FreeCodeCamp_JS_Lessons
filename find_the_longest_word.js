/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

//START

function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
 */
 
 function findLongestWord(str) {
  var strArr = [];                            //array variable to hold the split string
  var ltrCount;                               //variable to hold the word length
  var maxCount = 0;                           //variable to have a starting to point to compare the two numbers and hold the new max length
  strArr = str.split(' ');                    //split the string into an array using a space as the delimiter
  for (var i = 0; i < strArr.length; i++){    //loop through the array to get the length of each string
    ltrCount = strArr[i].length;
    if (ltrCount > maxCount) {                //compare the current length to the max length
      maxCount = ltrCount;
    }
  }
  return maxCount;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//the above function does the job, but i can probably make it slightly simpler 
//with .sort and compare function then return the last value in the array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
