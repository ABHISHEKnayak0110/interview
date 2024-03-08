let  coins = [1,2,5]
let  amount = 8


function toFindMinCoin(arrCoin , amount){

    arrCoin.sort((a,b) => a-b)

    let n = arrCoin?.length
    let minCoin = Infinity
    let amountR = amount
    let count =0
    for(let i = n-1 ; i>=0 ; i--){ 
        let coin = arrCoin[i]
        if(amountR >= coin){ 
         while(amountR >= arrCoin[i]){
            console.log("kk" , amountR)
             count++
             amountR = amountR - arrCoin[i]
         }
          minCoin = count > 0 && amountR == 0 ? Math.min(minCoin , count) : Infinity
        }

    }
  return  amountR > 0 ? -1 : minCoin
}

console.log(toFindMinCoin(coins , amount))
  

// [1,2,5]

// function getCoins(arr ,idx,  amount , count){

//     if(amount == 0){
//         console.log("count" , count)
//         return
//     }
//     if(idx < 0){
//         if(amount > 0){
//             console.log("-1")
//             return 
//         }
//         return 
//     }

//     if(arr[idx] <= amount){
     
//         count = count+1
//         amount = amount - arr[idx]

//         if(arr[idx] <= amount){
//             getCoins(arr, idx ,  amount , count)

//         }else{

//             getCoins(arr, idx-1 , amount , count)
//         }
       
//     }
//     else{

//         getCoins(arr, idx-1 , amount , count)
//     }
// }

// getCoins(coins ,coins?.length-1,  amount , 0)


// function sayHello(){
//     console.log("hello" , this.name)
// }

// let obj ={
//     name : "hari"
// }
// sayHello.call(obj ,)
// sayHello.apply(obj , [])



// // Input: nums = [1,1,1,2,2,3], k = 2
// // Output: [1,2]
let nums = [1,1,1,2,2,2,3,3,3,3,]
let k =2
function findMax(arr , k){
  let obj ={} // hash
  let ans =[] // ans 

  for(let i =0; i< arr.length ; i++){
    if(obj[arr[i]]){
       obj[arr[i]]  = Number(obj[arr[i]]) +1
    }
    else{
      obj[arr[i]] = 1 
    }
  }


  const result = Object.entries(obj)
  result?.sort((a, b) => {
    return b[1] - a[1]
     
   })
  //  const sortedObj = Object.fromEntries(result);
  // console.log(sortedObj , "hello" , result)
   let j = 0
  for(let data of result){
        if(j < k)  {
          ans.push(data[0])
          j++
        }
        else{
          break
        }
  }
  // console.log(ans , finalobj)
   return ans 
}

console.log("Ans: " , findMax(nums , k) )


// function asyncTask() {
//   return functionA()
//       .then((valueA) => functionB(valueA))
//       .then((valueB) => functionC(valueB))
//       .then((valueC) => functionD(valueC))
//       .catch((err) => logger.error(err))
// }

// async function asyncTask(){
//   try {
//     let valueA = await  functionA()
//     let valueB = await functionB(valueA)
//     let valuec = await functionC(valueB)
//     let valueD = await functionD(valuec)

//     return valueD

//   } catch (error) {
//     logger.error(err)
//   }
  
// }

// info send specific person data 


// let data =  {
//   name : "Abhishek", 
//   email : "ggdgs@gmail.com", 
//   age : 26
// }
//  res.json({...data})