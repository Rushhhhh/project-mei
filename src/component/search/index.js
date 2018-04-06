import React from "react";
import "./index.css";
import axios from "axios";

class Search extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="search">
			<div id="header">
				<div className="left">
					<span><i className="iconfont icon-search"></i></span>
					<input className="content" type="text" placeholder="解锁潮流" />
				</div>
				<div className="right">
					<button onClick={this.backClick.bind(this)}>返回</button>
				</div>
			</div>

			<div id="tips">
				<h2>搜索发现</h2>
				<ul>
					<li>GUCCI</li>
					<li>BURBERRY</li>
					<li>GIVENCHY</li>
					<li>MAC</li>
					<li>BALENCIAGA</li>
					<li>ESTEE LAUDER</li>
				</ul>
			</div>
		</div>
	}

	componentDidMount(){
		var content = document.getElementsByClassName('content')[0];

		var ul = document.createElement('ul');	
		ul.className = 'createul';
		var search = document.getElementById("search");
		search.appendChild(ul);		

		content.oninput = function(){
			// console.log(content.value);
			axios.get(`/appapi/search/searchSuggest/v3?text=${content.value}`). then(res=>{
				// console.log(res.data.result);
				ul.innerHTML = '';
			if(res.data.result.length>0){
					for(var i=0;i<res.data.result.length;i++){
					var li = document.createElement('li');
					li.innerHTML = res.data.result[i].name;
					ul.appendChild(li);
					}
				}else{
					ul.innerHTML = '';
				}

				

			})
		}
	}

	backClick(){
		this.props.history.go(-1);
	}
}

export default Search;