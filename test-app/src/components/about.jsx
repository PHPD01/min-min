import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const div1 = {
    width: "300px",
    margin: "30px auto",
    backgroundColor: "#44014C",  //驼峰法
    minHeight: "200px",
    boxSizing: "border-box"
  };
  


class About extends React.Component {
    render() { 
        return <div>
            <Row>

                <Col  xs={12} xl={12} className='bg-warning '>1

                <Row>
                <Col  xs={12} xl={6} style={div1} className='bg-danger'>2</Col>
                <Col  xs={12} xl={6} style={div1} className='bg-info' > 3 </Col>
                </Row>

                <Row>
                <Col xs={12} xl={6} className='bg-danger'>4</Col>
                <Col xs={12} xl={6} className='bg-info' >5</Col>
                </Row>

                <Row>
                <Col   xs={12} xl={12} className='bg-primary'>6</Col>
            
                </Row>

                </Col>
                {/* <Col></Col> */}



            </Row>
           








        </div>;
    }
}
 
export default About;