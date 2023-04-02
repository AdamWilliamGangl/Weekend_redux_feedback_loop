import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";
import React from "react";
//Material UI import items
import Button from '@mui/material/Button';


function Feeling() {

    //Accessing the questions array of object from Redux
    const questions = useSelector((store => store.questions))

    //Allows us to utilize the useHistory method.
    const history = useHistory();

    //Function to move us to the next page of the form.
    const routeChangeNext = () => {
        let path = '/review';
        history.push(path)
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