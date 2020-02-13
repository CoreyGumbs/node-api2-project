const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).send(`Server working on port: ${port}`);
})

server.listen(port, () => {
    console.log(`Server is working on port ${port}`);
})