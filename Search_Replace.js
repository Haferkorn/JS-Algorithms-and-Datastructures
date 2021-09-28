/**
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
**/

function checkUpper(chars){
  if (chars[0]==chars[0].toUpperCase()){
    return "UPPER"
  }else {
    return "LOWER"
  }
}

function toUpper(chars){
  let letter=chars[0].toUpperCase();
  let word=chars.slice(1,);
  let later=letter+word;
  return later;

}

function toLower(chars){
  let letter=chars[0].toLowerCase();
  let word=chars.slice(1,);
  let later=letter+word;
  return later;
}

function myReplace(str, before, after) {
  let wordCase =checkUpper(before)
  if(wordCase==="LOWER"){
    let second=toLower(after);
    return str.replace(before,second)
  }else{
    let second=toUpper(after);
    return str.replace(before,second)
  }
}


//console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("His name is Tom", "Tom", "john"))
