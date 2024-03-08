
function findLSubSequence(s1 , s2){
    const dp =Array(s1.length).fill(Array(s2.length)?.map(e => -1))
    console.log(dp)
    function getAns(idx1 , idx2){
        if(idx1 < 0 || idx2 < 0){
            return 0
        }
        if(dp[idx1]?.[idx2]){
            return dp[idx1][idx2]
        }
        if(s1[idx1] === s2[idx2]){
            console.log(s1[idx1] ,  s2[idx2])
         return dp[idx1][idx2] = 1 + getAns(idx1 - 1  , idx2 -1)
        }
        return dp[idx1][idx2] =  Math.max(getAns(idx1-1 , idx2) ,getAns(idx1 , idx2-1)  )
    }
    return getAns(s1.length-1 , s2.length-1)
}

console.log(findLSubSequence("acd" , "ced"))
