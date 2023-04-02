import React from 'react';
import './App.css';
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
//Components to import
import FeedbackResults from '../FeedbackResults/FeedbackResults';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import ResponsiveDrawer from '../Drawer/Drawer';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="images/PRIMEFEEDBACK2.png" height="100"/>
        </header>

        <div className="App-content">
          <ResponsiveDrawer />

          <div className="App-routes">
            <Route exact path="/">
              <Feeling />
            </Route>

            <Route path="/review">
              <Review />
            </Route>

            <Route path="/submit">
              <Submit />
            </Route>

            <Route path="/feedbackResults">
              <FeedbackResults />
            </Route>
    
          </div>
        </div>

      </div>
    </Router>
  );
}


export default App;
