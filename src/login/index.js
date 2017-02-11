import React, { Component } from 'react'
import { VBox } from 'react-layout-components'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import LoginApi from './api'


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	onSubmit(e) {
		e.preventDefault()
		LoginApi.login(this.state.username, this.state.password, () => {
			this.props.onSuccess()
		})
	}

	render() {
		return (
			<Card>
				<form onSubmit={this.onSubmit}>
					<CardHeader title="Enter SSPES"/>
					<CardText><VBox>
						<TextField autoFocus={true} name="username" hintText="username" value={this.state.username} onChange={this.onChange}/>
						<TextField name="password" hintText="password" value={this.state.password} onChange={this.onChange} type="password"/>
					</VBox></CardText>
					<CardActions style={{float:'right'}}>
						<RaisedButton primary label="Login" type="submit"/>
					</CardActions>
				</form>
			</Card>
		)
	}
}

export default Login