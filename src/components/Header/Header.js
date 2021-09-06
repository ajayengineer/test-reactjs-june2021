import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Col, Row } from 'react-bootstrap';
import {Logo} from '../ImagesMixing.js';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header className="header--main">
                        <Container>
                            <Row>
                                <Col md={2}>
                                    <img src={Logo} />
                                </Col>                                                         
                                <Col md={10} className="mainmenu">
                                    <Link to="/">Home</Link>
                                    <Link to="/About">About</Link>
                                </Col>
                            </Row>
                        </Container>
                   
                </header>
            </React.Fragment>

        )
    }
}

export default Header;