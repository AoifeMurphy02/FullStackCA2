import React, { Component } from "react";

export default class LinkInClass extends Component {
    render() {
        return (
            <span 
                tabIndex="0" 
                className={this.props.className} 
                onClick={this.props.onClick}
            >     
                {this.props.value}
            </span>
        );
    }
}
