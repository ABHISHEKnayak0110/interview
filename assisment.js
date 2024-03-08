function getRoot(value, callback){
    setTimeout(() => {
        const root = Math.sqrt(value);
        callback(root);
    }, Math.random() * 1000);
  }
  

//   function getRootList(arr, callback){
//     /**for storing results **/
//     const results  = [];

//   /*for counting every operation performed on array */
//     let count = 0;

//     /**function which help to store result and separate my logic for cleaner code **/

//     function storeResult(index) {
//       getRoot(arr[index], (value) => {
//         results[index] = value;
//         count++;
//          /* when all operation completed,  will call callback function */
//         if (count === arr.length) {
//           callback(results);
//         }
//       });
//     }
    
//     /* iterating on every value */
//     for (let i = 0; i < arr.length; i++) {
//         storeResult(i);
//     }
 
// }
  
// async function getRootList(arr, callback) {
//     const results = [];
//     console.time("log")
//     for (const value of arr) {
//       await new Promise((resolve) => {
//         getRoot(value, (data) => {
//           results.push(data);
//           resolve();
//         });
//       });
//     }
//     callback(results);
//     console.timeEnd("log")
//   }

  async function getRootList(arr, callback) {
    console.time("log")
    const data = await Promise.all(arr?.map(async(e)=>  await new Promise((resolve) => {
      getRoot(e, (data) => {
        resolve(data);
      });
    })))
     callback(data)
    console.timeEnd("log")
  }

  
  getRootList([1, 9, 4, 16, 36, 25, 49, 81, 64, 100], (roots) => console.log(roots));
  // should print [1, 3, 2, 4, 6, 5, 7, 9, 8, 10] in console