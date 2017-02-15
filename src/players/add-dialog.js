import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import PlayerAPI from './api'

class AddPlayerDialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			opened: false,
			playerName: '',
		}

		this.onOpen = this.onOpen.bind(this)
		this.onClose = this.onClose.bind(this)
		this.onFormChange = this.onFormChange.bind(this)
		this.onSubmitNewPlayer = this.onSubmitNewPlayer.bind(this)
		this.onSubmitDone = this.onSubmitDone.bind(this)
	}

	onOpen() {
		this.setState({
			...this.state,
			opened: true,
		})
	}

	onClose() {
		this.setState({
			...this.state,
			opened: false,
		})
	}

	onFormChange(ev) {
		this.setState({
			...this.state,
			[ev.target.name]: ev.target.value,
		})
	}

	onSubmitNewPlayer() {
		this.setState({
			...this.state,
			submitting: true,
		})

		PlayerAPI.create({
			name: this.state.playerName
		}, this.onSubmitDone)
	}

	onSubmitDone() {
		this.setState({
			...this.state,
			opened: false,
			submitting: false,
		})
	}

	render() {
		const dialogActions = [
			<FlatButton label="Cancel" onTouchTap={this.onClose}/>,
			<FlatButton label="Add" primary={true} disabled={this.state.submitting || !this.state.playerName}
				onTouchTap={this.onSubmitNewPlayer}/>
		]
		return (
			<div>
				<FlatButton label={this.props.label} primary={true} onTouchTap={this.onOpen} />
				<Dialog title="New player" open={this.state.opened} onRequestClose={this.onClose}
					actions={dialogActions}>
					<TextField hintText="Name" name="playerName" value={this.state.playerName} onChange={this.onFormChange}/>
				</Dialog>
			</div>
		)
	}
}

export default AddPlayerDialog