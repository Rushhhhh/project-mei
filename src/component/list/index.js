import React from "react";
import "./index.css";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			title:null,
			datalist:[],
			isMore:true,
			isShow:true
		}

		this.current = 1;
		this.total = 0;
	}

	render(){
		return <div id="list">
		{
			this.state.isShow?<p id="loading" >loading...</p>
			:null
		}


			<div id="header">
				<span onClick={this.handleBackClick.bind(this)}><i className="iconfont icon-back"></i></span>
				<span>{this.state.title}</span>
				<span><i className="iconfont icon-skip"></i></span>
			</div>

			<ul id="select">
				<li>人气</li>
				<li>折扣</li>
				<li className="price">价格<span></span></li>
				<li>筛选</li>
			</ul>
			<InfiniteScroll
			    pageStart={0}
			    initialLoad={false}
			    loadMore={this.lodaMore.bind(this)}
			    threshold={10}
			    hasMore={this.state.isMore}
			    loader={<div className="loader" key={0}>Loading ...</div>}
			>
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
			</InfiniteScroll>

			<ul id="aside">
				<li><a href="/shopcar"><i className="iconfont icon-cart"></i></a></li>
				<li onClick={this.upClick.bind(this)}><i className="iconfont icon-less"></i></li>
			</ul>
		</div>
	}

	

	lodaMore(){
		console.log("到底部了",this);
		this.current++;
		if(this.current>this.total){
			this.setState({
				isMore:false
			})
			return ;
		}

		axios.get(`/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1522491926813&summary=011081984f86a38a566f3dc3235a98a0&platform_code=H5`).then(res=>{
			this.setState({
				datalist:[...this.state.datalist,...res.data.products]
			})
		})
	}

	componentWillMount(){

	}

	componentDidMount(){
		axios.get(`/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1522491926813&summary=011081984f86a38a566f3dc3235a98a0&platform_code=H5`).then(res=>{
			// console.log(res.data.products)
			this.setState({
				datalist:res.data.products,
				title:res.data.eventName,
				isShow:false
			})

			this.total = res.data.totalPages
		})
		var aside = document.getElementById('aside');
		window.onscroll = function(){
			if(window.pageYOffset>200){
				aside.style.display = "block";
			}else{
				aside.style.display = "none";
			}
		}
	}

	handleClick(id){
		// console.log(this.props.match.params.id)
		// console.log(id);
		this.props.history.push(`/detail/${this.props.match.params.id}/${id}`)
	}

	handleBackClick(){
		this.props.history.go(-1);
	}

	upClick(){
		// console.log(document.documentElement.scrollTop)
		document.documentElement.scrollTop = 0;
	}


}

 export default List ;