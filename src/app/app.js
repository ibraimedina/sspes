import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

function Login(props) {
  return (
      <Card>
        <CardHeader title="Login" />
        <CardText>
          <div>
            <TextField hintText="username"/>
          </div>
          <div>
            <TextField hintText="password" type="password"/>
          </div>
        </CardText>
        <CardActions>
          <FlatButton disabled label="Login"/>
        </CardActions>
      </Card>
  );
}
class App extends Component {
  render = ()  => (
      <MuiThemeProvider>
        <Login/>
      </MuiThemeProvider>
    );
}

export default App;
