
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';




class Photo  extends React.Component {
    render() { 
        return <div>
          <Container>   

         <Row>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
         </Row>
        
         <Row>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
         </Row>

         <Row>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
            <Col xs={6} xl={3} > 1</Col>
         </Row>


           

          </Container>
        </div>
    }
}
 
export default  Photo    