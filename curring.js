// infinite curring 
function sum(a){
    return function(b){
        if(b) return sum(a+b)
        return a
    }
}
console.log(sum(1)(2)(3)())


// change sum(a,b,c ) => to sum(a)(b)(c)

function curry(func){
   return function curring(...arg){
      if( arg.length>= func.length ){
        return func(...arg)
      }
      else{
        return function(...next){
          return curring(...next , ...arg)
        }

        }
      }
   }

   let add = (a,b,c,d) => a+b+c+d
   const curryFunc = curry(add)
   console.log(curryFunc(1)(2)(3)(4))