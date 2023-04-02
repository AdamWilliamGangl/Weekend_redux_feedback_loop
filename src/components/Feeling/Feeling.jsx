import { useState, useEffect, useRef, useTransition } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";
import React from "react";
//Material UI import items
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Feeling() {

    //Accessing the questions array of object from Redux
    const questions = useSelector((store => store.questions))

    //Local state for capturing the 'Feeling' value.
    const [feeling, setFeeling] = useState('')

    //Allows us to utilize the useHistory method.
    const history = useHistory();

    //Allows us to utilize the useDispatch method.
    const dispatch = useDispatch()

    //Function to move us to the next page of the form.
    const routeChangeNext = () => {
        let path = '/understanding';
        history.push(path)
    }

    //Function to move us to the last page of the form.
    const routeChangePrev = () => {
        let path = '/home';
        history.push(path)
    }

    //Function to clear the input field.
    const clearInputField = () => {
        setFeeling('')
    }

    const addFeeling = () => {
        dispatch({
            type: "ADD_FEELINGS",
            payload: feeling
        })
    }

    return (
        <div className="containeFeeling">
            <Carousel>
                {questions.map((item, index) => {
                    return <Carousel.Item key={index}>
                        <CardItem item={item} id={index} />
                    </Carousel.Item>
                })}
            </Carousel>
            <div>
            <Button size="small" variant="contained" onClick={routeChangeNext} >
                Review Feedback
            </Button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Feeling