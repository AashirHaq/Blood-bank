import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';




class Dashboard extends Component{
    constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInDate = this.handleChangeInDate.bind(this);
}
    handleChange = (event, index, value) => this.setState({value});
   
    handleChangeInDate(e,newDate){
        this.setState({dateOfBirth:newDate});
}  
    handleSubmit(){
        let donorData= {
            fullname : this.refs.fullname.getValue(),
            // gender: this.refs.gender.getValue(),
            address: this.refs.address.getValue(),
            contact: this.refs.contact.getValue(),
            bloodgroup: this.refs.bloodgroup.getValue(),
            dateOfBirth: this.refs.dateOfBirth.state.date.getTime()
        };
        firebase.database().ref('donorsData').push({donorData})
        browserHistory.push('/Donorlist');
       
}   
    render(){
       return( 
       <div className = "text-center">
           <br/>
           <h2>Donor Regestration</h2>
             <TextField ref="fullname" floatingLabelText="Full Name" /><br />
             <SelectField
               floatingLabelText="Gender"
               value={this.state.value}
               onChange={this.handleChange}>
                 <MenuItem value={1} primaryText="Male" ref = "gender" />
                 <MenuItem value={2} primaryText="Female" ref = "gender"/>
                 <MenuItem value={3} primaryText="Other" ref = "gender"/>
             </SelectField><br />
             <TextField ref="address" floatingLabelText="Address" /><br />
             <TextField ref="contact" floatingLabelText="Contact No." type = "number"/><br />
             <TextField ref="bloodgroup" floatingLabelText="Blood Group"/><br />
             <DatePicker 
               ref="dateOfBirth"
               floatingLabelText="Date Of Birth"
               value={this.state.dateOfBirth}
               onChange={this.handleChangeInDate} />
            <div >
                <Link to="/">
                    <RaisedButton label="Cancel"/>
                </Link>
                <RaisedButton label="Submit" onTouchTap={this.handleSubmit} primary={true}/>
            </div>
        </div>
       )
    }
}

export default Dashboard;