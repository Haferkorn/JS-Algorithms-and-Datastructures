
function checkones(num){
  let chars="";
  if (num<4){
    for (let i=1; i<=num;i++){
       chars+="I"}
     return chars
  }
  else if(num==4){
    return "IV"
  }
  else if(num==5){
    return "V"
  }
  else if(num>5&&num<9){
    let base="V"
    let rest=checkones(num-5)
    return base+rest
  }
  else if (num==9){
    return "IX"
  }
}


function checktens(num){
  let chars="";
  if (num<4){
    for (let i=1; i<=num;i++){
    chars+="X"}
    return chars
  }else if(num==4){
    return "XL"
  }
  else if(num==5){
    return "L"
  }else if(num>5&&num<9){
    let base="L"
    let rest=checktens(num-5)
    return base+rest
  }else if(num==9){
    return "XC"
  }
}

function checkhundred(num){
  let chars="";
  if(num<4){
    for (let i=1; i<=num;i++){
    chars+="C"}
    return chars;
  }else if(num==4){
    return "CD";
  }else if(num==5){
    return "D";
  }else if(num>5 && num<9){
    let base="D"
    let rest=checkhundred(num-5)
    return base+rest;
  }else if(num==9){
    return "CM"
  }
}

function checkthousends(num){
    let chars="";
    for (let i=1; i<=num;i++){
    chars+="M"}
    return chars;
}



function convertToRoman(num) {
  //convert int to str
  let str=num.toString()
  let digits=[];
  let first="";
  let second="";
  let third="";
  let fourth="";
  
  //split str in digits
  for (let i=0; i<=str.length-1; i++){
    digits.push(str[i])}

  switch(digits.length){
    //one digits
    case 1:
    return checkones(digits[0]);
    break;
    //double digits
    case 2:
    first=checktens(digits[0]);
    second=checkones(digits[1]);
    return first+second
    break;
    //three digits
    case 3:
    first=checkhundred(digits[0])
    second=checktens(digits[1])
    third=checkones(digits[2])
    return first+second+third;
    break;
    //four digits
    case 4:
    first=checkthousends(digits[0])
    second=checkhundred(digits[1])
    third=checktens(digits[2])
    fourth=checkones(digits[3])
    return first+second+third+fourth;
  }
   
}


console.log(convertToRoman(1023));
