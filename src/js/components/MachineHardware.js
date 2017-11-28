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
      console.log(this.props);
    return (
        <div id="machine">
        <Switch>
               
                <Route path="/signin/card" exact render={props =>                   
                    <div> 
                    <div class="col-md-6">
        	            <img src={window.root+"/img/MoneyHole.jpg"} />
        	        </div>
                    <div class="col-md-6">         	
        	            <Link to="/pin">  <img src={window.root+"/img/IMG_7768.jpeg"} />    </Link>
        	        </div>
        	        </div>                                                
                }/>
                                                        
                <Route path="/insert" exact render={props =>        
                    <div>
                    <div class="col-md-6">
        	            <Link to="/deposit/loading">  <img src={window.root+"/img/MoneyHole.jpg"} /> </Link>
                    </div>
                    <div class="col-md-6">         	
        	            <img src={window.root+"/img/IMG_7768.jpeg"} />
        	        </div>                                                      
        	        </div>                                                      
                }/>
                
                <Route path="/take" exact render={props =>        
                    <div>
                    <div class="col-md-6">
        	            <Link to="/print">  <img src={window.root+"/img/MoneyHole.jpg"} /> </Link>
                    </div>
                    <div class="col-md-6">         	
        	            <img src={window.root+"/img/IMG_7768.jpeg"} />
        	        </div>                                                      
        	        </div>                                                      
                }/>
                
                <Route render={props => 
                    <div>
                    <div class="col-md-6">
        	            <img src={window.root+"/img/MoneyHole.jpg"} />
                    </div>
                    <div class="col-md-6">         	
        	            <img src={window.root+"/img/IMG_7768.jpeg"} />
        	        </div>  
        	        </div>  
                }/>
                
        </Switch>
        
        	
        </div>         
      
    );
  }
}


