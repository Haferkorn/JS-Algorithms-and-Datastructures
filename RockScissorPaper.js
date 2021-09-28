const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput=='rock'||userInput=='paper'||userInput=='scissors'){
    return userInput;
  }else {
    console.log('error');
  }
};
getUserChoice('rok');

function getComputerChoice(){
  let num =Math.floor(Math.random()*3);
  if(num==0){
    return 'rock';
  }else if (num==1){
    return 'paper';
  }else {
    return 'scissors';
  }

}

console.log(getComputerChoice());

function determineWinner (userChoice, computerChoice){
  if (userChoice===computerChoice){
    return 'tie';

  }else if (userChoice=='rock'){
    if (computerChoice=='paper'){
      return 'Computer won';
    }else if (computerChoice=='scissors'){
      return 'human won';
    }
  }
  
   else if(userChoice=='paper'){
    if (computerChoice=='scissors'){
      return 'computer won';
    }else if(computerChoice=='rock'){
      return 'human won';
    }
  }
  
   else if (userChoice=='scissors'){
    if(computerChoice=='rock'){
      return 'computer won';
    }else if( computerChoice='paper'){
       return 'human won';
    }  
  }
}
console.log(determineWinner('rock', 'scissors'));

function playGame(){
  let userChoice=getUserChoice('rock');
  let computerChoice=getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
