Array.prototype.myFlate = function(){

    function flate(arr ){
       let output =[]
       for(let i =0 ; i< arr.length ; i++){
          if(Array.isArray(arr[i] )){
            output = [...output ,...flate(arr[i])]
          }else{
            output = [...output , arr[i]]
          }
       }
       return output
    }
    const result = flate(this)
    return result
}
console.log([1,2,[3,4,[5,6]]].myFlate())


// deep copy 

function clone(input){
    if(input == null || typeof input !== "object") return input
    const output = Array.isArray(input ) ? [] : {}
    for(const k of Object.keys(input)){
        console.log(Object.keys(input))
        output[k] = clone(input[k])
    }
    return output
}
console.log(clone([1,2,[3,4,[5,6]]]))

function flattenObject(obj, parentKey = '') {
    let result = {};
  
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const nestedObject = flattenObject(obj[key], parentKey + key);
        result = { ...result, ...nestedObject };
      } else {
        result[parentKey + key] = obj[key];
      }
    }
  
    return result;
  }
  
  const nestedObject = { a: { b: { c: 1 }, d: 2 } };
  const flatObject = flattenObject(nestedObject);
  
  console.log(flatObject);


  
  function getObj(str , val ){
    let arr = str.split(".")
     return recu(arr , 0 , val)
  }
  function recu(arr , idx , val){
    let result = {}
    if(idx == arr.length-1) return {[arr[arr.length-1]] : val}
  
    result[arr[idx]] = recu(arr, idx+1 , val)
  
    return result 
  }
  
  console.log(getObj("a.b.c" , 2))  // 
  let ans = {
    a : {
      b : {
        c : "2"
      }
    }
  }