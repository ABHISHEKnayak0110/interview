function getKPermutation(n , k){
  let arr =[]
  let factorial = 1

  for(let i =1; i< n ; i++){
    arr.push(i)
    factorial*=i
  }
  arr.push(n)
  k = k-1
  let ans =""

while(true){
   ans += arr[parseInt(k/factorial)]
   let ind = parseInt(k/factorial)
   arr.splice(ind , 1)
    if(arr.length == 0){
        break
    }
     k = k % factorial
      factorial = Number(factorial / arr.length)

}

return ans 

}
console.log("Ans:" , getKPermutation(4, 17))