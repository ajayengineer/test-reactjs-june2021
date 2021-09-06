import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
    Home,
    About
} from '../ComponentsMixing';

class SwitchRouting extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                </Switch>
            </React.Fragment>

        )
    }
}

export default SwitchRouting;