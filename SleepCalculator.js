function getSleepHours(day){
  if (day=='monday'){
    return Math.floor(Math.random()*10);
  } else if(day==='tuesday'){
    return Math.floor(Math.random()*10);
  }else if(day==='wednesday'){
    return Math.floor(Math.random()*10);
  }else if(day==='thursday'){
    return Math.floor(Math.random()*10);
  }else if(day==='firday'){
    return Math.floor(Math.random()*10);
  }else {
    return 'It is weekend';
  }

}

function getActualSleepHours(){
   return getSleepHours('monday')
  +getSleepHours('tuesday')
  +getSleepHours('wednesday')
  +getSleepHours('thursday')
  +getSleepHours('firday'); 
}


 function getIdealSleepHours(){
   const idealHours=8;
   return idealHours*5;
 }

function calculateSleepDebt(){
  let acturalSleepHours=getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(acturalSleepHours>= idealSleepHours){
    return 'fine. you are sleeping: '+ (acturalSleepHours - idealSleepHours)+' more than you should';
  } else{
    return 'sleep more '+ (acturalSleepHours - idealSleepHours)+' less than you should';;
  }
}

console.log(calculateSleepDebt());
