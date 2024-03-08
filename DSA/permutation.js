

function printAllPermutation(arr , ds , ans , map){
    if(ds.length == arr.length){
       ans.push([...ds])
       return
    }

    for(let i =0; i < arr.length ; i++){
        if(!map[i]){
            map[i] = true
            ds.push(arr[i])
            printAllPermutation(arr , ds ,ans , map)
            ds.pop()
            map[i] = false
        }
    }
}
let arr = [1, 2, 3]
let ds =[]
let ans =[]
let map =[]
printAllPermutation(arr , ds , ans , map)
console.log(ans)

// without map extarv space 

function prinAllWithoutSpacefunction(index , arr , ans ){
    if(index === arr.length){
       ans.push([...arr])
       return
    }

    for(let i = index; i < arr.length ; i++){
            let temp = arr[i]
            arr[i] = arr[index]
             arr[index] = temp
             prinAllWithoutSpacefunction(i+1 , arr ,ans )
            temp = arr[i]
            arr[i] = arr[index]
             arr[index] = temp
        
    }
}
let result =[]
prinAllWithoutSpacefunction(0, [3,2,1] , result )
console.log("no space :" , result)
