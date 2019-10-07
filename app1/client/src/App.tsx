import "./App.css";
import "./style/app.scss"
import React from "react";
import {User} from "shared/src/types/User";
import {isAdmin} from "./common/LoginUtils";

interface Props {

}

interface State {
    result: string;
}

export default class App extends React.Component<Props, State> {
    state = {result: ""};

    getUser = (e: any) => {
        e.preventDefault();
        fetch("/api/getUser").then(response => response.json()).then((user: User) => {
            this.setState({result: `id: ${user.id}, name: ${user.name}. isAdmin: ${isAdmin(user)}`});
        });
    };

    render() {
        return (
            <div>
                <h2>Demo app</h2>
                <p>Call backend service side</p>
                <button onClick={this.getUser}>getUser</button>
                <hr/>
                <p>Response:</p>
                <p>{this.state.result}</p>
            </div>
        );
    }
}
