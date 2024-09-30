
// memoize
function fab(n , dp){
    if(n <=1){
        return n
    }
    if(dp[n]){
        return dp[n]
    }
    return dp[n] = fab(n-1 , dp) + fab(n-2 , dp)
}
const arr=[]
console.log(fab(3, arr))

// time = o(N)
// space =0(N)

//tabulation

function tabFab(n ){
   const dp = []
   dp[0] = 0
   dp[1] =1

   for(let i =2 ; i<= n ; i++){
    dp[i] = dp[i-1] + dp[i-2]
   }
 return dp[n]
}
console.log(tabFab(3))


// space optimisation 

function spaceFab(n){
    let prev = 0
    let last =1
    let ans =0
 for(let i = 2; i<=n ; i++){
    ans = prev +last
    last = ans 
    prev = last
}

return ans 
}
console.log(spaceFab(3))