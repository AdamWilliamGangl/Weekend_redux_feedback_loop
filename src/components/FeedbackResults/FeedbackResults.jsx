import axios from "axios"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import React from "react";
//Material UI import items
import Button from '@mui/material/Button';

function FeedbackResults() {

    //State to store the feedback data from the GET
    let [feedbackList, setFeedbackList] = useState([])

    //Initial mount to render the page.
    useEffect(() => {
        getFeedbackList()
    }, [])

    //GET Route
    const getFeedbackList = () => {
        axios.get('/feedback')
            .then(response => {
                console.log('Successful GET in FeedbackResults.jsx. This is the data:', response.data);
                setFeedbackList(response.data)
            })
            .catch((error) => {
                alert('Error in GET in FeedbackResults.jsx')
                console.log('Error in GET in FeedbackResults.jsx', error)
            })
    }

    return (
        <><div className="container">
            <table>
                <tbody>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                    {feedbackList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td>
                                    <Button size="small" variant="contained" >
                                        Delete
                                    </Button>
                                </td>
                            </tr>)
                    })}

                </tbody>
            </table>
        </div>
        </>
    )
}

export default FeedbackResults