import axios from "axios"
import React from "react";
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ReviewItem from "../ReviewItem/ReviewItem";
//Material UI import items
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Review() {
    const feedback = useSelector((store => store.feedback))


    return (
        <div className="container">
            {feedback.map((item, index) => {
                return <ReviewItem item={item} index={index}/>
            })}
        </div>
        
    )
}

export default Review