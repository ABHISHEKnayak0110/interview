
let arr = [2,3,5,7] 
let target =7
let ans =[]

function getAns(index , target , arr , ds ){

    if(index === arr.length){
        return
    }
    // 2, 2,2  2 <7 , 2<5, 
    if(target === 0){
        console.log(ds) 
        return 
    }
    if(arr[index] <= target){
        ds.push(arr[index])
        target = target - arr[index]
        getAns(index , target , arr , ds )
        target = target + arr[index]
        ds.pop()

    }
    getAns(index + 1 , target  , arr, ds)
}

// getAns(0 , 7 , arr, ans)

function getOnlyOne(index , target , arr , ds){
  
    if(index >= arr.length ){
        if(target == 0 ){
            // console.log(ds)
            return
        }
       
        return
    }
    if(target == 0 ){
        console.log(ds)
        return
    }
    if(arr[index] <= target){
        ds.push(arr[index])
        target = target - arr[index]
        getOnlyOne(index +1, target , arr, ds)
        ds.pop()
        target = target + arr[index]
        // getOnlyOne(index +1, target , arr, ds)
    }
    getOnlyOne(index +1, target , arr, ds)

}
getAns(0 ,target , arr, ans)
getOnlyOne(0, target , arr,[])