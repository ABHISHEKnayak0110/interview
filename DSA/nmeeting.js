
function time(start, end , position){
    this.start = start
    this.end  =end
    this.position = position
}
console.log(new time(1, 2, 2))

let start=  [1,3,0,5,8,5] 
let end =  [2,4,5,7,9,9]
let arr =[]
for(let i =0 ; i< start.length ; i++){
   arr.push(new time(start[i] , end[i] , i))
}
 arr.sort((a,b) => a.end - b.end)
 console.log(arr)

 let count = 0
 let limit = arr[0]?.end
 let ans = [1]
 for(let i =1; i< arr.length ; i++){
     if(arr[i]?.end > limit){
        count++
        limit = arr[i]?.end
        ans.push(arr[i]?.position+1)
     }
 }
 console.log("ans " , ans , count)
