function myPromise(executor){
   let onResolve
   let onReject 
   let isFullfilled = false
   let isRejected = false
   let isCalled = false
   let value
   let error
  
   function resolve(val){
      isFullfilled = true
      value = val
      if(typeof onResolve === "function" && !isCalled){
         onResolve(val)
         isCalled = true
      }

   }
   function reject(val){
      isRejected = true
      error = val
      if(typeof onReject === "function" && !isCalled){
         onReject(val)
         isCalled = true
      }
   
 }
  
   this.then = function(handler){
        onResolve = handler
        if(!isCalled && isFullfilled){
           onResolve(value)
           isCalled =true
        }
        return this
   }
   this.catch = function(handler){
    onReject  = handler
    if(!isCalled && isRejected){
       onReject(error)
       isCalled = true
    }
       return this 
   }

    executor(resolve , reject)
}

const p = new myPromise((res , rej) => {
    setTimeout(
       () => {
        res("hello")
       },500
    )
  
  
})
const p2 = new myPromise((res , rej) => {
   setTimeout(
      () => {
       rej("hello 2")
      },300
   )
 
 
})
p.then(res => console.log(res)).catch(e => console.log(e))


// resolve pollyfill
myPromise.resolve = (val) => {
   return new myPromise((res , rej) => {
       res(val)
   })
}


// reject pollyfill
myPromise.reject = (val) => {
   return new  myPromise((res , rej) => {
       rej(val)
   })
}

// promoise all

myPromise.all = function(promisesArray){
   return new myPromise((res , rej) => {
     let result =[]
     let count = 0
     promisesArray.forEach((p , i) => {
         p.then(resolve => {
           result[i] = resolve
          count++
          if(count === promisesArray.length){
             res(result)
          }
         }).catch(err=> rej(err))
     });
   })
}
const pAll = myPromise.all([p, p2])
pAll.then(res=> console.log(res)).catch(err => console.log(err))