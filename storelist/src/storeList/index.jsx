import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Picture from './introduce/picture';
import Bookmarks from './bookmarks/bookmarks';






class Storelist extends React.Component {
    render() {
        return <div>
            
        <Container  >
             
         <Row>
            <Col> <Picture/> </Col>
         </Row>

         <Row>
            <Col>
              <Bookmarks/>
            </Col>
         </Row>

         </Container>


 



        </div>;
    }
}

export default Storelist;