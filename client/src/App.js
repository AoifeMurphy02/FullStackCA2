<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/main.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HomeScreen from './components/HomeScreen';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">ShirtShack</Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/product/:slug" component={ProductDetails} />
              <Route path="*" component={HomeScreen} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
>>>>>>> d96a3d07bf1f52dec5a8d87fde0389763f89e6d0
