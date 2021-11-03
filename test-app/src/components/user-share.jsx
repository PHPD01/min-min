import React, { Component } from 'react';
// 地圖引用
import { Map, GoogleApiWrapper } from 'google-maps-react';

// class Share  extends React.Component {
//     render() { 
//         return <div>
//             <h1> User Share </h1>
//         </div>;
//     }
// }
 
// export default  Share    ;

const mapStyles = {
    width: '100%',
    height: '100%', };



function Share (){
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB_f60KggWXNeSKfNs26dG6yuM7susvnmo'
  })(MapContainer);