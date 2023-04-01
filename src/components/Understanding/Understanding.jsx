import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import React from "react";
//Material UI import items
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ClearOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

function Understanding(){
  //Local state for capturing the 'Feeling' value.
  const [understanding, setUnderstanding] = useState('')

  //Allows us to utilize the useHistory method.
  const history = useHistory();

  //Allows us to utilize the useDispatch method.
  const dispatch = useDispatch()

  //Function to move us to the next page of the form.
  const routeChangeNext = () => {
      let path = '/support';
      history.push(path)
  }

  //Function to move us to the last page of the form.
  const routeChangePrev = () => {
      let path = '/feeling';
      history.push(path)
  }

  //Function to clear the input field.
  const clearInputField = () =>{
      setUnderstanding('')
  }

  const addUnderstanding = () => {
      dispatch({
          type: "ADD_UNDERSTANDING",
          payload: understanding
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      addUnderstanding()
      clearInputField();
      routeChangeNext()
  }


  return (
      <>
          <h2>How well are you understanding the content?</h2>
          <form onSubmit={handleSubmit}>
              <p>Understanding?</p>
              <Button size= "small" variant="contained" onClick={routeChangePrev}>Previous</Button>
              <input type="number" value={understanding} onChange={(event) =>setUnderstanding(event.target.value)} />
              <Button size= "small" variant="contained" type="submit">Next</Button>
          </form>
      </>
  )
}

export default Understanding