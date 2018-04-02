import React from "react";
import "./index.css";
import axios from "axios";

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			title:null,
			datalist:[]
		}
	}

	render(){
		return <div id="list">
			<div id="header">
				<span><i className="iconfont icon-back"></i></span>
				<span>{this.state.title}</span>
				<span><i className="iconfont icon-skip"></i></span>
			</div>

			<ul id="select">
				<li>人气</li>
				<li>折扣</li>
				<li className="price">价格<span></span></li>
				<li>筛选</li>
			</ul>

			<ul id="main">
			{
				this.state.datalist.map(item=>
					<li key={item.productId} onClick={this.handleClick.bind(this,item.productId)}>
						<img src={item.imageUrl} />
						<div>

							{
								item.tagListDto[0]?
								<span>{item.tagListDto[0].tag}</span>	
								:null
							}
							<p>{item.brandName}</p>
							<p>{item.productName}</p>
							<p>
								<span>￥{item.price}</span>
								<span>￥{item.marketPrice}</span>
								<span>{item.discount}折</span>
							</p>
						</div>

					</li>
					)
			}
			</ul>
		</div>
	}

	componentDidMount(){
		axios.get(`/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1522491926813&summary=011081984f86a38a566f3dc3235a98a0&platform_code=H5`).then(res=>{
			// console.log(res.data.products)
			this.setState({
				datalist:res.data.products,
				title:res.data.eventName
			})
		})
	}

	handleClick(id){
		// console.log(this.props.match.params.id)
		// console.log(id);
		this.props.history.push(`/detail/${this.props.match.params.id}/${id}`)
	}
}

 export default List ;