
function counter(){
    let count = 0 
    
    const add =(value) => {
        count+= value
    }
    const getCount = () => {
        return count
    }
    return {
        add , getCount
    }
}
const counterVal =  counter()
console.log(counterVal)
counterVal.add(5)
counterVal.add(10)
console.log(counterVal.getCount())

/***
 * module pattern 
 * 
 */
var module = (
    function(){
       function private() {

       }
       return {
        public : function(){
            console.log("Public ")
        }
       }
    }
)()
module.public()
// module.private()

// 
function getCallOne(){
    let called = false
   return function(){
    if(!called ){
        console.log("fist")
        called = true
    }
    else{
        console.log("second")
    }
   }
}
const getCallFun = getCallOne()
getCallFun()
getCallFun()

//once pollyfill 
function once(func , context){
    let ran 
    return function(){

        if(func){
            ran = func.apply(context || this , arguments)
            func = null
        }
        return ran
    }
}
const hello = once((a, b) => console.log("hello " + a,b))
hello(1,2)
hello(1,2)
hello(1,2)
hello(1,2)