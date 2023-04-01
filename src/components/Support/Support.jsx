import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import React from "react";
//Material UI import items
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ClearOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

function Support(){
  //Local state for capturing the 'Feeling' value.
  const [support, setSupport] = useState('')

  //Allows us to utilize the useHistory method.
  const history = useHistory();

  //Allows us to utilize the useDispatch method.
  const dispatch = useDispatch()

  //Function to move us to the next page of the form.
  const routeChangeNext = () => {
      let path = '/comments';
      history.push(path)
  }

  //Function to move us to the last page of the form.
  const routeChangePrev = () => {
      let path = '/understanding';
      history.push(path)
  }

  //Function to clear the input field.
  const clearInputField = () =>{
      setSupport('')
  }

  const addSupport = () => {
      dispatch({
          type: "ADD_SUPPORT",
          payload: support
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      addSupport()
      clearInputField();
      routeChangeNext()
  }


  return (
      <>
          <h2>How well are you being supported?</h2>
          <form onSubmit={handleSubmit}>
              <p>Support?</p>
              <Button size= "small" variant="contained" onClick={routeChangePrev}>Previous</Button>
              <input type="number" value={support} onChange={(event) =>setSupport(event.target.value)} />
              <Button size= "small" variant="contained" type="submit">Next</Button>
          </form>
      </>
  )
}

export default Support