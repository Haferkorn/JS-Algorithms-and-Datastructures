//Pig Latin is a way of altering English Words. The rules are as follows:

//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//- If a word begins with a vowel, just add way at the end.

const vowels=["a","e","i","o","u"];

function definesilb(str){
  let silb="";
  for (let i=0; i<str.length;i++){
    if (vowels.indexOf(str[i])==-1){
      silb+=str[i]
    }else
    {break}
  }return silb
}

function concatsilb(str){
  let silba=definesilb(str)
  return str
  .replace(silba,"")
  .concat(silba)

}

function translatePigLatin(str) {
  
  if(vowels.indexOf(str[0])!=-1){
    return str
    .concat("way")
  }else{
    let finalStr=concatsilb(str)
    return finalStr.concat("ay");

  }
  
  
}


//console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"))
