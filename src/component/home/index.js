import React from "react";
import "./index.css";
import axios from "axios";

import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
			bannerList:[],
			navList:[],
			catgList:[],
			mainList:[]
		}
	}

	render(){
		return <div id="home">
			<div id="search">
				<div className="left">
					<input type="text" placeholder="搜索商品 分类 功效"/>
					<span><i className="iconfont icon-search"></i></span>
				</div>
				<div className="right">
					<span><i className="iconfont icon-account"></i></span>
				</div>
			</div>
			<ul id="nav1">
				<li className="left active"><a>首页</a></li>
				<li className="left"><a>极速免税店</a></li>
				<li className="left"><a>母婴</a></li>
				<li className="left"><a>轻奢</a></li>
				<li className="left"><a>名品特卖</a></li>
			</ul>

			<div id="banner">
				<ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 3000}} key={this.state.bannerList.length}>
	               {
	               	this.state.bannerList.map(item=>
	               		<img src={item.imgUrl} key={item.id}/>
	               		)
	               }
	            </ReactSwipe>
			</div>

			<ul id="navul">
			{
				this.state.navList.map(item=>
					<img src={item.categoryImgStr} key={item.categoryOneId}/>
					)
			}
			</ul>

			<div id="coupon">
				<img src="https://cdn14.mei.com/category/20180328/c4f7fe5055115a69e7a223fddfa7956ace6dc3676f54cd06.gif" />
				<img src="https://cdn12.mei.com/category/20180328/c4f7fe5055115a6917df47c24d88923878124244265805bc.jpg" />
			</div>

			<div id="hot">
				<img src="https://cdn13.mei.com/category/20170915/20170915102858016.jpg@345w_380h_2e_75q" />
				<img src="https://cdn13.mei.com/category/20170915/20170915102850373.jpg@345w_380h_2e_75q" />
			</div>

			<ul id="catg">
			{
				this.state.catgList.map(item=>
					<img src={item.brandLogoUrl} key={item.eventId}/>
					)
			}
			<li>
			<p>MORE</p><p>查看更多</p>
			</li>
			</ul>

			<ul id="main">
			{
				this.state.mainList.map(item=>
					<li key={item.eventId} onClick={this.handleClick.bind(this,item.eventId,item.urlkey)}>
						<img src={item.imageUrl} />
						<div>
							<p>{item.englishName}</p>
							<p>{item.chineseName}</p>
							<p>{item.discountText}</p>
						</div>
						
					</li>
					)
			}
			</ul>

			<div id="bottom">
				<p>400 - 664 - 6698</p>
				<ul>
					<li><a>首页</a></li>
					<li><a>客户端</a></li>
					<li><a>登陆</a></li>
					<li><a>注册</a></li>
				</ul>
				<p>浙ICP备16004860号-1</p>

			</div>



			<ul id="footer">
				<li><i className="iconfont icon-store"></i>首页</li>
				<li><i className="iconfont icon-trade"></i>拼团</li>
				<li><i className="iconfont icon-cart"></i>购物车</li>
				<li><i className="iconfont icon-account"></i>我的</li>
			</ul>
			


		</div>
	}

	componentDidMount(){
		//banner
		axios.get("/appapi/home/marketingBannerNewZone/v3?silo_code=3&timestamp=1522481061819&summary=484bc6bc8a7384fac7c142df59c0eac7").then(res=>{
			// console.log(res.data);
			this.setState({
				bannerList:res.data.banners
			})
		})
		//navul
		axios.get("/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2041000100000000044,2042000100000000329,2120000100000000225&timestamp=1522481062043&summary=0ea14a3cb1dcdbd7cad431f38ed15860&platform_code=H5").then(res=>{
			// console.log(res.data.resultList[0].data);
			this.setState({
				navList:res.data.resultList[0].data
			})
		})

		//catg
		axios.get("/appapi/beauty/beautyChannelBrands/v3").then(res=>{
			// console.log(res.data.brandWall);
			this.setState({
				catgList:res.data.brandWall
			})
		})

		//main
		axios.get("/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1522482652319&summary=655b11575275e4dabcd5b49bb2721b66&platform_code=H5").then(res=>{
			// console.log(res.data.eventList);
			this.setState({
				mainList:res.data.eventList
			})
		})
	}

	handleClick(id,key){
		// console.log(id,key);
		this.props.history.push(`/list/${id}`)
	}
}

 export default Home ;


