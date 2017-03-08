import React from 'react'
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'

import AddPlayerDialog from './add-dialog'
import EditPlayerDialog from './edit-dialog'
import PlayersApi from './api'

class Players extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			players: [],
			sortBy: 'cupTitles',
			sortOrder: false, // DESC; ASC = true
		}

		this.updatePlayers = this.updatePlayers.bind(this)
		this.onEditPlayer = this.onEditPlayer.bind(this)
		this.sort = this.sort.bind(this)
		PlayersApi.list(this.updatePlayers)
	}

	updatePlayers(players) {
		this.setState({ players })
	}

	onEditPlayer(position) {
		const scope = this
		return function(player) {
			scope.setState({
				...this.state,
				players: [
					...scope.state.players.slice(0, position),
					player,
					...scope.state.players.slice(position+1),
				],
			})
		}
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
			<Player key={i} player={o} onEdit={this.onEditPlayer(i)}></Player>				
		))
		return (
			<div>
				<AddPlayerDialog label="New" />
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow onCellClick={this.sort}>
							<TableHeaderColumn name="name">Name</TableHeaderColumn>
							<TableHeaderColumn name="leagueTitles">Leagues</TableHeaderColumn>
							<TableHeaderColumn name="cupTitles">Cups</TableHeaderColumn>
							<TableHeaderColumn name="goals">Goals</TableHeaderColumn>
							<TableHeaderColumn name="name"></TableHeaderColumn>
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
		<TableRow hoverable={true}>
			<TableRowColumn>{props.player.name}</TableRowColumn>
			<TableRowColumn>{props.player.leagueTitles} - {props.player.leagueAppearances}</TableRowColumn>
			<TableRowColumn>{props.player.cupTitles} - {props.player.cupAppearances}</TableRowColumn>
			<TableRowColumn>{props.player.goals}</TableRowColumn>
			<TableRowColumn>
				<EditPlayerDialog label="Edit" player={props.player} onSave={props.onEdit}></EditPlayerDialog>
			</TableRowColumn>
		</TableRow>
	)
}

export default Players