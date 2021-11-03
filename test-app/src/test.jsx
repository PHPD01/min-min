import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Test extends React.Component {
    render() { 
        return <div>

            <Card className='mb-3' >
                <Card.Img src='https://picsum.photos/300' />
                <Card.Body>
                  <Card.Title className="text-success">
                    酷酷卡片
                    <Card.Text className="text-warning" >
                      Here is my first react card
                    </Card.Text>
                  </Card.Title>
                
                </Card.Body>
              </Card>
        </div>;
    }
}
 
export default Test;