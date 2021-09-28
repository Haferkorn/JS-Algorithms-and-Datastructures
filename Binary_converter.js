/**
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

**/



function converttodec(str){
  let decimal = parseInt(str, 2)
  return decimal;
}

function converttochar(dec){
  let char=String.fromCharCode(dec)
  return char;
}

function binaryAgent(str) {
 let newArr=str.split(" ");
 let decArr=[];
 let charArr=[];
 for (let i=0; i<newArr.length; i++){
   decArr.push(converttodec(newArr[i]))
 }
 for(let i=0; i<decArr.length; i++){
   charArr.push(converttochar(decArr[i]))
 }
 let finalstr=charArr.join("")
 return finalstr;
 
}



console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
