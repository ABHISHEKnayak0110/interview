console.log("hey")

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//     "use strict";// 
//       this.students.forEach(function(student) {
//         console.log(this + ': ' + student);
//       });
//     }
//   };
  
//   group.showList();  // undefined 

  // function doAsyncTask(cb) {
  //    setTimeout(
  //     () => {
  //       cb()
  //     },1000
  //    )
  //   }
  //   doAsyncTask( () => console.log(message) );
  //   const message = `Hello I am a teapot`;

var f = function g(){ return 23; };
// typeof g();
// console.log(typeof g()) give error 


// (function(foo){
//     console.log( foo.bar)
//     return typeof foo.bar;
// })({ foo: { bar: 1 } }); // undefined 

// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }

//   foo();
//  console.log(typeof a) // undefined 
//   console.log(typeof b)// number
 
// console.log(a)
// var a =10 

// function adding(){
//     let sum =0
//    return function(value){
//        return sum +=value
//    }

// }
// const sum = adding()  // return func
// console.log(sum(10))
// console.log(sum(20))


setTimeout(()=>{console.log("A")},1000);
setTimeout(()=>{console.log("B")},0);
Promise.resolve().then(console.log("C"));
Promise.resolve().then(setTimeout(()=>{console.log("D")},0));
setTimeout(()=>{console.log("G")},0);
console.log("E")
setTimeout(()=>{console.log("F")},1000);

/**
 * C
 * E
 * B
 * D
 * G
 * A
 * F
 */

// function userDetails(username) {
//     if (username) {
//       console.log(salary);
//       console.log(age);
//       let age = 30;
//       var salary = 10000;
//     }
//     console.log(salary); 
//      console.log(age);
//   }
//   userDetails('John');

//   // undefined
//   // refrence error 
//   // 10000
//   // undefined 


//   const object = {
//     who: 'World',
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//       return `Goodbye, ${this.who}!`;
//     }
//   };
   
 // console.log(object.greet());    // What is logged? //  "hello world"
// console.log(object.farewell());// What is logged? // Goodbye undefined 

//
  
// function add(a){
//    return function(b){
//     if(b){
//         return add(a+b)
//     }else{
//         return a
//     }
//    }
// }
// // 1=> 3 => 4 => 4 => 8 => 5=> 
// console.log(add(1)(3)(4)(5)(6)(7)()) 

// var globalVar = "xyz";
 
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);

// 123 , 456 , a, b , xyz
 

// for (var i = 0; i < 5; i++) {

//   function grt(data){
//     setTimeout(function() { console.log(data); }, data * 1000 );
//   }
//   grt(i)

//   }
//   // 5 5 5 5 5
//   // 0 1 2 3 4

// var globalVar = "global";
// var outerVar = "outer"

// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//     console.log(globalVar, outerParam, innerParam);
//   }
//   return innerFunc;
// }

// const x = outerFunc(outerVar);
// outerVar = "outer-2";
// x("inner");
// globalVar = "guess"
// x("inner");
  //   const carDetails = {
  //    name: "Ford Mustang",
  //    yearBought: 2005,
  //    getName(){
  //       return this.name;
  //    },
  //    isRegistered: true
  //  };

  //  var name = "Ford Ranger";
  //  var getCarName = carDetails.getName;

  //  console.log(getCarName(), this); 



// prime number 
//  function isPrime(number){
//    for(let i =2 ; i <= Number(Math.sqrt(number)) ; i++){
//      if(number%i ==0){
//        return false 
//      }
//    }
//    return true
//   }
 
//  function getAllPrime(n){
//    for(let i =2 ; i<=n ; i++){
 
//      if(isPrime(i)){
//          console.log("prime :" , i)
//      }
//    }
//  }
 
//  getAllPrime(5)


/**
 * print numbers from 1 to n, where 
 * if a number is divisible by 3 print fizz, 
 * if a number is divisble by 5 print buzz, 
 * if a number is divisble by both print fizzbuzz 
 * else print the number
 * @method fizzBuzz
 * @param n {number} last no in the fizzbuzz sequence
 * @return void
 */

function fizzBuzz(n){
   let ans =[]
   for(let i =1 ; i<=n ; i++){
     if(i%3 === 0 && i%5=== 0){
         ans.push("fizzbuzz")
     }
     else if(i%3==0){
       ans.push("fizz")
     }
     else if(i%5==0){
         ans.push("buzz")
     }
     else{
         ans.push(i)
     }
 
   }
   return ans
 //   console.log(ans)
 
 }
 
//  setTimeout(() => fizzBuzz(5) , 500)
 
//  function promiseFun(fun){
//      return function(arg){
//          return new Promise((res , rej) => {
          
//              setTimeout(() => {
//                  res(fun(arg))
//              }, 5000)
     
//          })
//      }
   
//  }
//  const fizz = promiseFun(fizzBuzz)
//  fizz(5).then(res => console.log(res))
 
 
 // Write a function which takes only parentheses (curly {}, square []or round () ).
 //  It should check that all parentheses in provided string is balanced or not. 
 //  Simply it should check if there’s an opening parentheses 
 //  then it should have closing parentheses.
 // First input: {[({})]}
 // First output: true
 // Second input: {[({})}
 // Second output: false
 // Third input: {[}]
 // Third output: false
 
 // function checkParanthese(str){
 //      let stack =[]
 //      let i = -1
 //     for(let c of str){
 //         if(c=="{" || c== "[" ||  c== "("){
 //           stack.push(c)
 //           i++
 //         }
 //         else if(c== "}" && stack[i] == "{" ||
 //         c== "]" && stack[i] == "[" ||
 //         c== ")" && stack[i] == "("
 //          ){
 //           stack.pop()
 //           i--
 //          }
 //     }
 //   return i >=0 ? false : true 
 // }
 // console.log(checkParanthese("}["))




// function areBracketsBalanced(s) {
//    let i = -1;
//    let stack = [];
//    for (let ch of s) {
//        if (ch === '(' || ch === '{' || ch === '[') {
//            stack.push(ch);
//            i++;
//        } else {
//            if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
//                stack.pop();
//                i--;
//            } else {
//                return false;
//            }
//        }
//    }
//    return i === -1;
// }





// function promise1(){
//     return new Promise((res , rej) => {
//         let x =1
//         if(x==1){
//             res("resolved")
//         }
//     })
// }
// function promise2(){
//     return new Promise((res , rej) => {
       
//         setTimeout(
//             () => {
//              res("hello promise 2")
//             },500
//         ) 
//     })
// }
// const pAll = Promise.all([promise1() , promise2()])
// const pRace = Promise.race([promise1() , promise2()])
// pAll.then(res=> console.log(res)).catch(err => console.log(err))
// pRace.then(res=> console.log(res)).catch(err => console.log(err))

// let age = "23"
// let student ={
//     name : "Abhishek",
//     age : "25",

//     getAge : function(){
//         return this.age
//     }

// }

// usestate , useRef , useMemo

//hyderation

// let arr =[11,13,14 ,15]  

// for(let i =1 ; i< arr.length ; i++){
//     if(arr[i]!== arr[i-1]+1){
//         console.log("missed : " , arr[i-1]+1)
//         break
//     }
// }

// O(N)\

// const comments = [
//    { id: 1, text: "First comment", parentId: null },
//    { id: 2, text: "Second comment", parentId: null },
//    { id: 3, text: "Reply to first comment", parentId: 1 },
//    { id: 4, text: "Another reply to first comment", parentId: 1 },
//    { id: 5, text: "Reply to reply", parentId: 3 },
//    { id: 6, text: "Second-level reply to first comment", parentId: 3 },
//    { id: 7, text: "Third-level reply to first comment", parentId: 6 },
//    { id: 8, text: "Reply to second comment", parentId: 2 },
//    { id: 9, text: "Second reply to second comment", parentId: 2 },
//    { id: 10, text: "Third reply to second comment", parentId: 2 },
//    { id: 11, text: "Reply to the third reply", parentId: 10 }
//  ];

 /*
 First comment
 Reply to first comment
   Reply to reply
   Second-level reply to first comment
     Third-level reply to first comment
 Another reply to first comment
Second comment
 Reply to second comment
 Second reply to second comment
 Third reply to second comment
   Reply to the third reply
 */

   let arr = [1,2,34,54,90,100,5]





// function peak(array){
//   let max = arr[0]
//   let peakIndex = 0

//   for(let i =1 ; i< array?.length ; i++){
//      if(arr[i] > max){
//       max = arr[i]
//       peakIndex = i
//      }
//   }
//  return peakIndex
// }
// console.log("Peak Element in Array" , peak(arr))


// first we find mid 
// arr[mid] > arr[mid +1] and arr[mid] > arr[mid-1] return mid 
// arr[mid] > arr[mid -1 ]



// function peakOptimal(arr){
  
//   let low = 0
//   let high = arr.length -1 
//   while(low <= high){
//     let mid =  Math.floor((low+high)/2)
//      if(arr[mid] > arr[mid +1] && arr[mid] > arr[mid-1]){
//       return mid 
//      }
//     else if(arr[mid] > arr[mid -1 ]){
//       low = mid +1
//     }
//     else{
//       high = mid -1 
//     }
      
//   } 
// return -1
// }

// console.log("peak" , peakOptimal(arr))





// console.log("hello")  // hello
// for(let i =0 ; i< 1000 ; i++){
//   console.log('kk')
// }
// setTimeout(
//   () => {
//     console.log('inside')
//   },500
// )  // 50sec
// console.log("world")  // world 
// inside 



// print = console.log;
// print("hello")



// New obj with capital Keys 

function getNewObj(obj){
  let ans = {}

  for(let key in obj){
      if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
          ans[`${ typeof key === 'string'? key.toUpperCase() : key}`] = {...getNewObj(obj[key])}
      }
      else{
          ans[`${ typeof key === 'string'? key.toUpperCase() : key}`] =  obj[key]
      }
  }
  return ans 
}
const sym = Symbol('symKey');
let c = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
  phone: "123456789",
name: "Bob",
hobbies: ["reading", "swimming"],
123: "value1",
"getName": () => {},
//  [sym]: "symbolValue",
name: "Alice"
    
}

const data = getNewObj(c)

console.log("Ans  ::",  data)


// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);
