
function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }

    return arr
}
// let ans = selectionSort([13,46,24,52,20,9 , 1])
// console.log(ans)

function bubbleSort(arr) {

    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// let ans = bubbleSort([13,46,24,52,20,9 , 1])
// console.log(ans)


function insertionSort(arr){
  let n = arr.length
   for(let i =1 ; i < n ; i++){
    let key = arr[i]
    let j = i-1
     while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j]
        j--
     }
     

      arr[j+1] = key
   }
 
 return arr
}
// let ans = insertionSort([13,46,24,52,20,9, 1])
// console.log(ans)



function mergeSort(arr){
    console.log("jk" , 0 , arr.length-1)
     sort(arr, 0, arr.length-1)
     return arr
   }
   
   function sort(arr , l , h ){
   
       if(l < h){
         let m = parseInt((l+h)/2)
       sort(arr , l , m)
       sort(arr ,m+1 , h )
       merge( arr , l ,m ,h)
       }
   }
   
   function merge(arr , l , m ,h){
       let n1 = m-l+1
       let n2 = h-m
       let larr = []
       let rarr = []
   
   
       for(let i = 0 ; i < n1 ; i++){
           larr[i] = arr[l+i]
       }
       for(let i = 0 ; i < n2 ; i++ ){
           rarr[i] = arr[m+1+i]
       }
       let k = l
       let i =0 
       let j =0
   
       while(i < n1 && j < n2){
           if(larr[i] <= rarr[j]){
               arr[k] = larr[i]
               i++
           }
           else{
               arr[k] = rarr[j]
               j++ 
           }
           k++
       }
       while(i < n1){
           arr[k] = larr[i]
           i++
           k++
       }
       while(j < n2){
           arr[k] = rarr[j]
           j++
           k++
       }
   }
   
//    let ans = mergeSort([4,2,1,6,7])