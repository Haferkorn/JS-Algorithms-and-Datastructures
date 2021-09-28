const range=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function defineFirstIndex(str){
  let index=range.indexOf(str[0])
  return index;
}
function defineLastIndex(str){
  let index=range.indexOf(str[str.length-1])
  return index;
}

function fearNotLetter(str) {
  let start=defineFirstIndex(str);
  //let end=defineLastIndex(str);
  for (let j=0; j<str.length; j++){
    if(str[j]!=range[start+j]){
      return range[start+j]
    }
    
  }
 
}

console.log(fearNotLetter("abcdefghjklmno")) //should return i
