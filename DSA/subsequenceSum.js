// all subsequence 
function getSubSum(index , ds ,val ,  sum , arr){
    if(index >= arr.length ){
        if(sum == val ){
           console.log(ds)
        }

        return 
    }
    ds.push(arr[index])
     val = val + arr[index]
    getSubSum(index+1 , ds , val   , sum , arr)
     val = val - arr[index]
    ds.pop()
    getSubSum(index+1 , ds , val , sum , arr)
}
let arr = [1,2,1]
let sum =2 
let ds = []
getSubSum(0, ds , 0 , sum , arr)


// only one 

function getSubSumOne(index , ds ,val ,  sum , arr){
    if(index >= arr.length ){
        // condition satisfied 
        if(sum == val ){
           console.log(ds)
           return true
        }
        // not satisfied 
        return  false
    }
    ds.push(arr[index])
     val = val + arr[index]
    if(getSubSumOne(index+1 , ds , val   , sum , arr)){
        return true 
    }
     val = val - arr[index]
    ds.pop()
   if (getSubSumOne(index+1 , ds , val , sum , arr)){
    return true
   }
   return false
}
let arr1 = [1,2,1]
let sum1 =2 
let ds1 = []
getSubSumOne(0, ds1 , 0 , sum1 , arr1)


// if count needed

// only one 

function getSubSumCount(index ,val ,   sum , arr){
    if(index >= arr.length ){
        // condition satisfied 
        if(sum == val ){
           return 1
        }
        // not satisfied 
        return  0
    }

     val = val + arr[index]
     let left = getSubSumCount(index+1 , val   , sum , arr)
     val = val - arr[index]

 let right = getSubSumCount(index+1 , val , sum , arr)
   return left +right
}
let arr2 = [1,2,1]
let sum2 =2 

console.log("count" , getSubSumCount(0,0, sum1 , arr1))


function getAllSum(index , arr, sum ){
    let ds =[]

    if(index >= arr.length){
        ds.push(sum)
        return ds
    }
     ds = [...ds , ...getAllSum(index+1 , arr , sum + arr[index] , ds)]
    ds = [...ds , ...getAllSum(index+1 , arr , sum  , ds)] 
  return ds?.sort() 
}


console.log("Ans :", getAllSum(0 , [1,2,3] , 0 ))