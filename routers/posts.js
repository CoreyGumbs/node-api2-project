const express = require('express');
const db = require('../data/db.js');



const router = express.Router();


//GET ROUTES
router.get('/', (req, res) => {
    db.find()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        res.end();
        res.status(500).json({error: "The posts information could not be retrieved."});
        console.log(error);
    })
});

//POST ROUTES

//UPDATE/PUT ROUTES

//DELETE ROUTES

module.exports = router;