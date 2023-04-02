import axios from "axios"
import React from "react";
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
//Material UI import items
import Button from '@mui/material/Button';
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Review() {
    const feedback = useSelector((store => store.feedback))

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchSurvey()
        clearInputField();
        // routeChangeNext()
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
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" variant="contained" onClick={handleSubmit}>
                        Next
                    </Button>
                </CardActions>

            </Card>
        </div>
    )
}

export default Review