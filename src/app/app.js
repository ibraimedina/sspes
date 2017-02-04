import React, { Component } from 'react';
import { Center, Page, VBox } from 'react-layout-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppDefaultTheme from '../theme/theme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



function Login(props) {
  return (
    <Card>
      <CardHeader title="Enter SSPES"/>
      <CardText><VBox>
          <TextField hintText="username"/>
          <TextField hintText="password" type="password"/>
      </VBox></CardText>
      <CardActions style={{float:"right"}}>
        <RaisedButton primary label="Login"/>
      </CardActions>
    </Card>
  );
}

class App extends Component {
  render = ()  => (
    <MuiThemeProvider muiTheme={AppDefaultTheme}>
      <Page>
        <Center height={"100%"}>
          <Login/>
        </Center>
      </Page>
    </MuiThemeProvider>
  );
}

export default App;
