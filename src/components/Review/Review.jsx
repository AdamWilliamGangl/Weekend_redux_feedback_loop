import axios from "axios"
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
//Material UI import items
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Review() {
    const feedback = useSelector((store => store.feedback))

    //Function to move us to the next page of the form.
    const routeChangeNext = () => {
        let path = '/submit';
        history.push(path)
    }

    //Function to move us to the last page of the form.
    const routeChangePrev = () => {
        let path = '/';
        history.push(path)
    }

    //Allows us to utilize the useHistory method.
    const history = useHistory();

    //Function to POST to DB and move to next page.
    const handleSubmit = (event) => {
        event.preventDefault();
        addFeedback(feedback)
        routeChangeNext()
    }

    //Function to POST to DB
    const addFeedback = (feedback) => {
        console.log('This is feedback', feedback)
        axios.post('/feedback', feedback)
            .then((response) => {
                console.log('Successful POST in review.jsx', response)
            })
            .catch((error) => {
                alert('Error in POST in review.jsx')
                console.log('This is the error in POST in review.jsx', error)
            })
    }

    return (
        <div className="container">
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    sx={{ height: 250, width: 500, justifyContent: "center" }}
                    image="images/Feedback.jpg"
                    title="Feedback"
                />
                <CardContent sx={{ width: '100%' }}>
                    <Typography gutterBottom variant="h4" component="div">
                        Please review your feedback below
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Feeling: {feedback.feeling}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Understanding: {feedback.understanding}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Support: {feedback.support}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Comments: {feedback.comments}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button size="small" variant="contained" onClick={routeChangePrev}>
                        Previous
                    </Button>
                    <Button size="small" variant="contained" onClick={handleSubmit}>
                        Submit Feedback!
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Review