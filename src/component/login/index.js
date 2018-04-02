import React from "react";
import "./index.css";

class Login extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="login">
			<div id="header">
				<span><i className="iconfont icon-back"></i></span>
				<span>登录</span>
				<span>注册</span>
			</div>
			<p>使用手机登录</p>
			<form>
				<input type="text" placeholder="请输入11位手机号"/>
				<div>
					<input type="text" placeholder="请输入验证码" className="left"/>
					<span className="right">验证</span> 
				</div>
				
				<p><span>使用账号登录</span><span>30天内自动登录</span></p>
				<button>登录</button>
			</form>
		</div>
	}
}


export default Login;