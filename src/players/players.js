import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AppApi from '../api/api';

class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};

		this.updatePlayers = this.updatePlayers.bind(this);
		AppApi.ListPlayers(this.updatePlayers);
	}

	updatePlayers(players) {
		this.setState({ players });
	}

	render() {
		const playerList = Array.of(...this.state.players).map((o,i) => (
			<Player key={i} player={o} />
		));
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nome</TableHeaderColumn>
						<TableHeaderColumn>Gols</TableHeaderColumn>
						<TableHeaderColumn>Partidas</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{playerList}
				</TableBody>
			</Table>
		);
	}
}

function Player(props) {
	return (
		<TableRow>
			<TableRowColumn>{props.player.name}</TableRowColumn>
			<TableRowColumn>{props.player.goals}</TableRowColumn>
			<TableRowColumn>{props.player.matches}</TableRowColumn>
		</TableRow>
	);
}

export default Players;