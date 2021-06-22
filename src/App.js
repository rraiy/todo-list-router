import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ListPage from './components/ListPage'

const App = () => {

    const [show, setShow] = useState({
        home:'flex',
        list:'none'
    })

    const onSwitchPage = () => {
        show.home === 'flex' ? setShow({home:'none', list:'flex'}):setShow({home:'flex', list:'none'})
    }

    return(
        <div>
            <HomePage switchPage={onSwitchPage} view={show.home}/>
            <ListPage switchPage={onSwitchPage} view={show.list}/>
        </div>
    )   
}

export default App;