import React from "react";
import "./index.css";
 
class Sidebar extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="sidebar">
			<ul>
				<li>面部护肤</li>
				<li>彩妆</li>
				<li>身体护肤</li>
				<li>香水</li>
				<li>美妆工具</li>
			</ul>
		</div>
	}
}

export default Sidebar;