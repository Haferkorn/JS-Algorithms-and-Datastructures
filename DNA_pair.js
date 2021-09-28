/**

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



**/


const DNA={
    G:"C",
    C:"G",
    A:"T",
    T:"A"
  }

function pairElement(str) {
  
  let arr=str.split("")
  let dna=arr.map(function(item){
    if(item=="G"){
      return [item,DNA.G];
    }else if(item=="C"){
      return [item,DNA.C];
    }else if(item=="A"){
      return [item,DNA.A];
    }else{
      return [item, DNA.T]
    }
  })
  
  return dna;
}

//console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
