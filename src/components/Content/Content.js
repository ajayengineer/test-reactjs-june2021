import React from 'react';
import {SwitchRouting} from '../ComponentsMixing';
import {Container} from 'react-bootstrap';

class Content extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container className="content--part">
                   <SwitchRouting />
                </Container>
            </React.Fragment>

        )
    }
}

export default Content;