import React from 'react'
import RoomsList from '../components/RoomsList.jsx'
import NavBar from '../components/NavBar.jsx'
import RoomInfo from '../components/RoomInfo.jsx'
import SideArrows from '../components/SideArrows.jsx'
import Trophy from '../components/Trophy.jsx'
import UserDetails from '../components/UserDetails.jsx'
import LoginBox from '../auth/LoginBox'
import GoogleMaps from '../components/GoogleMaps.jsx'

import googleMapsLoader from "react-google-maps-loader"

import lodash from 'lodash'

const rooms = []

class MainContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      rooms:rooms,
      stats:"stats",
      selectedObject : {name:"Select an Escape Room"},
      image: 'images/trophy.jpeg',
      onMapClick:{ lat:-25.363882, lng: 131.044922 }
    }
  }

handleSelectedRoom(room){
this.setState({selectedObject:room})
}

    componentDidMount() {
      const rooms = 'http://localhost:5000/rooms';
      const stats = 'http://localhost:5000/stats';
      const request = new XMLHttpRequest();
      
      request.open('GET', rooms);
      request.onload = () => {
        if (request.status === 200) {
          const jsonString = request.responseText;
          const roomsFromApi = JSON.parse(jsonString);
          this.setState({ rooms: roomsFromApi });
        }
      }
      request.send();


      const request2 = new XMLHttpRequest();

      request2.open('GET', stats);

      request2.setRequestHeader('Content-Type', "application/json")
      request2.withCredentials = true

      request2.onload = () => {
        if (request2.status === 200) {
          const jsonStringStats = request2.responseText;
          const statsFromApi = JSON.parse(jsonStringStats);
          this.setState({ stats: statsFromApi });
        }
      }
      request2.send();
    }


  render(){
    const allRooms = this.state.rooms.map((Room)=>{
      return <RoomsList handleSelectedRoom={this.handleSelectedRoom.bind(this)} key={Room.id} obj={Room}/>
    })

    const navBar = this.state.rooms.map((Room)=>{
      return <NavBar key={Room.id} obj={Room} />
    })
    _.pullAt(navBar, [0,1,3,4,5,6,7,9,11,12]);

    return (
      <div className = "background">
        <Trophy/>
    
        <h3 className = "navBar"> { navBar } </h3>

        <div className ="login-box">
        <LoginBox url="http://localhost:5000/" />
        </div>


        <div className= "rooms">
         { allRooms }
        </div>

        <SideArrows/>

        <RoomInfo className= 'room-info' obj={this.state.selectedObject} />
        <UserDetails obj={this.state.stats}/>
        
        <GoogleMaps className = 'map' />

      </div>

    )
  }

};

export default MainContainer;