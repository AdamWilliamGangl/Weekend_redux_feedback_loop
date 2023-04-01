import { useState, useEffect, useRef, useTransition } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import React from "react";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        addFeeling()
        clearInputField();
        routeChangeNext()
    }
    


    return (
        <>
            <div className="container">
                {questions.map((item, i) => {
                    return <CardItem key={i} item={item} />
                })}
            </div>

        </>

    )
}

export default Feeling