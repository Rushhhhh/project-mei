import React from "react";
import "./index.css";

class Shopcar extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="shopcar">
			<div id="header">
				<span onClick={this.handleBackClick.bind(this)}><i className="iconfont icon-back"></i></span>
				<p>购物车</p>
				<span><i className="iconfont icon-attachment"></i></span>
			</div>

			<div id="main">
				<div>
					<input type="checkbox"/>
					<h2>魅力购发货</h2>
				</div>
				<div className="goods">
					<input type="checkbox"  />
					<img src="https://p1.jmstatic.com/product/001/209/1209758_spu_normal/1209758_200_200.jpg" />
					<div className="left">
						<p><span>极速免税</span>unichi玫瑰果精华胶囊120粒</p>
						<p>60粒*2瓶</p>
						<p>¥259</p>
					</div>
					<div className="right">
						<p>*1</p>
						<p>编辑</p>
					</div>
				</div>
				<div className="goods">
					<input type="checkbox"  />
					<img src="https://p1.jmstatic.com/product/001/209/1209758_spu_normal/1209758_200_200.jpg" />
					<div className="left">
						<p><span>极速免税</span>unichi玫瑰果精华胶囊120粒</p>
						<p>60粒*2瓶</p>
						<p>¥259</p>
					</div>
					<div className="right">
						<p>*1</p>
						<p>编辑</p>
					</div>
				</div>
			</div>

			<div id="all">
				<input type="checkbox"/>
				<span>全选</span>
				<span>合计</span>
				<span>￥ 1217</span>
				<span>去结算（3）</span>
			</div>

			<ul id="footer">
				<li><a href="/home"><i className="iconfont icon-store"></i>首页</a></li>
				<li><a><i className="iconfont icon-trade"></i>拼团</a></li>
				<li><a href="/shopcar"><i className="iconfont icon-cart"></i>购物车</a></li>
				<li><a><i className="iconfont icon-account"></i>我的</a></li>
			</ul>

		</div>
	}

	handleBackClick(){
		this.props.history.go(-1);
	}
}



export default Shopcar;