import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from 'react-router';

const style = {
  margin: 12,
};

class Bloodbank extends Component{
  render(){
    return(
      <div>
        <h1>Blood bank</h1>
        <Link to = "/Dashboard"><RaisedButton label="Registration" primary={true} style={style}/></Link>
      </div>
    )
  }
}

export default Bloodbank;
