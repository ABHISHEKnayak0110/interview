
function quickSort(arr , low , high){
if(low < high){
    let pivot = findPivot(arr , low , high)
    quickSort(arr , low , pivot-1)
    quickSort(arr , pivot+1 , high)
}

}
function findPivot(arr , low , high){
   let pivot = arr[low]
   let i = low 
   let j = high
   while( i < j){
      while(arr[i] <= pivot){
        i++
       }
       while(arr[j] > pivot){
        j--
       }

       i < j && swap(arr , i , j)

   }
   console.log("arr" , arr , low , j)
   swap(arr , low , j )

   return j
  
}
function swap(arr , i ,j){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp 
}
let arr = [1,3,4,8,2,4,0,10 , 1,3,5]
quickSort(arr , 0, 10)
console.log(arr)