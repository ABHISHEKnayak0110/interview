
// pattern one take and not take 
function getPrintSub(index , ds , arr , n){
     if(index >=n){
        console.log(ds)
        return ;
     }
     ds.push(arr[index])
     getPrintSub(index+1 , ds , arr , n) // taken the index value
     ds.pop() 
     getPrintSub(index+1 , ds , arr , n) // not taken the index value 
}

// top to bottom 
// function getPrintSub(index , ds , arr , n){
//    if(index < 0){
//       console.log(ds)
//       return ;
//    }
//    ds.push(arr[index])
//    getPrintSub(index-1 , ds , arr , n) // taken the index value
//    ds.pop() 
//    getPrintSub(index-1 , ds , arr , n) // not taken the index value 
// }


let arr = [3, 2,1]
let ds =[]
let n =arr.length 
let idx = 0
getPrintSub(idx , ds , arr , n)