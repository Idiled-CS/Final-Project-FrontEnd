import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class EditStudentView extends Component {
    constructor(props){
        super(props)
        this.state = {
            studentEdit: {
                Id:window.location.href.slice(window.location.href.lastIndexOf("/") + 1),
                firstname:"",
                lastname: "",
                gpa: ""
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
          .put(`/api/students/${this.state.studentEdit.Id}`, data)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
        window.location.replace(`/student/${this.state.studentEdit.Id}`);
    }

    // handleChange(value){
    //     const updatedStudent = {...this.state.studentEdit}
    //     const inputField = value.target.name
    //     const inputValue = value.target.value
        
    //     updatedStudent[inputField] = inputValue

    //     console.log("Updated Student Values")
    //     this.setState({studentEdit: updatedStudent})

    //     console.log(this.state.studentEdit)
    // }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.handlePut}>
                    <input  name = "firstname" type = "text" placeholder = "First Name"></input>
                    <input  name = "lastname" type = "text" placeholder = "Last Name"></input>
                    <input  name = "gpa" type = "float" placeholder = "GPA"></input>
                    <button type = "submit">Submit Changes</button>
                </form>
                <Link to = "/"> Home </Link>
            </div>
        )
    }
}
