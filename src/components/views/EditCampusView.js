import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class EditCampusView extends Component {
    constructor(props){
        super(props)
        this.state = {
            campusEdit: {
                Id:window.location.href.slice(window.location.href.lastIndexOf("/") + 1),
                
            }
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handlePut = this.handlePut.bind(this);
    }

    componentDidMount(){
        console.log(this.props.location)
    }

    async handlePut(event) {
        event.preventDefault();
        let data = {
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          gpa: event.target.gpa.value,
        };
        console.log(data)
        await axios
          .put(`/api/campus/${this.state.campusEdit.Id}`, data)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
        window.location.replace(`/campus/${this.state.campusEdit.Id}`);
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handlePut}>
                    <input  name = "name" type = "text" placeholder = "name"></input>
                    <input  name = "address" type = "text" placeholder = "address"></input>
                    <input  name = "url" type = "float" placeholder = "url"></input>
                    <button type = "submit">Submit Changes</button>
                </form>
                <Link to = "/"> Home </Link>
            </div>
        )
    }
}
