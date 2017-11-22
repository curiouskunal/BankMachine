import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";
import ScreenWelcome from "./Machine/Screens/ScreenWelcome"
import ScreenSignIn from "./Machine/Screens/ScreenSignIn"

//var $ = require('jquery');

export default class Machine extends React.Component {
    
  render() { 
    return (
      <div id="content-wrapper">
        <BrowserRouter>
           <Switch>
               <Route path="/" exact render={props => <ScreenWelcome {...props} />}/>
               <Route path="/signin" exact render={props => <ScreenSignIn {...props} />}/>
           </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
