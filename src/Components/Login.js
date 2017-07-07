import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Login extends Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this)
  }


  
   login() {
       let email= this.refs.email.getValue()
       let password= this.refs.password.getValue()

const auth = firebase.auth();
const promise = auth.signInWithEmailAndPassword(email,password);
promise.then(() =>{
   console.log('You are singed in');
   browserHistory.push('/Bloodbank');
   
});


}
  render(){
    return(
      <div className = "text-center">
         <br />
        <h1>Login</h1>
         <TextField hintText="Email" ref = 'email' />
         <br />
         <TextField hintText="Password" ref = 'password' type = "password"/>
         <br />
         <RaisedButton label="Login" primary={true} style={style} onClick = {this.login}/>
         <br />
         <br />
        <Link to = "/Signup" style = {{fontSize: '16px'}}>Create account</Link>
      </div>
    )
  }

}
export default Login;
