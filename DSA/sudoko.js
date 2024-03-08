function solve(board){
  for(let i =0 ; i < board.length ; i++){
    for(let j =0; i< board[0].lngth ; j++){

       if(board[i][j] == "") {
        
        for(let k =0 ; k<=9 ; k++){
            if(isValid(board , i , j , k)){
                 board[i][j] = k
                 if(solve(board)){
                    return true
                 }
                 board[i][j] = ""
            }
        }
      return false
       }
    }
  }
  return true
}

function isValid(board , row , col , val){
    for(let i =0; i< board.length ; i++){
        if(board[row][i] === val){
            return false
        }
        if(board[i][col] === val){
            return false
        }
        if(board[3*(Number(row/3)) + Number(i/3)] [3*(Number(col/3)) + (i%3)] === val){
            return false
        }
    }
  return true
}