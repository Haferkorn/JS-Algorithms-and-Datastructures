function confirmEnding(str, target) {
  let leng=str.length; // 11
  let lengTarget=target.length; //4
  let finaleng=leng-lengTarget; //7 
  let counter=0;
  let arr=[];

  for (let i=finaleng; i<=leng;i++){
    if (str[i]==target[counter++])
      arr.push(true);
    else 
      arr.push(false); 
  }
  if (arr.indexOf(false)==-1){
    return true;
  }else 
  return false; 
}

confirmEnding("Open sesame", "sage");
