import React, { Component } from 'react';
import { Center, Page, VBox } from 'react-layout-components';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

import { browserHistory } from 'react-router'
import AppApi from '../api';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pass: ''
		};
		this.onChangeUser = this.onChangeUser.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
    	this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeUser(event) {
		this.setState({user: event.target.value});
	}

	onChangePass(event) {
		this.setState({pass: event.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		AppApi.LogIn(this.state.user, this.state.pass, (msg) => {
			browserHistory.push('/players');
		});
	}

	render = () => (
		<Card>
			<form onSubmit={this.onSubmit}>
				<CardHeader title="Enter SSPES"/>
				<CardText><VBox>
					<TextField name="username" hintText="username" value={this.state.user} onChange={this.onChangeUser}/>
					<TextField name="password" hintText="password" value={this.state.pass} onChange={this.onChangePass} type="password"/>
				</VBox></CardText>
				<CardActions style={{float:"right"}}>
					<RaisedButton primary label="Login" type="submit"/>
				</CardActions>
			</form>
		</Card>
	);
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: false,
		};
	}

	onSubmit() {

	}

	render = ()	=> (
		<Page>
			<Center height={"100%"}>
				<Login />
			</Center>
		</Page>
	);
}

export default App;
