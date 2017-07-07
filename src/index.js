import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';  
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

  var config = {
    apiKey: "AIzaSyDmWnJlqd9Mkn7TjbR29a3cz-JxFKC1oeA",
    authDomain: "zero-project-da22e.firebaseapp.com",
    databaseURL: "https://zero-project-da22e.firebaseio.com",
    storageBucket: "zero-project-da22e.appspot.com",
    messagingSenderId: "424960790329"
  };
  firebase.initializeApp(config);



ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
