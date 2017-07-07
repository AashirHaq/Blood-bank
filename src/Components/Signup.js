import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Signup extends Component {
  constructor(props){
    super(props)
    this.signup = this.signup.bind(this)

  }



 signup(e){
    e.preventDefault();
    let email= this.refs.email.getValue()
    let password=this.refs.password.getValue()
    let firstname= this.refs.firstname.getValue()
    let lastname= this.refs.lastname.getValue()

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.then(() =>{
    console.log('sign up');
    browserHistory.push('/Login');
})

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
  }
  else{
    console.log('not logged in');
  }
})
 }

 
  render(){
    return(
      <div className = "text-center">
        <h1>Sign up</h1>
         <TextField hintText="First name"  ref = 'firstname'/>
         <br />
         <TextField hintText="Last name" ref = 'lastname'/>
         <br />
         <TextField hintText="Email" ref = 'email' />
         <br />
         <TextField hintText="Password" ref = 'password' type = "password"/><br />

         <RaisedButton label="Signup" primary={true} style={style} onClick = {this.signup}/>
      </div>
    )
  }
}
export default Signup;
