import React from "react";
import "./index.css";
import axios from "axios";

class Register extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div id="register">
			<div id="header">
				<span><i className="iconfont icon-back"></i></span>
				<span>注册</span>
				<span><a href="#/login">登录</a></span>
			</div>
			<p>使用手机登录</p>
			<form>
				<input type="text" placeholder="请输入11位手机号" ref="phone"/>
				<div>
					<input type="text" placeholder="请输入验证码" className="left"/>
					<span className="right">验证</span> 
				</div>
				<input type="password" placeholder="6-16位登录密码" ref="password"/>
				<button type="button" onClick={this.submitClick.bind(this)}>注册</button>
				<p>点击注册，表示同意 《聚美优品用户协议》</p>
			</form>
			<p id="warning"></p>

		</div>
	}

	submitClick(){
		var warning = document.getElementById("warning");
		var phone = this.refs.phone.value;
		var password = this.refs.password.value;
		var re1 = /^1[0-9]{10}/;
		var re2 = /\w{6,16}/;
		if(re1.test(phone)){
			if(re2.test(password)){
				// console.log("right")
				axios.post("/apiregister",{
					phone:this.refs.phone.value,
					password:this.refs.password.value
				}).then(res=>{
					// window.location.href="http://localhost:3000/login"
					setTimeout(()=>{
						this.props.history.push("/login")
					},1000)
					
				}).catch(error=>{
					console.log(error)
				})
			}else{
				warning.innerHTML = "请输入6-16位密码" ;
			}
		}else{
			warning.innerHTML = "请输入正确的手机号码" ;
		}

			


		
	}
}


export default Register;