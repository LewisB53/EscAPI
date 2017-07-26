import React from 'react'
import Cabinet from '../components/Cabinet.jsx'

class Trophy extends React.Component{

  constructor(props){
    super(props),
    this.state = {
      showCabinet: false
    }
  }

  handleClick(event){
    this.setState({showCabinet: !this.state.showCabinet});
  }

  render (){
      return (
        <div className = 'members'>
          <img className='imagethumb' src="images/trophy.jpeg" alt="item" onClick={this.handleClick.bind(this)}/>

          {
            this.state.showCabinet
              ? <Cabinet />
              : null
          }

        </div>
      )
  }
  
}  

export default Trophy
