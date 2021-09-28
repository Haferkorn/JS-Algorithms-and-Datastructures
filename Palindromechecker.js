
/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/


function toarr(str) {
  const teststr=str.toLowerCase();
  var letterarr=[];
  for (let i=0; i<teststr.length; i++){
    if (teststr[i].match(/[a-z0-9]/i)){
      letterarr.push(teststr[i])
    }
  }
  return letterarr;
}

function reversearr(arr){
  const testarr=arr;
  var reversearr=[];
  for (let i=testarr.length-1; i>=0; i--){
    reversearr.push(testarr[i])
  }
  return reversearr;
}
function palindrome(str){
  const orginalarr=toarr(str);
  const revarr=reversearr(orginalarr)
  //console.log(orginalarr)
  if (orginalarr.length==revarr.length){
    for (let i=0; i<orginalarr.length; i++){
    if (orginalarr[i]!=revarr[i]){
      return false;
      }
    }return true;
  }
}
