import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardItem({ item }) {

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
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250, width: 350, justifyContent: "center"}}
                        image={item.image}
                        title={item.title}
                    />
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.text1}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.text2}
                            </Typography>
                            <input type="text" value={feeling} onChange={(event) => setFeeling(event.target.value)} />
                        </form>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button size="small" variant="contained" onClick={handleSubmit}>
                            Next
                        </Button>
                    </CardActions>

                </Card>
            </div>
        </>
    )
}

export default CardItem