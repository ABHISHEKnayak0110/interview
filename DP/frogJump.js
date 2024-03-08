
// recurstion  and memoization
function frogJump(arr , index ,dp ){

   if(index ===0){
    return 0
   }
   if(index ==1){
    return Math.abs(arr[1] -arr[0])
   }
   if(dp[index]){
    return dp[index]
   }

   let left = frogJump(arr, index-1 ,dp) + Math.abs(arr[index] - arr[index-1])
   let right = frogJump(arr, index-2 , dp) + Math.abs(arr[index] - arr[index-2])

   return dp[index] = Math.min(left , right)

}
console.log("jump", frogJump([10, 20, 30, 10] ,3 ,[]))

// dp  tabulation 

function tabulation(arr){

    let dp =[]
    dp[0] = 0
    dp[1] = Math.abs(arr[1] - arr[0])

    /**space  */
    // let prev = 0
    // let last = Math.abs(arr[1] - arr[0])
    // let ans 

    for(let i = 2 ; i< arr.length ; i++){
        let frst = dp[i-1] + Math.abs(arr[i] - arr[i-1])
        let scnd  = dp[i-2] + Math.abs(arr[i] - arr[i-2])
        dp[i] = Math.min(frst , scnd)
          /**space  */
        // prev  =  prev + Math.abs(arr[i] - arr[i-1])
        // last  = last+ Math.abs(arr[i] - arr[i-2])
        // ans =  Math.min(prev , last)
        // prev = last
        // last = ans 
    }
    return dp[arr.length-1]
}
console.log("jump Tabulation ", tabulation([10, 20, 30, 10]))