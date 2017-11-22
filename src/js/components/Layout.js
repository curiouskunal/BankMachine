import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Machine from "./Layout/Machine"

export default class Layout extends React.Component {
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
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Machine />
        <Footer />
      </div>
    );
  }
}
