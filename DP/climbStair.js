
function climb(stairs){
 
    if(stairs ===0){
        return 1
    }
    if(stairs == 1){
        return 1
    }
    let oneStep = climb(stairs-1)
    let twoStep = climb(stairs-2)
    return oneStep + twoStep
}
console.log(climb(5))

// optimise by dp 
var climbStairs = function(n) {
    //   let dp =[]
    //   dp[0] =1
    //   dp[1] =1
     if(n ===1){
         return n
     }
          let last = 1
     let  prev =1
     let ans =0

      for(let i =2 ; i<=n ; i++){
        //   dp[i] = dp[i-1] + dp[i-2]
        ans = prev + last
         prev = last
         last = ans 
       
      } 
      return ans 
}; 