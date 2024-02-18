import React, {Component} from "react"

import axios from "axios"


import Table from "./TshirtTable"

import {SERVER_HOST} from "../config/global_constants"

export default class DisplayTshirts extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            tshirts:[]
        }
    }
    
    
    componentDidMount() 
    {
        axios.get(`${SERVER_HOST}/tshirts`)
        .then(res => 
        {
            if(res.data)
            {
                
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                {           
                    console.log("Records read")   
                    this.setState({tshirts: res.data}) 
                }   
            }
            else
            {
                console.log("Record not found")
            }
        })
    }

  
    render() 
    {   
        return (           
            
                    <div className="table-container">
                    <Table tshirts={this.state.tshirts} /> 
                    
                    
                </div>
            
        )
    }
}