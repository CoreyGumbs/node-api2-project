const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');
const postRouter = require('./routers/posts.js');

const server = express();
const port = 5000;

//middleware
server.use(express.json());
server.use(cors());
server.use('/api/posts', postRouter);




server.get('/', (req, res) => {
    res.status(200).send('<h1>Web Api Project 2: server-side routing</h1>');
})

server.listen(port, () => {
    console.log(`Server is working on port ${port}`);
})