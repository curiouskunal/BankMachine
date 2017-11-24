import React from "react";


export default class MachineHardware extends React.Component {

	navCard(){
		if (window.location.pathname == "/signin/card"){
			window.location.href = '/pin';
		}		
	}

	navMoney(){
		if (window.location.pathname == "/insert"){
			window.location.href = '/print';
		}		
	}

  render() {
    return (
        <div id="machine">
        	<div class="col-md-6">
        	<img src="/img/MoneyHole.jpg" onClick={(e) => {this.navMoney();}}/>
        	</div>
        	<div class="col-md-6">         	
        	<img src="/img/IMG_7768.jpeg" onClick={(e) => {this.navCard();}}/>    
        	</div>
        </div>         
      
    );
  }
}
