import React, { Component } from 'react';

const label = flipped => {
	if (flipped === null) {
    	return 'Where are you?';
    }
    return flipped ? 'Welcome' : 'Good bye';
}


class Layout extends Component {

  constructor(props) {
  	super(props);
    this.state = { flipped: null };
  }

  mouseOut() {
    console.log("Mouse out!!!");
    this.setState({flipped: false});
  }
  
  mouseOver() {
    console.log("Mouse over!!!");
    this.setState({flipped: true});
  }
  
  render() {
  	return (
    	<div className='hello' onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
        	{label(this.state.flipped)}
    	</div>
    );
  }
}

export default Layout;