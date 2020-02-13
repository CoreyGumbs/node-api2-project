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
        res.status(500).json({error: "The posts information could not be retrieved."});
        console.log(error);
    })
});

router.get('/:id', (req,res) => {
    const { id } = req.params;

    db.findById(id)
    .then(post => {

        if(post.length ===  0){
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }else{
         res.status(200).json(post);
         console.log(post);
        }
    })
    .catch( error => {
        res.status(500).json({error: "The post information could not be retrieved."});
        console.log(error);
    })
});

router.get('/:id/comments', (req, res) => {
    const {id} = req.params;

    db.findPostComments(id)
    .then(comment => {
        if(comment.length === 0){
           res.status(404).json({ message: "The post with the specified ID does not exist." })
        }else{
            res.status(200).json(comment);
        }
       
    })
    .catch( error => {
    
        res.status(500).json({error: "The comments information could not be retrieved."});
        console.log(error);
    })
    
});

//POST ROUTES

//UPDATE/PUT ROUTES

//DELETE ROUTES

module.exports = router;