//Closures are an ability of a function to remember the
// variables and functions that are declared in its outer scope.

function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  const initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 


// diff between normal function and arrow function 

/*
 1. argument object 
 2. this 
 3. decleration 
 4. hoisted 

*/

// Pipe 
/**
 * Instead of jamming functions within functions or creating a bunch of intermediate variables, let’s pipe all the things!
 * pipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ name: 'Buckethead' });
// 'TEKCUB'

pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
 */