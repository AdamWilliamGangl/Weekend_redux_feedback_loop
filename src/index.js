import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Imported items from Redux and Redux logger
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Feedback piece of state, a single object with multiple properties.
const feedback = (state = {feelings:'5', understanding:'4', support:'3', comments:'LOTSA COMMENTS'}, action) => {
    if (action.type === "ADD_FEELINGS"){
        console.log('Action.type for ADD_FEELINGS')
        return {...state, feelings: action.payload}
    }
    else if (action.type === "ADD_UNDERSTANDING"){
        console.log('Action.type for ADD_UNDERSTANDING')
        return {...state, understanding: action.payload}
    }
    else if (action.type === "ADD_SUPPORT"){
        console.log('Action.type for ADD_SUPPORT')
        return {...state, support: action.payload} 
    }
    else if (action.type === "ADD_COMMENTS"){
        console.log('Action.type for ADD_COMMENTS')
        return {...state, comments: action.payload} 
    }
    return state
}

const questions = (state = [{
    title: "Feeling",
    image: "images/Feeling2.jpg",
    text1: "How are you feeling today?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_FEELINGS"
}, {
    title: "Understanding",
    image: "images/Understanding.png",
    text1: "How well are you understanding the content?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_UNDERSTANDING"
},{
    title: "Supported",
    image: "images/Supported.jpg",
    text1: "How well are you being supported?",
    text2: "Please select a number between 1 and 10.",
    dispatch: "ADD_SUPPORT"
},{
    title: "Comments",
    image: "images/Comments.jpg",
    text1: "Are there any comments you would like to leave?",
    text2: "Please Add your comments below",
    dispatch: "ADD_COMMENTS"
}], action) => {
    return state
}

//Create an instance of the store. Added combineReducers in the event that I want multiple reducers.
const storeInstance = createStore(
    combineReducers({
        feedback,
        questions
    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);
