const express = require('express')
const router = new express.Router()
const pool = require('../modules/pool')

//Questions for our feedback survey.
const questions = [{
    title: "feeling",
    image: "images/Feeling2.jpg",
    text1: "How are you feeling today?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_FEELINGS"
}, {
    title: "understanding",
    image: "images/Understanding.png",
    text1: "How well are you understanding the content?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_UNDERSTANDING"
},{
    title: "support",
    image: "images/Supported.jpg",
    text1: "How well are you being supported?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_SUPPORT"
},{
    title: "comments",
    image: "images/Comments.jpg",
    text1: "Are there any comments you would like to leave?",
    text2: "Please Add your comments below",
    dispatch: "ADD_COMMENTS"
}]

//GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(`Error making DB query (GET) in feedback.router`, error)
        res.sendStatus(500)
    })
})

//POST Route
router.post('/', (req, res) => {
    let feedbackItem = req.body;
    const queryText =  `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES
    ($1, $2, $3, $4)`
    pool.query(queryText, [feedbackItem.feeling, feedbackItem.understanding, feedbackItem.support, feedbackItem.comments])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.log(`Error making DB query (POST)`, error)
        res.sendStatus(500)
    })
})

//DELETE Route

router.delete('/delete/:id', (req, res) => {
    console.log('These are req.params', req.params);
    const feedbackId = req.params.id;
    const queryText = `DELETE FROM "feedback" WHERE id=$1`
    pool.query(queryText, [feedbackId])
    .then((result) => {
        console.log('Successful DELETE request');
        res.sendStatus(200)
    })
    .catch((error) =>{
        console.log('Error making database query DELETE', error)
        res.sendStatus(500)
    })
})

module.exports = router