
//down , leftd , rightd 


function getMinMax(grid){
     let min = 9999999
    for(let i =0; i < grid[0].length ; i++){
           let ans = getAns(grid , 0 , i )
           min = Math.min(ans , min)
  
    }
 return min 
}

function getAns(grid , ind , col ){

    if(ind == grid.length){
        return 0
    }
  
    if(col >= grid[0].length || col < 0  ){
        return 99999999
    }
   let d = grid[ind][col] + getAns(grid ,ind+1 , col)
   let l = grid[ind][col] + getAns(grid ,ind+1 , col-1)
   let r = grid[ind][col] + getAns(grid ,ind+1 , col+1)
   console.log("lll" ,  grid[ind][col])
   return Math.min(d , l, r)


}
let arr = [[-19,57],[-40,-5]]

console.log(getMinMax(arr))