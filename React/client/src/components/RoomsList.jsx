import React from 'react'

class RoomsList extends React.Component{
 
  constructor(props){
    super(props);

    this.state = {
    };
  }

  handleClick(event){
    this.props.handleSelectedRoom(this.props.obj)
  }

  render (){
    return (
      <div className= 'allroomsdiv'>
      <img className='image' src={this.props.obj.image} alt="escape-room-image" onClick={this.handleClick.bind(this)}/>
      </div>
      )
  }

}  

export default RoomsList
