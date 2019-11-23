import React from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const Maps = () => {
  const mapStyles = {
    width: "100px",
    height: "100px",
  }
  return (
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  )
}

export default Maps
export default GoogleApiWrapper({
  apiKey: "AIzaSyC-OO_5b4MU6sh9W92P-8DuIQ4NbEnTu3M",
})(MapContainer)
