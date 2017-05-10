/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

//START

  function repeatStringNumTimes(str, num) {
    // repeat after me
    return str;
  }

  repeatStringNumTimes("abc", 3);
 */
 
 function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num > 0){
    for (var i = 0; i < num; i++) {
      newStr = newStr + str;
    }
    str = newStr;
    console.log(str);
  } else if (num <= 0) {
    str = "";
    console.log(str);
  }
  return str;
}
