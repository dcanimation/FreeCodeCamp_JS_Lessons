/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/* 
Starting Point

  function factorialize(num) {
    return num;
  }

  factorialize(5);
 
 */
 
function factorialize(num) {
  var numArr = [];
  var newNum = 1;
  var factor;
  for (var i = 1; i < num + 1; i++) {
    numArr.push(i);
  }
  for (var j = 0; j < numArr.length; j++) {
    newNum = newNum * numArr[j];
    console.log(newNum);
  }
  num = newNum;
  console.log(num);
  return num;
}

factorialize(5);
