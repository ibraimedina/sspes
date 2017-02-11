import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Center, Page } from 'react-layout-components'

import Login from '../login'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class Home extends Component {
	constructor(props) {
		super(props)
		this.onLogin = this.onLogin.bind(this)
	}

	onLogin() {
		browserHistory.push('/players')
	}

	render() {
		return (
			<Page>
				<Center height={'100%'}>
					<Login onSuccess={this.onLogin}/>
				</Center>
			</Page>
		)
	}
}

export default Home
