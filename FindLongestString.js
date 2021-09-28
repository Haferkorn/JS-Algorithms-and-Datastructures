function findLongestWordLength(str) {
  let newStr=str.split(" ");
  let lengArr=[];
  
  for (let i=0; i<=newStr.length;i++){
    if (newStr[i]!=undefined){
      lengArr.push(newStr[i].length);
    }
    
  }
  return findWord(lengArr);
}

function findWord(arr){
  let num=Math.max(...arr);

  return num;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
