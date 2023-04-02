import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Imported items from Redux and Redux logger
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Feedback piece of state, a single object with multiple properties.
const feedback = (state = {feeling:'10', understanding:'10', support:'10', comments:'Kowabunga'}, action) => {
    if (action.type === "ADD_INFO_0"){
        console.log('Action.type for ADD_FEELINGS')
        return {...state, feeling: action.payload}
    }
    else if (action.type === "ADD_INFO_1"){
        console.log('Action.type for ADD_UNDERSTANDING')
        return {...state, understanding: action.payload}
    }
    else if (action.type === "ADD_INFO_2"){
        console.log('Action.type for ADD_SUPPORT')
        return {...state, support: action.payload} 
    }
    else if (action.type === "ADD_INFO_3"){
        console.log('Action.type for ADD_COMMENTS')
        return {...state, comments: action.payload} 
    }
    return state
}

const questions = (state = [{
    title: "feeling",
    image: "images/Feeling2.jpg",
    text1: "How are you feeling today?",
    text2: "Please select a number between 1 and 10."
}, {
    title: "understanding",
    image: "images/Understanding.png",
    text1: "How well do you understand the content?",
    text2: "Please select a number between 1 and 10."
},{
    title: "support",
    image: "images/Supported.jpg",
    text1: "How well are you being supported?",
    text2: "Please select a number between 1 and 10."
},{
    title: "comments",
    image: "images/Comments.jpg",
    text1: "Do you have any comments for us?",
    text2: "Please Add your comments below"
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
