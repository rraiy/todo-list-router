import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ListPage from './components/ListPage';

const App = () => {

    return(
        <div>
            <HomePage/>
            <ListPage/>
        </div>
    )   
}

export default App;