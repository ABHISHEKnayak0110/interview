
function floor(arr){

     let low =0;
     let high = arr.length -1 
     let floor
     while(low < high){
        let mid = Math.floor((low+high) / 2)

        if(arr[mid] === k){
            return mid
        }
        else if( arr[mid] < k){
            floor = arr[mid]  
            low = mid+1
        }
        else{
            high = mid -1 
        }





     }
    
}