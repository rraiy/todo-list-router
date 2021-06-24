import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import firebase from './database/db_init';

// const db = firebase.firestore()

const App = () => {

    // db.collection("user").doc("memo").set({
    //     message:"123"
    // })

    return(
        // <div>
            <Router>
                
                <Switch> 
                
                    <Route exact path="/" component={HomePage} />

                    <Route path="/list" component={ListPage} />

                </Switch>

            </Router>
        // </div>
    )   
}

export default App;