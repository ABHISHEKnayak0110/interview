
 const path = "DLRU"
  let rowA =[1, 0, 0 , -1]
  let colA =[0, -1 , 1 , 0]
function rateMazePath(row , col, arr , ds ,ans){

      if(index == arr.length){
        ans.push(ds)
        return 
      }

      for(let i =0 ; i< path.length ; i++){
      
        if(row+rowA[i] < arr.length 
            && col+colA[i] < arr.length
            && row+rowA[i] >= 0
            && col+colA[i] >=0
            && arr[row+rowA[i]][col+colA[i]] !== 0
             ){
                arr[row+rowA[i]][col+colA[i]] = 1
                rateMazePath(row+rowA[i], col+colA[i], ds+path[i] , ans)
                arr[row+rowA[i]][col+colA[i]] = ""
                 ds = ds.remove(path[i] , "")

             }

        
      }



}