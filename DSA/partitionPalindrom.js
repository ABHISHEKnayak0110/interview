

function getAllPermutation(string , index , ds , ans){

    if(index == string.length){
        ans.push([...ds])
        return
    }

    for(let i = index ; i< string.length ; i++){
      
        if(isPalindrom(string , index , i)){
            
            ds.push(string.substring(index , i+1))
            getAllPermutation(string , i+1 , ds , ans )
            ds.pop()

        }

    }
}

function isPalindrom(str , start , end ){
    const s = str.substring(start , end+1)
    return s === s.split("").reverse().join("")
}

let ans =[]
let ds =[]
let s= "aabb"
getAllPermutation(s, 0, ds, ans)
console.log(ans)