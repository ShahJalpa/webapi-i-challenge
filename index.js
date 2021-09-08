// implement your API here
const express = require('express');

const server = express();
server.get('/', (req, res) => { //request handler function and "/" is our root
    res.send('hello world!')
});

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gangee'
        },
        {
            id: 2,
            name: 'frodo Baggins'
        }
    ];

    res.status(200).send(hobbits);
})

server.listen(8000, () => console.log('API running on port 8000'));