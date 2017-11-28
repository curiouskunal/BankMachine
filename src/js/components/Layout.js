import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Footer from "./Footer";
import Header from "./Header";
import Machine from "./Layout/Machine";
import MachineHardware from "./MachineHardware";

export default class Layout extends React.Component {
    
    componentWillMount(){
        window.root="src/";
    }
    
  constructor() {
    super();
    this.state = {
      title: "Welcome to our Bank Machine Interface",
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  render() {
    return (
      <div>
       <BrowserRouter>
       <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
            
            <Switch>
                <Route render={props => <Machine {...props}/> }/>
            </Switch>
        
            <MachineHardware />
            <Footer />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
