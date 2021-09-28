
function repeatStringNumTimes(str, num) {
  let newStr="";
  for (let i=0; i<=num; i++){
    if (num>=0 && i<num){
      newStr+=str;
      console.log(newStr)
    }

  }

  return newStr;
}

// version using while

function reapeat2(str,num){

 while(num>0){
    newStr+=str;
    console.log(newStr);
    num--
  }return newStr
}


repeatStringNumTimes("abc", 3);
