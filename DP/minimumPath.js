

function getMinimumPath(arr , row , col , ds , ans , sum){
   
      if(row >= arr.length-1 && col >= arr[0].length-1){
        ans.push([...ds])
        console.log(sum+arr[row][col] , "sum" , ds)
        return sum +arr[row][col]
      }
      if(row > arr.length-1 || col > arr[0].length-1){
        return 
      }
            
          let left  =   getMinimumPath(arr, row+1 , col , [...ds , "d"] , ans ,  sum + arr[row][col])
           let right =  getMinimumPath(arr, row , col+1 ,[...ds, "r"] ,ans ,  sum+arr[row][col])
   return Math.min(left||99999 , right ||9999)
}

let arr =[[10,2,5] , [10,5,100]]
let ds =[]
let ans =[]
let sum=0

console.log(getMinimumPath(arr ,0,0, ds, ans ,0))