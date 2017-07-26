import React from 'react'

class NavBar extends React.Component{

  constructor(props){
    super(props)
  }

    handleClick(event){
      if (this.props.obj.id == [0]) {window.scrollTo(0, 0)};
      if (this.props.obj.id == 86) {window.scrollTo(1080, 0)};
      if (this.props.obj.id == 88) {window.scrollTo(2950, 0)};
      if (this.props.obj.id == 91) {window.scrollTo(3950, 0)};
    }

    render (){
      return (
        <div className = 'inline'>
        <img className='imagethumb' src={this.props.obj.logo} alt="item" onClick={this.handleClick.bind(this)}/>
        </div>
        )
    }

  }  

export default NavBar
