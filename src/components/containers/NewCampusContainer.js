import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { fetchCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";

export default class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            address:"",
            description:""
        }
    }

    handleChane = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description 
        }

        let newCampus = await this.props.addCampus(campus);

        this.setState({
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
