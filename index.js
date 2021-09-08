// implement your API here
const express = require('express');

const server = express();
server.use(express.json())

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

server.post('/hobbits', (req, res) => {
    res.status(201).json({url: '/hobbits', operation: 'POST'})
}) //CREATE data

server.put('/hobbits', (req, res) => {
    res.status(200).json({url: '/hobbits', operation: 'PUT'})
}) //UPDATE

server.delete('/hobbits', (req, res) => {
    res.status(204)
})

server.listen(8000, () => console.log('API running on port 8000'));