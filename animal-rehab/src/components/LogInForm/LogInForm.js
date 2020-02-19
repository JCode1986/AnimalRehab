import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://64.225.2.201:8000/api/';
// const url = 'animal-back-end.xyz'
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.obtainTokens = this.obtainTokens.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    async obtainTokens(e) {

        e.preventDefault();

        try {
            const response = await axios.post(url + 'token/', {
                username: this.state.username,
                password: this.state.password,
            });
            console.log(response.data)
            this.props.onSuccess(response.data);

        } catch (error) {
            console.error('ugh', error);
        }
    }

    render() {
        return (
        <>        
            <form  className='RegisterUser' onSubmit={this.obtainTokens}>
                <h1>Login</h1>
                <input className='username' name="username" type="text" value={this.state.username} placeholder="username" onChange={this.changeHandler}/>
                <input className='password' name="password" type="password" value={this.state.password} placeholder="password" onChange={this.changeHandler}/>
                <input className='button' type="submit" placeholder="submit"/>
            </form>
        </> 
        
        )
    }

}


export default LoginForm;

