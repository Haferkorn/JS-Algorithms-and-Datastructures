function factorialize(num) {
  let fac=1
  for (let i=1; i<=num; i++){
    if (num==0|| num==1){
      let fac=1;
    }else if (num>0){
      fac*=i;
      console.log(fac)
    }
  }
  return fac;
}
// or using a while loop 
function whilefac(num){
  let counter=1;
  let fac=1;
  while(counter<=num){
    fac*=counter;
    counter++
    console.log(fac);
  }return fac;
}

factorialize();
whilefac(10);
