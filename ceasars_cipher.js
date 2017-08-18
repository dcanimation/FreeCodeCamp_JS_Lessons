/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//START

  function rot13(str) { // LBH QVQ VG!

    return str;
  }

  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  
*/

function rot13(str) { // LBH QVQ VG!
  var wrdStr;
  var newStr = [];
  var key13;
  str = str.split(" ");
  for(var i = 0; i < str.length; i++){
    wrdStr = str[i].split('');
    console.log(wrdStr);
    for(var j = 0; j < wrdStr.length; j++){
      key13 = wrdStr[j].charCodeAt(0);
      if (key13 >= 65 && key13 <= 91) {
        key13 = key13 - 13;
        if (key13 < 65){
          key13 = key13 + 26;
        }
      }
      wrdStr[j] = String.fromCharCode(key13);
    }
    wrdStr = wrdStr.join(''); 
    newStr.push(wrdStr);
  }
  str = newStr.join(' ');
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
