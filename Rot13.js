/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


var numDict={
  "A":1,
  "B":2,
  "C":3,
  "D":4,
  "E":5,
  "F":6,
  "G":7,
  "H":8,
  "I":9,
  "J":10,
  "K":11,
  "L":12,
  "M":13,
  "N":14,
  "O":15,
  "P":16,
  "Q":17,
  "R":18,
  "S":19,
  "T":20,
  "U":21,
  "V":22,
  "W":23,
  "X":24,
  "Y":25,
  "Z":26}

function conv(str){
   var message=[]
  for (let i=0; i<str.length; i++){
    if (str[i].match(/[a-z]/i)){
      //console.log(numDict[str[i]])
      if (numDict[str[i]]>13){
        message.push(numDict[str[i]]-13);
      }else{
        let num=13-numDict[str[i]];
        message.push(26-num);
      }
      
    }else{
      message.push(str[i])
    }
    
  }
  return message;
}

 function getKeyByValue(object, value) {
            for (var prop in object) {
                if (object.hasOwnProperty(prop)) {
                    if (object[prop] === value)
                    return prop;
                }
            }
        }

function rot13(str) {
  let message=conv(str);
  console.log(message)
  let decryp=""
  for (let i=0; i<message.length; i++){
    if(typeof message[i]=="number"){
      decryp+=getKeyByValue(numDict, message[i]);
    }else{
      decryp+=message[i]
    }
  }
  return decryp;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"))
