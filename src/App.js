import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import Why from './components/why';

const App = () => {

    const [show, setShow] = useState({
        home:'flex',
        list:'flex'
    });

    const onSwitchPage = () => {
        show.home === 'flex' ? setShow({home:'none', list:'flex'}) : setShow({home:'flex', list:'none'})
    };

    return(
        // <div>
            <Router>
                
                <Switch> 
                
                    <Route exact path="/">
                        <HomePage switchPage={onSwitchPage} view={show.home}/>
                    </Route>

                    <Route path="/list">
                        <ListPage switchPage={onSwitchPage} view={show.list}/>
                    </Route>

                    <Route path="/why" component={Why}  />

                </Switch>

            </Router>
        // </div>
    )   
}

export default App;