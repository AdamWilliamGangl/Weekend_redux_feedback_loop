import React from 'react';
import axios from 'axios';
import './App.css';
//Imported Router from React Router
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
//Components to import
import Comments from '../Comments/Comments';
import FeedbackResults from '../FeedbackResults/FeedbackResults';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ResponsiveDrawer from '../Drawer/Drawer';
//Material UI imports


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <div className="App-content">
          <ResponsiveDrawer />

          <div className="App-routes">
            <Route path="/feeling">
              <Feeling />
            </Route>

            <Route path="/understanding">
              <Understanding />
            </Route>

            <Route path="/support">
              <Support />
            </Route>

            <Route path="/comments">
              <Comments />
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
