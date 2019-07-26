import "./App.css";
import logo from "./logo.svg";
import React from "react";
import {User} from "../../shared/User";

interface State {
    user: User;
}

interface Props {
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
                        User: {JSON.stringify(this.state.user.name ? this.state.user : this.props.user)}
                    </p>
                    <div onClick={this.getUser}>getUser</div>
                    <div onClick={this.getUser2}>getUser2</div>
                    <div onClick={this.getUser3}>getUser3</div>
                </header>
            </div>
        );

    }
}