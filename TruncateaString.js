/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let strlen=str.length;
  let strSlice=str.slice(0,num)
  if (strlen>num){
    return strSlice.concat("...");
  }else
    return strSlice;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
