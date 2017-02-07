import React from "react"
import { Router, Route, browserHistory } from 'react-router'
import App from "./app"
import Players from "../players/players"

function AppRouter() {
	return (
		<Router history={browserHistory}>
			<Route path="/matches" component={App}/>
			<Route path="/players" component={Players}/>
			<Route path="*" component={App}/>
		</Router>
	);
}

export default AppRouter;