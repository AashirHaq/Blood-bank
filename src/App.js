import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './Components/Login';
import Bloodbank from './Components/Bloodbank';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Donolist from './Components/Donorlist';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {
  
render(){
  return(
    <div>
  <AppBar
    title={<span style={styles.title}>Welcome to Blood Bank</span>}
    iconElementLeft={<IconButton></IconButton>}
    iconElementRight={<FlatButton label="Login" />}
  />
    <Router history = {browserHistory}> 
      <Route path = '/' component = {Login}>
            </Route>
      <Route path = 'App' component = {App}/>
      <Route path = 'Signup' component = {Signup}/>
      <Route path = 'Bloodbank' component = {Bloodbank}/>
      <Route path = 'Dashboard' component = {Dashboard}/>
      <Route path = 'Donorlist' component = {Donolist}/>
      <Route path = 'Login' component = {Login}/>

  </Router>
    </div>
  )
}
}

export default App;
