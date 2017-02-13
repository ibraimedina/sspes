import React from 'react'
import { browserHistory } from 'react-router'
import { Page, Box } from 'react-layout-components'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import ListIcon from 'material-ui/svg-icons/action/view-list'
import HomeIcon from 'material-ui/svg-icons/action/home'

const listIcon = <ListIcon />
const homeIcon = <HomeIcon />

class Base extends React.Component {
	constructor(props) {
		super(props)
		this.onTouchTap = this.onTouchTap.bind(this)
	}

	onTouchTap(href) {
		browserHistory.push(href)
	}

	render() {
		return (
			<Page>
				<Box column fit justifyContent="space-between">
					{this.props.children}
					<BottomNavigation>
						<BottomNavigationItem label={'Home'} icon={homeIcon} onTouchTap={() => this.onTouchTap('/')}/>
						<BottomNavigationItem label={'Players'} icon={listIcon} onTouchTap={() => this.onTouchTap('/players')}/>
						<BottomNavigationItem label={'Matches'} icon={listIcon} onTouchTap={() => this.onTouchTap('/matches')}/>
					</BottomNavigation>
				</Box>
			</Page>
		)
	}
}
		
export default Base	