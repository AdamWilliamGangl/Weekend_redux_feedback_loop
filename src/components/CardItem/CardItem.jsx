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

function CardItem({ item, id}) {

    //Local state for capturing the 'Feeling' value.
    const [info, setInfo] = useState('')

    //Allows us to utilize the useHistory method.
    const history = useHistory();

    //Allows us to utilize the useDispatch method.
    const dispatch = useDispatch()

    //Allows us to manage toggle state for fields.
    const [cardFields, setCardFields] = useState(true)

    //Function for controlling the toggle.
    const toggleFields = () => {
    setCardFields(!cardFields)
    }

    //Function to dispatch survey results to Redux
    const dispatchSurvey = () => {
        dispatch({
            type: `ADD_INFO_${id}`,
            payload: info
        })
    }

    //Function to handle multiple functions on submit button click.
    const handleSubmit = (event) => {
        dispatchSurvey()
        toggleFields()
    }

    //Function to manage conditional rendering of objects on the page
    const manageToggledFields = () => {
        if(cardFields === true){
            return (<Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 250, width: 500, justifyContent: "center" }}
                image={item.image}
                title={item.title}
            />
            <CardContent sx={{width: '100%'}}>
                <form onSubmit={handleSubmit}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.text1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.text2}
                    </Typography>
                    <input type="text" value={info} onChange={(event) => setInfo(event.target.value)} />
                </form>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained" onClick={handleSubmit}>
                    Add
                </Button>
            </CardActions>
        </Card> )}
        else {return (<Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 250, width: 500, justifyContent: "center" }}
                image={item.image}
                title={item.title}
            />
            <CardContent sx={{width: '100%'}} >
                <form onSubmit={handleSubmit}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.text1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.text2}
                    </Typography>
                    <input disabled type="text" value={info} onChange={(event) => setInfo(event.target.value)} />
                </form>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained" onClick={handleSubmit}>
                    Change feedback
                </Button>
            </CardActions>
        </Card> )
        }
    }


    return (
            <div className="container">
                {manageToggledFields()}
            </div>
    )
}

export default CardItem