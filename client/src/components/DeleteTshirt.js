import React, { Component } from "react";
import axios from "axios";
import { SERVER_HOST } from "../config/global_constants";

export default class DeleteTshirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToDisplayAllTshirt: false
        };
    }
    componentDidMount() {
        axios.defaults.withCredentials = true; // needed for sessions to work
        axios.delete(`${SERVER_HOST}/tshirts/${this.props.match.params.id}`)
            .then(res => {
                console.log("Delete request successful:", res);
                if (res.data) {
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage);
                    } else { 
                        console.log("Record deleted");
                    }
                    this.setState({ redirectToDisplayAllTshirt: true });
                } else {
                    console.log("Record not deleted");
                }
            })
            .catch(error => {
                console.error("Error deleting record:", error);
            });
    }
}    
