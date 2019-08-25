import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            age: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
           [name]: value
        })
    }

    submitForm = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    render() {
        const { name, age } = this.state;
        return (
                <form onSubmit={this.submitForm}>
                    <label>用户名：</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                    <label>年龄：</label>
                    <input
                    type="text"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
        )
    }

}

export default Form