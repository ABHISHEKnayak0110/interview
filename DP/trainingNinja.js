const arr = [[1,50, 10] , [10, 100, 20]]
function getTraining(index, last , dp){

   if(index === 0){
      const newArr = [...arr[index]]
      newArr.splice(last , 1)
      return Math.max(...newArr)
   }
   if(dp[index]?.[last]){
    return dp[index][last]
   }
   let max =0
   for(let i =0 ; i< arr[0].length ; i++){
     if(i !== last){
        let find = arr[index][i] + getTraining(index-1 , i ,dp )
         max = Math.max(find, max)
     }
   }

return dp[index][last] = max 
}

const dp = Array(3).fill(Array(3))
console.log(getTraining(1 , -1 ,dp))

// tabulation 

function getTrainingTab(arr){

    let dp = Array(3).fill(Array(3))
   dp[0][0] = Math.max(arr[0][1], arr[0][2])
   dp[0][1] = Math.max(arr[0][0], arr[0][2])
   dp[0][2] = Math.max(arr[0][0], arr[0][1])
   dp[0][3] = Math.max(arr[0][0], arr[0][1], arr[0][2])

    let max =0
    for(let i =1 ; i< arr.length ; i++){
        for(let last = 0 ; last < 3; last++){
             dp[i][last] =0
            for(let j = 0 ; j < arr[0].length ; j++){
                if(j !== last){
                    let find = arr[i][j] + dp[i-1 , j]
                   dp[i][last] = Math.max(dp[i][last], max)
                 }
            }
          
        }
    }
 
 return dp
 }
 console.log( getTrainingTab([[1,50, 10] , [10, 100, 20]]))