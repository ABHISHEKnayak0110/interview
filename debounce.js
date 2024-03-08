
// function debounce 

function debounce(fn , delay){
    let timer 
    return function(...arg){
       clearTimeout(timer)
       timer = setTimeout(() => {
          fn(...arg)
       } , delay)
    }
}
const check = (name) => {console.log("hello", name)}
 const debounceWrapper = debounce(check,1000)
console.log(debounceWrapper("Abhishek Nayak"))


// throttling

function throttling(func , delay){
  let isCalled = true
 return function(...arg){
    if(isCalled){
        func(...arg)
        isCalled= false
        setTimeout(() => {
         isCalled= true
        },delay)
    }
 }
}
const thrott = throttling(() => console.log("Abhi") , 1000)
thrott()
setTimeout(
    () => {
    
        thrott()
    },500
)
setTimeout(
    () => {
    
        thrott()
    },1500
)

/*
Debouncing is a technique where we can monitor 
the time delay of user action and once that delay reaches our
 predetermined threshold we can can make the function call.


Throttling is a technique where we make the
 function call in a predetermined time interval
  irrespective of continuous user actions.
 */