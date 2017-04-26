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
  var newNum = 1;                         //create a starting point for our 'storage' variable
  for (var i = 1; i < num + 1; i++) {     //loop through the number to get all of the factors
    newNum = newNum * i;                  //multiply each subsequent factor by the next in the list
  }
  num = newNum;
  return num;
}

factorialize(5);
