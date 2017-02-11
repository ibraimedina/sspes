import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppRouter from './router'
import AppTheme from './theme'

ReactDOM.render(
	<MuiThemeProvider muiTheme={AppTheme}>	
		<AppRouter/>
	</MuiThemeProvider>,
	document.getElementById('root')
)
