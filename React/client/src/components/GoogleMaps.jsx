import React from "react"
import GoogleMapsLoader from "react-google-maps-loader"


const GOOGLE_MAPS_API_KEY = "AIzaSyAEhLqdgJAeCEv4iJJathug5I6wV8910NE" // Change your api key 
var Loader = require('react-loader');
class GoogleMaps extends React.Component {

    constructor() {
        super()
        this.state = {
            map: null,
        }
    }
 
    componentDidMount() {
        if (this.props.GoogleMaps)
            this.initMap()
        
    }
 
    componentDidUpdate(prevProps) {
        if (!prevProps.GoogleMaps && this.props.GoogleMaps)
            this.initMap()
        
    }
 
    initMap() {
        const map = new GoogleMaps.Map(this.ref_map)
        this.setState({map})
    }
 
    render() {
     
        const {GoogleMaps} = this.props
 
          return (GoogleMaps
              ? <div ref={ref => this.ref_map = ref} />
              : <Loader />
        )
    }
}
 
export default GoogleMapsLoader(GoogleMaps, {
  libraries: ["places", "geometry"],
  key: GOOGLE_MAPS_API_KEY,
})