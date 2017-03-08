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
			player: {},
		}

		this.onOpen = this.onOpen.bind(this)
		this.onClose = this.onClose.bind(this)
		this.onFormChange = this.onFormChange.bind(this)
		this.onSubmitChanges = this.onSubmitChanges.bind(this)
		this.onSubmitDone = this.onSubmitDone.bind(this)
	}

	onOpen() {
		this.setState({
			...this.state,
			opened: true,
			player: {
				...this.props.player,
			},
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
			player: {
				...this.state.player,
				[ev.target.name]: ev.target.value,
			},
		})
	}

	onSubmitChanges() {
		this.setState({
			...this.state,
			submitting: true,
		})

		PlayerAPI.update(
			this.state.player,
			this.onSubmitDone,
		)
	}

	onSubmitDone(success) {
		this.setState({
			...this.state,
			opened: false,
			submitting: false,
		})
		if (success) this.props.onSave(this.state.player);
	}

	render() {
		const dialogActions = [
			<FlatButton label="Cancel" onTouchTap={this.onClose}/>,
			<FlatButton label="Save" primary={true} disabled={this.state.submitting} onTouchTap={this.onSubmitChanges}/>
		]
		return (
			<div>
				<FlatButton label={this.props.label} primary={true} onTouchTap={this.onOpen} />
				<Dialog title={this.state.player.name} open={this.state.opened} onRequestClose={this.onClose}
					actions={dialogActions}>
					<div>
						<TextField floatingLabelText="Goals" name="goals" type="number" min={0} value={this.state.player.goals} onChange={this.onFormChange}/>
						<TextField floatingLabelText="Matches" name="matches" type="number" min={0} value={this.state.player.matches} onChange={this.onFormChange}/>
					</div>
					<div>
						<TextField floatingLabelText="Cup titles" name="cupTitles" type="number" min={0} value={this.state.player.cupTitles} onChange={this.onFormChange}/>
						<TextField floatingLabelText="Cup runners up" name="cupRunnersUp" type="number" min={0} value={this.state.player.cupRunnersUp} onChange={this.onFormChange}/>
					</div>
					<div>
						<TextField floatingLabelText="Leagues titles" name="leagueTitles" type="number" min={0} value={this.state.player.leagueTitles} onChange={this.onFormChange}/>
						<TextField floatingLabelText="Leagues runners up" name="leagueRunnersUp" type="number" min={0} value={this.state.player.leagueRunnersUp} onChange={this.onFormChange}/>
					</div>
				</Dialog>
			</div>
		)
	}
}

export default AddPlayerDialog