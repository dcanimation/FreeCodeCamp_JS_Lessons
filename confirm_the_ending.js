/*

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.

//START

  function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str;
  }

  confirmEnding("Bastian", "n");
  
*/

function confirmEnding(str, target) {
  var strLen;
  var targetLen;
  var newStr;
  strLen = str.length;
  targetLen = target.length;
  newStr = str.substring((strLen - targetLen), strLen);   //substring returns the value of the string index from the index start to index end
  console.log(newStr);
  if (newStr == target) {
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    return false;
  }
  
}

confirmEnding("Bastian the boy", "the boy");
