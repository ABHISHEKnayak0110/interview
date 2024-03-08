Function.prototype.myCall = function(context ={} , ...arg){
    if(typeof this !== "function"){
        throw new Error("not Callable")
    }
    context.fun = this
    context.fun(...arg)

}
function sayHello(){
    console.log("hello" + " " +this.name)
}
const obj ={
    name : "abhishek"
}
sayHello.myCall(obj)
console.log("hey" , obj)