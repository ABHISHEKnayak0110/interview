let k = 5
let arr = [2,1,1,1,5] 

function find(arr , k ){
    
let  i =0 ;
let j =0 ; 
let sum = 0
let n = arr.length
let length = 0

while(j < n){
   sum += arr[j]


   while(i <= j  && sum > k){
     sum -= arr[i]
     i++
   }
   if( sum === k){
    length = Math.max(length , j-i +1)
   }
 j++
}
console.log(length)

}
find(arr, k)

