import React, { Component } from 'react'
import axios from 'axios'

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
          name: event.target.name.value,
          address: event.target.address.value,
          description: event.target.description.value,
          imageUrl: event.target.url.value,
        };
        console.log(data)
        await axios
          .put(`/api/campuses/${this.state.campusEdit.Id}`, data)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
        // window.location.replace(`/campus/${this.state.campusEdit.Id}`);
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handlePut}>
                    <input  name = "name" type = "text" placeholder = "name"></input>
                    <input  name = "address" type = "text" placeholder = "address"></input>
                    <input  name = "description" type = "text" placeholder = "description"></input>
                    <input  name = "url" type = "text" placeholder = "url"></input>
                    <button type = "submit">Submit Changes</button>
                </form>
            </div>
        )
    }
}
