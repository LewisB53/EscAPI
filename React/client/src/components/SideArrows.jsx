import React from 'react'
 
let move = 0

class SideArrows extends React.Component{

  constructor(props){
    super(props)
  }

    rightArrowClick(event){
      if (move < 3750) {move = move + 350};
      window.scrollTo(move, 0);
    }

    leftArrowClick(event){
      if (move > 0) {move = move - 350}
      window.scrollTo(move, 0);
    }

    render (){
      return (
          <div className="arrows">
            <button className="left-arrow arrow" onClick={this.leftArrowClick.bind(this)}>L </button>
            <button className="right-arrow arrow" onClick={this.rightArrowClick.bind(this)}> R</button>
          </div>
        )
    }

  }  

export default SideArrows
