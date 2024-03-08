function memoize(fn){
    let cache ={}
    return function(...arguments){
        let key = arguments.join("_")
        console.log("h" , key)
        if(cache[key]){
            console.log("chached")
            return cache[key]
        }
        else{
            let val = fn(...arguments)
            cache[key] = val
            return cache[key]
        }

    }
}
const multi = (a,b) => a*b
const sum = (a,b) => a+b
const memo = memoize(multi)
const memoSum = memoize(sum)
console.log(memo(1,2))



