import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './home'
import Matches from './matches'
import Players from './players'

function AppRouter() {
	return (
		<Router history={browserHistory}>
			<Route path="/matches" component={Matches}/>
			<Route path="/players" component={Players}/>
			<Route path="*" component={Home}/>
		</Router>
	)
}

export default AppRouter