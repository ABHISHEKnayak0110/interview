
function getMaxsum(arr){
    let prev = arr[0]
    let prev2 = 0

    for(let i =1 ; i< arr.length ; i++){
       let take = arr[i] 
       i > 1 && (take += prev2) // for not taking negative case (i-2)
       let notTake = 0 + prev
     let curr = Math.max(take , notTake)
     prev2 = prev
     prev = curr
}
return prev
}

function circularHouseRobber(arr){
    let lastRemoved = arr.slice(0, arr.length-1)
    let firstRemoved = arr.slice(1, arr.length)
   return Math.max(getMaxsum(lastRemoved) , getMaxsum(firstRemoved))
}
console.log("Ans " , circularHouseRobber([1,2,4]))


