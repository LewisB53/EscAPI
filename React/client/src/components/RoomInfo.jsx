import React from 'react'

class RoomInfo extends React.Component{

  constructor(props){
    super(props)
  }

    render (){
      return (
        <div className='room-info'  alt="item">
        <a className= 'title'> {this.props.obj.name}</a><img className="logo-tiny" src={this.props.obj.logo}/>
          <ul>
            <li>{this.props.obj.description}</li>
            <a className= "links" href={this.props.obj.website}>More Info</a>
            <li>Tel:{this.props.obj.call}</li>
          </ul>
        </div>
        )
    }

  }  

export default RoomInfo
