
// Example
function ourRandomRange(ourMin, ourMax) {
  
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
  var innerSum = myMax - myMin + 1;  //I made this just so I could see the sum and figure out what was going on
  console.log( Math.floor(Math.random() * innerSum + myMin) );  //added to see the number being generated
  return Math.floor(Math.random() * innerSum + myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

//
