
// brut force approch
function inversionCount(arr){
    let count =0
   for(let i =0; i < arr.length-1 ; i++){
    for(let j = i+1 ; j < arr.length ; j++){
        if(arr[i] > arr[j]){
         count++
        }
    }
   }
   return count 
}

console.log(inversionCount([5,3,2,4,1]))

// --- by merge sort ---
// at the time of  sorting  right part 
// we have to store count = mid-left+1 
// and return on every recursion function 

