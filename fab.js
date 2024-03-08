 // fabunaci

// function generateFab(n){
//     let a = 0
//     let b =1
//     let c 
//     if(n <=2){
//       console.log(n)
//     }
//     for(let i =2 ; i < n ; i++){
//          c= a+b
//          a= b 
//          b =c
//     }
//   console.log(c)
// }
// generateFab(2)

//Anagram 
// function checkAnagram(s1, s2){
//     if(s1?.length !== s2?.length) return false
//     return s1.split("").sort().join("") === s2.split("").sort().join("")
// }
// console.log(checkAnagram("cat" , "atc"))


// remove dublicate \

function removeDubliucate(arr){
  let i =0; 
  for(let j=1; j< arr.length ; j++){
   if(arr[i] !== arr[j]){
    i++
    arr[i] = arr[j]
   }
  }
  console.log("gh" , arr.slice(0, i+1))

}
removeDubliucate([1,1,2])