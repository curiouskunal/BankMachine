import React from "react";


export default class MachineHardware extends React.Component {

	nav(){
		console.log(window.location.pathname);
		if (window.location.pathname == "/signin/card"){
			window.location.href = '/home';
		}
		
	}

  render() {
    return (
        <div id="machine">
        	<img src="/img/IMG_7768.jpeg" onClick={(e) => {this.nav();}}/>    
        </div>         
      
    );
  }
}
