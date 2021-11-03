import React, { Component } from 'react';
import {GoogleMap,withGoogleMap} from 'react-google-maps';



// worong test
 
export default function App (){
    
    const Example = withGoogleMap( props => (
       
        <GoogleMap
        defaultCenter ={{ lat:24.156963223798535, lng:120.65529528501742 }}
        defaultZoom ={13}
        ></GoogleMap>
    ));

    return(
        <div>
            <Example
            containerElement = {<div style ={{ height:'500px',width:'500px'}} /> }
            mapElment ={<div style={{height:'100%'}} /> }
            />
        </div>
    );

}

