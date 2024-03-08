const { default: axios } = require('axios');
const express = require('express');

const app = express();
const port = 3111; // You can change the port if needed

app.get("/app" , (req, res) => {
    // axios.get('https://dummyjson.com/users').then(
    //   data=>  res.send(data)
    // ).catch(e => console.log(e))
    res.send("<h1>Hello</h1>")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
