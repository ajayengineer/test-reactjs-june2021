import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="footermain">
                 <Container>
                    <Row>
                        <Col md={4}>
                            @Copyright Ajay Rai
                        </Col>
                        <Col md={3}>
                            Get in Touch: 9717499606
                        </Col>
                    </Row>
                 </Container>
                 </div>
            </React.Fragment>
        )
    }
}

export default Footer;