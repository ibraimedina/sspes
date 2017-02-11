import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import AppApi from '../api'

class Matches extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			matches: []
		}

		this.updateMatches = this.updateMatches.bind(this)
		AppApi.ListMatches(this.updateMatches)
	}

	updateMatches(matches) {
		this.setState({ matches })
	}

	render() {
		const matchList = Array.of(...this.state.matches).map((o,i) => (
			<Match key={i} match={o} />
		))
		return (
			<Table>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
					<TableRow>
						<TableHeaderColumn>Jogadores casa</TableHeaderColumn>
						<TableHeaderColumn>Equipe casa</TableHeaderColumn>
						<TableHeaderColumn>Gols casa</TableHeaderColumn>
						<TableHeaderColumn>Gols fora</TableHeaderColumn>
						<TableHeaderColumn>Equipe fora</TableHeaderColumn>
						<TableHeaderColumn>Jogadores fora</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{matchList}
				</TableBody>
			</Table>
		)
	}
}

function Match(props) {
	return (
		<TableRow>
			<TableRowColumn>{props.match.playerHomeName}</TableRowColumn>
			<TableRowColumn>{props.match.teamHome}</TableRowColumn>
			<TableRowColumn>{props.match.goalsHome}</TableRowColumn>
			<TableRowColumn>{props.match.goalsAway}</TableRowColumn>
			<TableRowColumn>{props.match.teamAway}</TableRowColumn>
			<TableRowColumn>{props.match.playerAwayName}</TableRowColumn>
		</TableRow>
	)
}

export default Matches