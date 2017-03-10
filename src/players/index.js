import React from 'react'
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'

import AddPlayerDialog from './add-dialog'
import EditPlayerDialog from './edit-dialog'
import PlayersApi from './api'

const smColumn = {
	width: '20%',
}

class Players extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			players: [],
			sortBy: 'cupTitles',
			sortOrder: false, // DESC; ASC = true
			editDialogOpen: false,
		}

		this.updatePlayers = this.updatePlayers.bind(this)
		this.onSavePlayer = this.onSavePlayer.bind(this)
		this.selectPlayer = this.selectPlayer.bind(this)
		this.closeEditDialog = this.closeEditDialog.bind(this)
		this.sort = this.sort.bind(this)
		PlayersApi.list(this.updatePlayers)
	}

	updatePlayers(players) {
		this.setState({ players })
	}

	selectPlayer(position) {
		const scope = this
		return function() {
			scope.setState({
				...scope.state,
				selectedPlayer: position,
				editDialogOpen: true,
			})
		}
	}

	closeEditDialog() {
		this.setState({
			...this.state,
			editDialogOpen: false,
		})
	}

	onSavePlayer(player) {
		this.setState({
			...this.state,
			players: [
				...this.state.players.slice(0, this.state.selectedPlayer),
				player,
				...this.state.players.slice(this.state.selectedPlayer+1),
			],
		})
	}

	sort(by) {
		const sortBy = by.target.getAttribute('name')
		let sortOrder = this.state.sortOrder
		if (this.state.sortBy === sortBy) 
			sortOrder = !sortOrder
		const sortFn = (p1, p2) => (p1[sortBy] < p2[sortBy]) ^ sortOrder

		this.setState({
			...this.state,
			players: this.state.players.slice().sort(sortFn),
			sortBy,
			sortOrder,
		})
	}

	render() {
		const playerList = Array.of(...this.state.players).map((o,i) => (
			<Player key={i} player={o} onClick={this.selectPlayer(i)}></Player>				
		))

		return (
			<div>
				<AddPlayerDialog label="New" />
				<EditPlayerDialog hasButton={false} player={this.state.players[this.state.selectedPlayer]} opened={this.state.editDialogOpen}
					onClose={this.closeEditDialog} onSave={this.onSavePlayer}>
				</EditPlayerDialog>
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow onCellClick={this.sort}>
							<TableHeaderColumn name="name">Name</TableHeaderColumn>
							<TableHeaderColumn name="leagueTitles" style={smColumn}>Leagues</TableHeaderColumn>
							<TableHeaderColumn name="cupTitles" style={smColumn}>Cups</TableHeaderColumn>
							<TableHeaderColumn name="goals" style={smColumn}>Goals</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{playerList}
					</TableBody>
				</Table>
			</div>
		)
	}
}

function Player(props) {
	return (
		<TableRow hoverable={true} onCellClick={props.onClick}>
			<TableRowColumn>{props.player.name}</TableRowColumn>
			<TableRowColumn style={smColumn}>{props.player.leagueTitles} - {props.player.leagueAppearances}</TableRowColumn>
			<TableRowColumn style={smColumn}>{props.player.cupTitles} - {props.player.cupAppearances}</TableRowColumn>
			<TableRowColumn style={smColumn}>{props.player.goals}</TableRowColumn>
		</TableRow>
	)
}

export default Players