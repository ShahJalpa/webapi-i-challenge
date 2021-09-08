// implement your API here
const express = require('express');

const server = express();
server.get('/', (req, res) => { //request handler function and "/" is our root
    res.send('hello world!')
})

server.listen(8000, () => console.log('API running on port 8000'));