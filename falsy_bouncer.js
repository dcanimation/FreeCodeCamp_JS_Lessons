/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


//START
  function bouncer(arr) {
    return arr;
  }

  bouncer([7, "ate", "", false, 9]);

*/

var newArr;
function bouncer(arr) {
  function truth(value){
    if (value) {
      return value;
    };
  }
  arr = arr.filter(truth);
  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
