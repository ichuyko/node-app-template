import React from "react";
import {User} from "shared/src/User";

export default class LoginPageView extends React.Component{

    getUser = () => {
        fetch("/api/getUser")
            .then(response => response.json())
            .then((user: User) => {
                console.info(user);
            });
    };

    getUser2 = () => {
        fetch("/api/getUser2")
            .then(response => response.json())
            .then((user: User) => {
                console.info(user);
            }).catch((error) => {
            console.info(error);
        });
    };

    getUser3 = () => {
        fetch("/api/getUser3")
            .then(response => response.json())
            .then((user: User) => {
                console.info(user);
            });
    };

    render() {
        return (
            <div>
                <h1>This is LoginPageView</h1>
                <hr/>
                <p onClick={this.getUser}>getUser</p>
                <p onClick={this.getUser2}>getUser2</p>
                <p onClick={this.getUser3}>getUser3</p>
            </div>
        );
    }
}
