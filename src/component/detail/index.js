import React from "react";
import "./index.css";
import axios from "axios";

class Detail extends React.Component{
	constructor(){
		super();
		this.state = {
			infoList:[],
			obj1:{},
			array1:[],
			array2:[],
			hotList:[]
		}
	}

	render(){
		return <div id="detail">
			<div id="header">
				<span onClick={this.handleBackClick.bind(this)}><i className="iconfont icon-back"></i></span>
				<div>
					<p>{this.state.infoList.brand}</p>
					<p>{this.state.infoList.itemPriceDto?'￥'+this.state.infoList.itemPriceDto.price:null}</p>
				</div>
				<span><i className="iconfont icon-skip"></i></span>
			</div>

			<div id="main">
				<img src={this.state.infoList.images?this.state.infoList.images[0].bigImgUrl:null} />
				<div>
					<p>{this.state.infoList.name}</p>
					<p>￥{this.state.infoList.marketPrice}</p>
					<p>
						<span>￥{this.state.infoList.price}</span>
						{
							this.state.infoList.newTagList?
							<span>{this.state.infoList.newTagList[0].tag}</span>
							:null
						}
						{
							this.state.infoList.newTagList?
							<span>{this.state.infoList.newTagList[1].tag}</span>
							:null
						}
					</p>
					<p>{this.state.infoList.deliver_date}</p>
				</div>
			</div>

			<div id="table">
			<ul>
				<li>
					<span>闪购</span>
					<span className="time"></span>
				</li>
				<li>
					<span>服务</span>
					<div>
					{
						this.state.infoList.service_labels?
						this.state.infoList.service_labels.map(item=>
							<span key={item.label_title}>{item.label_title}</span>
							)
						:null
					}
					</div>
				</li>
			</ul>
			</div>

			<div id="info">
				<div className="section1">
					<h2>套装信息</h2>
					<p>{this.state.infoList.name}</p>
					<img src={this.state.infoList.images?this.state.infoList.images[0].bigImgUrl:null} />
				</div>
				<div className="section2">
				    <div className="left">
						{
							this.state.infoList.description?
							<div>
							{
								this.state.infoList.description.attributesList.map(item=>
									<li key={item.name}>{item.name}</li>
									)
							}
							</div>
							:null
						}
						<li>主要成分与功效</li>
						<li>使用方法</li>
						<li>特别提示</li>
					</div>
				    <div className="right">
						{
							this.state.infoList.description?
							<div>
							{
								this.state.infoList.description.attributesList.map(item=>
									<li key={item.value}>{item.value}</li>
									)
							}
							</div>
							:null
						}
						<li>{this.state.infoList.description?this.state.infoList.description.groupAttribute.主要成分与功效:null}</li>
						<li>{this.state.infoList.description?this.state.infoList.description.groupAttribute.使用方法:null}</li>
						<li>{this.state.infoList.description?this.state.infoList.description.groupAttribute.特别提示:null}</li>
					</div>
				</div>
				<div className="section3">
					<h2>商品详情</h2>
					<img src={this.state.infoList.images?this.state.infoList.images[0].bigImgUrl:null} />
					<p>{this.state.infoList.description?this.state.infoList.description.message:null}</p>
				</div>
				<div className="section4">
					<h2>退货提示</h2>
					<p>{this.state.infoList.returnNote}</p>
				</div>
				<div className="section5">
					<span>{this.state.infoList.brand}</span>
					<span>品牌主页<i className="iconfont icon-more"></i></span>
				</div>
				<div className="section6">
					<h2>价格说明</h2>
					<p>划线价格：为品牌指导价，并非原价；</p>
					<p>未划线价格：为魅力惠实时售价；</p>
				</div>
				<div className="message">
					<h2>用户评论({this.state.infoList.productReviews?this.state.infoList.productReviews.totalCount:null})<span>查看全部<i className="iconfont icon-more"></i></span></h2>
					{ 
						this.state.infoList.productReviews?
						<div>

						  <div>
							<p>{this.state.infoList.productReviews.reviews[0]?this.state.infoList.productReviews.reviews[0].userName:null}</p>
							<p>{this.state.infoList.productReviews.reviews[0]?this.state.infoList.productReviews.reviews[0].content:null}</p>
							<p>{this.state.infoList.productReviews.reviews[0]?this.state.infoList.productReviews.reviews[0].dateTime:null}</p>
						  </div>
						</div>
						
						:null
					}
				</div>
			</div>

			<div id="hot">
				<h2>搭配推荐</h2>
				<ul>
				{
					this.state.hotList.map(item=>
						<li key={item.productId} >
							<img src={item.imgUrl} />
							<div>

								{
									item.tagListDto[0]?
									<span>{item.tagListDto[0].tag}</span>	
									:null
								}
								<p>{item.brand_name}</p>
								<p>{item.product_name}</p>
								<p>
									<span>￥{item.price}</span>
									<span>￥{item.market_price}</span>
									<span>{item.discount}折</span>
								</p>
							</div>

						</li>
						)
				}
				</ul>
			</div>

			<div id="footer">
				<div className="left"><a href="/shopcar">
				<i className="iconfont icon-cart"></i>
				<p>购物车</p></a>
				</div>
				<ul className="right">
					<li onClick={this.onCartClick.bind(this)}>加入购物车</li>
					<li>立即购买</li>
				</ul>
			</div>

		</div>
	}



	componentDidMount(){
		// console.log(this.props.match.params.id1)
		// console.log(this.props.match.params.id2)
		axios.get(`/appapi/product/detail/v3?categoryId=${this.props.match.params.id1}&productId=${this.props.match.params.id2}&platform_code=H5&timestamp=1522563640405&summary=11c2485d8914ec9e34c71d56388a86eb`).then(res=>{
			console.log(res.data.infos);
			this.setState({
				infoList:res.data.infos
				
			})


			this.timer = setInterval(function(){
				var nowDate = new Date();
				var time = res.data.infos.eventEndDate-Math.floor(nowDate.getTime()/1000);
				// console.log(time);
				var iD = Math.floor(time/86400);
				var iH = Math.floor(time%86400/3600);
				var iM = Math.floor(time%86400%3600/60);
				var iS = Math.floor(time%60);
				// console.log(iD,iH,iM,iS)
				var timetext = document.getElementsByClassName("time")[0];
				timetext.innerHTML = '距离结束'+iD+'天'+iH+'小时'+iM+'分'+iS+'秒';
			},500)



			
		})

		axios.get(`/appapi/product/hot/v3?categoryId=${this.props.match.params.id1}&productId=${this.props.match.params.id2}&platform_code=H5`).then(res=>{
			// console.log(res.data.categoryList);
			this.setState({
				hotList:res.data.categoryList
			})
		})
	}

	componentWillUnmount(){
		clearTimeout(this.timer);
		console.log("clear");
	}
	handleBackClick(){
		this.props.history.go(-1);
	}

	onCartClick(){
		var xx = JSON.parse(localStorage.getItem("userID"));
		axios.post("/apicart",{
			who:xx[0]._id,
			info:[this.state.infoList.name,this.state.infoList.brand,this.state.infoList.price,this.state.infoList.images[0].smallImgUrl]
		}).then(res=>{
			console.log(res.data)
		})
	}
}

 export default Detail ;