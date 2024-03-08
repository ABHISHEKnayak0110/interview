
//  step 1 :  find break point first  arr[i] < arr[i+1]
// step 2 : swap from last index value which is greater that break point
// after i arrange all remaining in sorted order

function nextPermutation(arr){

    let idx =-1 
    for(let i = arr.lenght-2 ; i>=0 ; i--){
        if(arr[i] < arr[i+1]){
            idx = i
            break
        }
    }
    if(idx === -1){
        return arr.reverse()
    }
  
 for(let i = arr.length -1 ; i >=0 ; i--){
    if(arr[i] > arr[idx]){
        swap(i , idx)
        break
    }
 }

 reverse(idx , arr.length-1)

return arr
 function swap(i , j){
    let temp = arr[i]
    arr[i] =  arr[j]
    arr[j] = temp 
 }
 function reverse( idx , i ){
   while(idx <= i){
     swap(idx , i)
     idx++
     i--
   }
 }

}

console.log(nextPermutation([1,3,2]))