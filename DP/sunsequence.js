
/**Problem for solving subsequence having max sum without taking adjusant element  **/

function getAns(arr , index){
    if(index >= arr.length){
        return  0
    }
     
    let take = arr[index] + getAns(arr , index+2)
    let notTake = 0 + getAns(arr, index +1)
     
    return  Math.max(take ,notTake)
}
function getAnsU(arr , index){
    if(index < 0){
        return  0
    }
    if(index==0){
        return arr[index]
    }
     
    let take = arr[index] + getAnsU(arr , index-2)
    let notTake = 0 + getAnsU(arr, index -1)
     
    return  Math.max(take ,notTake)
}


console.log(getAns([1,2,4] , 0) ) 
console.log(getAnsU([1,2,4] , 2) ) 

