/* 
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
let newArr=[];
for (let k=0; k<n;k++){
  newArr.push(arr2[k])
  //console.log(newArr);
}

for (let i=0; i<arr1.length; i++){
  newArr.push(arr1[i]) 
  //console.log(newArr);
}
for (let j=1; j<arr2.length; j++){
  if (newArr.indexOf(arr2[j])==-1){
    newArr.push(arr2[j])
    console.log(newArr)
  }
 
}
  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
