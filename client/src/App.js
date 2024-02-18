import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./css/App.css"
import "./css/main.css"
import EditTshirt from "./components/EditTshirt"
import DeleteTshirt from "./components/DeleteTshirt"
import DisplayTshirts from "./components/DisplayTshirts"

    
export default class App extends Component 
{
    render() 
    {
        return (
            <BrowserRouter>
                <Switch>                 
                    <Route exact path="/" component={DisplayTshirts} />
                    <Route exact path="/EditTshirt/:id" component={EditTshirt} />
                    <Route exact path="/DisplayTshirts" component={DisplayTshirts}/> 
                    <Route path="*" component={DisplayTshirts}/>       
                    <Route path="/DeleteTshirt/:id" component={DeleteTshirt} />
                   
                     
                </Switch>
            </BrowserRouter>
        )
    }
}