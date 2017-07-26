import React from 'react'


class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }
  
  signOut(event){
    // sign out request here
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("DELETE", this.props.url)
    request.setRequestHeader("Content-Type", "appliction/json")
    request.withCredentials = true
    request.onload = () =>{
      if(request.status === 204){
        this.props.onSignOut(null)
      }
    }
    request.send(null)
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default SignOut