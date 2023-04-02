import { useHistory, } from "react-router-dom";
import React from "react";
//Material UI import items
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


function Submit() {

    //Function to move us to the next page of the form.
    const routeChangeNext = () => {
        let path = '/';
        history.push(path)
    }

    //Allows us to utilize the useHistory method.
    const history = useHistory();

    return (
        <div className="container">
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    sx={{ height: 350, width: 500, justifyContent: "center" }}
                    image="images/ThankYou.jpeg"
                    title="Feedback"
                />
                <CardContent sx={{ width: '100%' }}>
                    <Typography gutterBottom variant="h4" component="div">
                        Thank you for submitting your feedback!
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" variant="contained" onClick={routeChangeNext}>
                        Submit More Feedback!
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default Submit