// map pollyfill 
Array.prototype.myMap = function(cb){
   let temp =[]
   for(let i =0; i< this.length ; i++){
     temp.push(cb(this[i] , i , this))
   }
   console.log(this , temp)
   return temp
}
const d = [1,2,3,4].myMap((e) => 2*e )
console.log(d)

//filter 

Array.prototype.myfilter = function(cb){
    let temp =[]
    for(let i =0; i< this.length ; i++){
        if(cb(this[i] , i , this)){
            temp.push(this[i])
        }
    
    }
    return temp
}

const filter = [1,0,3,5,0,2].myfilter(e => e*2)
console.log(filter)

// reduce 
Array.prototype.myReduce = function(cb , value){
    let res = value
    for(let i =0; i< this.length ; i++){
        res =  res ? cb(res , this[i] , i , this) : this[i]
    }
    return res
}
const reduce = [1,2,3,4,5].myReduce((acc , data) => {
       return acc+data
} )

// diff between map and forEach 
/**
 * map returns new array and forEach not return any thing 
 * chaining can be done on Map
 * 
 */
