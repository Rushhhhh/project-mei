import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./component/sidebar/index.js";

class App extends Component {
	constructor(){
		super();
		this.state = {
			isShow:false
		}
	}

  render() {
    return (
      <div className="App">
        {this.props.children}
        {
        	this.state.isShow?
        	 <Sidebar></Sidebar>
        	 :null
        }
       
      </div>
    );
  }
}

export default App;
