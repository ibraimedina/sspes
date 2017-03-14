import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import MatchAPI from './api'
import PlayerAPI from '../players/api'

const goalsInputStyle = {
	width: '50px',
}

class AddMatchDialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			opened: false,
			playerHome: null,
			playerAway: null,
			teamHome: '',
			teamAway: '',
			goalsHome: 0,
			goalsAway: 0,
			availablePlayers: [],
		}

		this.onOpen = this.onOpen.bind(this)
		this.onClose = this.onClose.bind(this)
		this.onFormChange = this.onFormChange.bind(this)
		this.onSubmitNewMatch = this.onSubmitNewMatch.bind(this)
		this.onSubmitDone = this.onSubmitDone.bind(this)
	}

	componentDidMount() {
		PlayerAPI.list(availablePlayers => this.setState({
			...this.state,
			availablePlayers,
		}))
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

	onSelectChange(formField) {
		return (ev, i, payload) => this.setState({
			...this.state,
			[formField]: payload,
			[formField + 'Name']: this.state.availablePlayers[+i].name,
		})
	}

	onSubmitNewMatch() {
		this.setState({
			...this.state,
			submitting: true,
		})

		MatchAPI.create({
			...this.state,
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
			<FlatButton label="Add" primary={true} disabled={this.state.submitting}
				onTouchTap={this.onSubmitNewMatch}/>
		]
		const playerOptions = this.state.availablePlayers.map((p,i) => (
			<MenuItem key={i} value={p._id} primaryText={p.name} />
		))
		return (
			<div>
				<FlatButton label={this.props.label} primary={true} onTouchTap={this.onOpen} />
				<Dialog title="New match" open={this.state.opened} onRequestClose={this.onClose} actions={dialogActions}>
					<SelectField hintText="Home player" value={this.state.playerHome} onChange={this.onSelectChange('playerHome')}>
						{playerOptions}
					</SelectField>
					<TextField hintText="Team" name="teamHome" value={this.state.teamHome} onChange={this.onFormChange}/>
					<TextField hintText="Goals" name="goalsHome" type="number" value={this.state.goalsHome} onChange={this.onFormChange} style={goalsInputStyle}/>

					<SelectField hintText="Away player" value={this.state.playerAway} onChange={this.onSelectChange('playerAway')}>
						{playerOptions}
					</SelectField>
					<TextField hintText="Team" name="teamAway" value={this.state.teamAway} onChange={this.onFormChange}/>
					<TextField hintText="Goals" name="goalsAway" type="number" value={this.state.goalsAway} onChange={this.onFormChange} style={goalsInputStyle}/>
				</Dialog>
			</div>
		)
	}
}

export default AddMatchDialog