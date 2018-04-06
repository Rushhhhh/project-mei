import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import App from "../App.js";
import Home from "../component/home";
import List from "../component/list";
import Detail from "../component/detail";
import Shopcar from "../component/shopcar";
import Login from "../component/login";
import Register from "../component/register";
import Search from "../component/search";
import React from "react";

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list/:id" component={List} />
				<Route path="/detail/:id1/:id2" component={Detail} />
				<Route path="/shopcar" component={Shopcar} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register}  />
				<Route path="/search" component={Search}  />
				<Redirect from="*" to="/home" />
			</Switch>	
		</App>
	</Router>


	)


export default router; 