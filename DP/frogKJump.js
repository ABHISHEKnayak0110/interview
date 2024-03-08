
// recurstion  and memoization
function frogJump(arr , index ,dp, k ){

    if(index ===0){
     return 0
    }
   
    if(dp[index]){
     return dp[index]
    }
    let ans = 999999999999999 // max
    for(let i =1 ; i <= k ; i++){
        let left =  index>=i && frogJump(arr, index-i ,dp ,k) + Math.abs(arr[index] - arr[index-i])
        ans = Math.min(ans , left || ans)
    }
  
    return dp[index] = ans
 
 }

 //tabulation 
 function frogJumpTabulation(arr ,k ){

    let dp =[]
    dp[0] = 0

    for(let i =1 ; i<=arr.length ; i++){
        let ans = 999999999999999 // max
        for(let j =1 ; j<= k ; j++){
            let left =  i>=j && dp[i-j]+ Math.abs(arr[i] - arr[i-j])
            ans = Math.min(ans , left || ans)
        }
      dp[i] = ans 
    }
    
    return dp[arr.length-1]
 
 }
 console.log("jump", frogJump([10, 20, 30, 10] ,3 ,[] ,2))
 console.log("jump Table", frogJumpTabulation([10, 20, 30, 10],2))