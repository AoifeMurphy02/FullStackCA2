import React, {Component} from "react"

 import {Link} from "react-router-dom"


export default class TshirtTableRow extends Component 
{    
    render() 
    {
        return (
            <tr>
                <td>{ this.props.tshirt.brand}</td>
                <td>{ this.props.tshirt.name}</td>
                <td>{ this.props.tshirt.description}</td>           
                <td>{this.props.tshirt.category}</td>
                <td>{this.props.tshirt.color}</td>
                <td>{this.props.tshirt.sizes}</td>
                <td>{this.props.tshirt.price}</td>

               <td> <Link className="red-button" to={"/DeleteTshirt/" + this.props.tshirt._id}>Delete</Link></td>
               

      

              <td> <Link className="green-button" to={"/EditTshirt/" + this.props.tshirt._id}>Edit</Link></td>

             
               
                
               
            </tr>
        )
    }
}