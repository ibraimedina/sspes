import React from 'react'
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'
import PlayersApi from './api'

class Players extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			players: []
		}

		this.updatePlayers = this.updatePlayers.bind(this)
		PlayersApi.listPlayers(this.updatePlayers)
	}

	updatePlayers(players) {
		this.setState({ players })
	}

	onPlayerSelect(rows) {
		window.console.debug(rows)
	}

	render() {
		const playerList = Array.of(...this.state.players).map((o,i) => (
			<Player key={i} player={o} />
		))

		return (
			<Table multiselectable={true} onRowSelection={this.onPlayerSelect} onCellClick={this.onPlayerSelect}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nome</TableHeaderColumn>
						<TableHeaderColumn>Gols</TableHeaderColumn>
						<TableHeaderColumn>Partidas</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={true} showRowHover={true}>
					{playerList}
				</TableBody>
			</Table>
		)
	}
}

function Player(props) {
	return (
		<TableRow hoverable={true} selectable={true}>
			<TableRowColumn>{props.player.name}</TableRowColumn>
			<TableRowColumn>{props.player.goals}</TableRowColumn>
			<TableRowColumn>{props.player.matches}</TableRowColumn>
		</TableRow>
	)
}

export default Players