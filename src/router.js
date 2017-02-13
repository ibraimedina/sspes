import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Base from './base'
import Home from './home'
import Matches from './matches'
import Players from './players'

function AppRouter() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Base}>
				<IndexRoute component={Home}/>

				<Route path="/matches" component={Matches}/>
				<Route path="/players" component={Players}/>
			</Route>
		</Router>
	)
}

export default AppRouter