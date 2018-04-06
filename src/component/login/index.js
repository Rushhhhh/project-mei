import React from "react";
import "./index.css";
import axios from "axios";


class Login extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="login">
			<div id="header">
				<span><i className="iconfont icon-back"></i></span>
				<span>登录</span>
				<span><a href="/register">注册</a></span>
			</div>
			<p>使用手机登录</p>
			<form>
				<input type="text" placeholder="请输入11位手机号" ref="phone" />
				<input type="password" placeholder="请输入密码" ref="password"/>

				<p><span>使用账号登录</span><span>30天内自动登录</span></p>
				<button type="button" onClick={this.submitClick.bind(this)}>登录</button>
			</form>

			<p id="warning"></p>
		</div>
	}

	submitClick(){
		var warning = document.getElementById("warning");
		var phone = this.refs.phone.value;
		var re = /^1[0-9]{10}$/;
		if(re.test(phone)){
			// console.log("right")
			axios.post("/apilogin",{
				phone:this.refs.phone.value,
				password:this.refs.password.value
			}).then(res=>{
				// console.log(res);
				window.validate = res.data;
				localStorage.setItem("userID",JSON.stringify(window.validate));
				console.log(localStorage.getItem("userID").length);
				console.log(window.validate);
				setTimeout(()=>{
					this.props.history.push("/home")
				},2000)
			}).catch(error=>{
				warning.innerHTML = "用户名和密码不匹配"
				setTimeout(()=>{
					window.location.href="http://localhost:3000/login" ;
				},2000)
				

			})
		}else{	
			warning.innerHTML = "请输入正确的手机号码"
		}	

		
	}
}


export default Login;