import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


export default class MachineHardware extends React.Component {

	navCard(){
		if (window.location.pathname == "/signin/card"){
			//window.location.href = '/pin';
		}		
	}

	navMoney(){
		if (window.location.pathname == "/insert"){
//			window.location.href = '/print';
		}		
	}

  render() {
    return (
        <div id="machine">
        	<div class="col-md-6">
        	<Link to="/print">  <img src="/img/MoneyHole.jpg" onClick={(e) => {this.navMoney();}}/> </Link>
        	</div>
        	<div class="col-md-6">         	
        	<Link to="/pin">  <img src="/img/IMG_7768.jpeg" onClick={(e) => {this.navCard();}}/>    </Link>
        	</div>
        </div>         
      
    );
  }
}
