import React, { Component } from 'react';

//create your first component
class TrafficLight extends Component {
	constructor(){
	  super();
		this.state = {
		  stateRed: "off",
		  stateYellow: "off",
		  stateGreen: "off",
		  statePurple: "off",
		 
		};
	}
  
	  render(){
		return(
		  <div>
			<div id="box"></div>
			<div id="trafics">
			  <div className= "bulb red" id= {this.state.stateRed} 
			  onClick={()=>this.setState({stateRed: "on", stateYellow: "off", stateGreen: "off", statePurple: "off"})}>
			  </div>
			  <div className= "bulb yellow" id= {this.state.stateYellow} 
			  onClick={()=>this.setState({stateRed: "off", stateYellow: "on", stateGreen: "off", statePurple: "off"})}>
			  </div>
			  <div className= "bulb green" id= {this.state.stateGreen} 
			  onClick={()=>this.setState({stateRed: "off", stateYellow: "off", stateGreen: "on", statePurple: "off"})}>
			  </div>
			  <div className= "bulb purple" id= {this.state.statePurple} 
			  onClick={()=>this.setState({stateRed: "off", stateYellow: "off", stateGreen: "off", statePurple: "on"})}>
			  </div>
			</div>
		  </div>);
	  }
  }
  
  export default TrafficLight;
