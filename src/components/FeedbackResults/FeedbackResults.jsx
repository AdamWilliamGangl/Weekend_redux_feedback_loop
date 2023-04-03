import axios from "axios"
import { useState, useEffect } from "react"
import React from "react";
//Material UI import items
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//Bootstrap import items
import SweetAlert from "react-bootstrap-sweetalert";

function FeedbackResults() {

    //State to store the feedback data from the GET
    let [feedbackList, setFeedbackList] = useState([])

    //State recommended in documentation for showing sweet alerts
    let [showAlert, setShowAlert] = useState(false);

    //temporary state for passing the ID for deleting items- tied to Sweet Alerts
    let [selectedId, setSelectedId] = useState(null);

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

    //Function to POST to DB
    const deleteFeedback = (id) => {
        console.log('This is the id to be deleted', id)
        axios.delete(`/feedback/delete/${id}`)
            .then((response) => {
                console.log('Successful DELETE in review.jsx', response)
                getFeedbackList();
            })
            .catch((error) => {
                alert('Error in DELETE in review.jsx')
                console.log('This is the error in DELETE in review.jsx', error)
            })
    }

    //Delete button handler that combines a Sweet Alert with the DELETE request.
    const deleteButtonHandler = (id) => {
        console.log('this is the id', id)
        setSelectedId(id);
        setShowAlert({
            warning: true,
            showCancel: true,
            confirmBtnText: "Yes, delete it!",
            confirmBtnBsStyle: "danger",
            title: "Are you sure?",
            focusCancelBtn: true,
            onConfirm: () => {
                deleteFeedback(id);
            },
            onCancel: () => {
                console.log("Cancel clicked");
            },
        });
    };

    //Handling for Sweet Alerts on confirmation.
    const onConfirm = () => {
        deleteFeedback(selectedId);
        getFeedbackList();
        setShowAlert(false)
    }

    //Handling for Sweet Alerts on cancel.
    const onCancel = () => {
        setSelectedId(null);
        setShowAlert(false);
    }

    return (
        <div className="container">
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
                                    <Button size="small" variant="contained" onClick={() => deleteButtonHandler(item.id)} >
                                        <DeleteIcon onClick={() => deleteButtonHandler(item.id)} />
                                    </Button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
            {showAlert && (
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    focusCancelBtn
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                />
            )}
        </div>
    )
}

export default FeedbackResults