import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import App from "../App.js";
import Home from "../component/home";
import List from "../component/list";
import Detail from "../component/detail";
import Login from "../component/login";
import Register from "../component/register";
import React from "react";

const router = (
	<Router>
		<App>
			<Route path="/home" component={Home} />
			<Route path="/list/:id" component={List} />
			<Route path="/detail/:id1/:id2" component={Detail} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register}  />
		</App>
	</Router>


	)


export default router; 