import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import * as firebase from 'firebase';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

class Donorlist extends Component {
    constructor(props){
        super(props)
        this.state ={
            donors: [],
            completed: 0,
            disable: ''
        }
    }

      componentDidMount() {
    this.timer = setTimeout(() => this.progress(100), 100);
  }

    componentWillMount(){
        var donors = [];
        firebase.database().ref('/donorsData/').on('value', (data)=> {
            let obj = data.val();

            for(var prop in obj){
                donors.push(obj[prop].donorData);
               
                this.setState({
                    donors: donors
                })
                 console.log(this.state.donors);
            }
        })
    }

      componentWillUnmount() {
    clearTimeout(this.timer);
        this.setState({
        disable: 'disable'
    })
  }

    progress(completed) {
    if (completed > 100) {
      this.setState({completed: 0});
    } else {
      this.setState({completed});
      const diff = Math.random() * 100;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

render(){
    return(
        <div className = "text-center">
            <h1>Donors Detail</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Full Name</TableHeaderColumn>
                        <TableHeaderColumn>Address</TableHeaderColumn>
                        <TableHeaderColumn>Blood Group</TableHeaderColumn>
                        <TableHeaderColumn>Contact</TableHeaderColumn>
                        <TableHeaderColumn>Date of birth</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>

            {this.state.donors.map((d,i)=>{
                return(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>{d.fullname}</TableRowColumn>
                        <TableRowColumn>{d.address}</TableRowColumn>
                        <TableRowColumn>{d.bloodgroup}</TableRowColumn>
                        <TableRowColumn>{d.contact}</TableRowColumn>
                        <TableRowColumn>{d.dateOfBirth}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
                )

            })}
                    <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={80}
          thickness={5}
          style = {{disable: this.state.disable}}
        />

        </div>
    )
}

}

export default Donorlist