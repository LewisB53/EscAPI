import React from 'react'

class UserDetails extends React.Component{

  constructor(props){
    super(props)
  }

  handleClick(event){
  }

  render (){
      return (
        <div>
       <a className = 'members'> {this.props.obj.name} </a>
        </div>
      )
  }
  
}  

export default UserDetails

