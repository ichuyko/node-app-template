import "./App.css";
import React from "react";
import Icofont from "react-icofont";
import logo from "./logo.svg";
import {User} from "../../shared/src/User";

interface State {
    spin: boolean;
    user: User;
}

interface Props {
    user: User;
}

export default class App extends React.Component<Props, State> {
    state = {user: {} as User, spin: false};

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
                <header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        User: {JSON.stringify(this.state.user.name ? this.state.user : this.props.user)}
                    </p>
                    <div onClick={this.getUser}>getUser</div>
                    <div onClick={this.getUser2}>getUser2</div>
                    <div onClick={this.getUser3}>getUser3</div>
                </header>
                <button onClick={() => this.setState({spin: true})}>Start spin</button>
                <button onClick={() => this.setState({spin: false})}>Stop spin</button>
                <br/>
                <Icofont icon="key" rotate="270" flip="h"/>
                <Icofont icon="key" rotate="270" flip="h" size="1"/>
                <Icofont icon="key" rotate="270" flip="h" size="2"/>
                <Icofont icon="dart" size="3" />
                <Icofont icon="dart" size="5" spin={this.state.spin} />
                <Icofont icon="dart" size="10" flip={"v"} rotate={"270"} />
                <Icofont icon="spinner-alt-4" size="3" spin={true}/>
            </div>
        );

    }
}
