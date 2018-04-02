import React from "react";
import "./index.css";

class Register extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="register">
			<div id="header">
				<span><i className="iconfont icon-back"></i></span>
				<span>注册</span>
				<span>登录</span>
			</div>
			<p>使用手机登录</p>
			<form>
				<input type="text" placeholder="请输入11位手机号"/>
				<div>
					<input type="text" placeholder="请输入验证码" className="left"/>
					<span className="right">验证</span> 
				</div>
				<input type="text" placeholder="6-16位登录密码" />
				<button>注册</button>
				<p>点击注册，表示同意 《聚美优品用户协议》</p>
			</form>
		</div>
	}
}


export default Register;