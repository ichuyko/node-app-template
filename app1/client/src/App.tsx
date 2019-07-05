import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "../../shared/User";
import {stringify} from "querystring";

interface Props {
    user: User;
}

interface State {
    user: User;
}

export default class App extends React.Component<Props, State> {
    state = {user: {} as User};

    getUser = () => {
        fetch("/api/getUser")
            .then(response => response.json())
            .then((user: User) => {
                this.setState({user});
            });
    };

    getUser2 = () => {
        fetch("/api/getUser2")
            .then(response => response.json())
            .then((user: User) => {
                this.setState({user});
            }).catch((error) => {
            this.setState({user: {} as User});
        });
    };

    getUser3 = () => {
        fetch("/api/getUser3")
            .then(response => response.json())
            .then((user: User) => {
                this.setState({user});
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React, user: {JSON.stringify(this.state.user.name ? this.state.user: this.props.user)}
                    </a>
                    <div onClick={this.getUser}>getUser</div>
                    <div onClick={this.getUser2}>getUser2</div>
                    <div onClick={this.getUser3}>getUser3</div>
                </header>
            </div>
        );

    }
}