const comments = [
    { id: 1, text: "First comment", parentId: null },
    { id: 2, text: "Second comment", parentId: null },
    { id: 3, text: "Reply to first comment", parentId: 1 },
    { id: 4, text: "Another reply to first comment", parentId: 1 },
    { id: 5, text: "Reply to reply", parentId: 3 },
    { id: 6, text: "Second-level reply to first comment", parentId: 3 },
    { id: 7, text: "Third-level reply to first comment", parentId: 6 },
    { id: 8, text: "Reply to second comment", parentId: 2 },
    { id: 9, text: "Second reply to second comment", parentId: 2 },
    { id: 10, text: "Third reply to second comment", parentId: 2 },
    { id: 11, text: "Reply to the third reply", parentId: 10 }
  ];
 
  function getResult(arr , id){
   let result =[]
    
    arr.forEach(element => {
        if(element.parentId === id){
          let childRes = getResult(arr , element.id)
          if(childRes?.length){
             element.child = childRes
          }
          result.push(element)
        }
    });
 
   return result
  }
  let data = getResult(comments ,null)
  console.log(JSON.stringify(data, null, 2))