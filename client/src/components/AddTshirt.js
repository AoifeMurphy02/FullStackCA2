import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap"; // Add this import
import LinkInClass from "../components/LinkInClass";
import { SERVER_HOST } from "../config/global_constants";


export default class AddTShirts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "",
            name: "",
            description: "",
            category: "",
            type: "",
            color: "",
            product_image: [],
            sizes: [],
            price: 0,
            redirectToDisplayAllCars: localStorage.accessLevel < ACCESS_LEVEL_ADMIN
        };
    }

    componentDidMount() {
        this.inputToFocus.focus();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ wasSubmittedAtLeastOnce: true });

        const formInputsState = this.validate();

        if (Object.keys(formInputsState).every((index) => formInputsState[index])) {
            const tshirtObject = {
                brand: this.state.brand,
                name: this.state.name,
                description: this.state.description,
                category: this.state.category,
                type: this.state.type,
                color: this.state.color,
                price: this.state.price,
                wasSubmittedAtLeastOnce: false
            };

            axios.post(`${SERVER_HOST}/cars`, tshirtObject)
                .then((res) => {
                    if (res.data) {
                        if (res.data.errorMessage) {
                            console.log(res.data.errorMessage);
                        } else {
                            console.log("Record added");
                            this.setState({ redirectToDisplayAllCars: true });
                        }
                    } else {
                        console.log("Record not added");
                    }
                });
        }
    };

    validateBrand() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.brand));
    }

    validateName() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.name));
    }

    validateDescription() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.description));
    }

    validateCategory() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.category));
    }

    validatetype() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.type));
    }

    validatecolor() {
        const pattern = /^[A-Za-z]+$/;
        return pattern.test(String(this.state.color));
    }

    validate() {
        return {
            brand: this.validateBrand(),
            description: this.validateDescription(),
            category: this.validateCategory(),
            type: this.validatetype(),
            color: this.validatecolor(),
            price: this.validateprice()
        };
    }

    render() {
        let errorMessage = "";
        if (this.state.wasSubmittedAtLeastOnce) {
            errorMessage = <div className="error">Car Details are incorrect<br /></div>;
        }

        return (
            <div className="form-container">
                {this.state.redirectToDisplayAllCars ? <Redirect to="/DisplayAllCars" /> : null}

                <Form>
                    {errorMessage}

                    <Form.Group controlId="brand">
                        <Form.Label>brand</Form.Label>
                        <Form.Control ref={(input) => { this.inputToFocus = input; }} type="text" name="brand" value={this.state.brand} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="category">
                        <Form.Label>category</Form.Label>
                        <Form.Control type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="type">
                        <Form.Label>type</Form.Label>
                        <Form.Control type="text" name="type" value={this.state.type} onChange={this.handleChange} />
                    </Form.Group>

                    <LinkInClass value="Add" className="green-button" onClick={this.handleSubmit} />

                    <Link className="red-button" to={"/DisplayAllCars"}>Cancel</Link>
                </Form>
            </div>
        );
    }
}
