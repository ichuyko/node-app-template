import "./App.css";
import React from "react";
import logo from "./logo.svg";
import {User} from "shared/src/User";
import {Button} from "antd";
import {Route, RouteComponentProps, RouteProps, Router} from "react-router";
import {RoutesURL} from "./route/Routes";
import {createBrowserHistory}  from "history";
import {Link} from "react-router-dom";
import Icon from "antd/lib/icon";

interface State {
    user: User;
}

interface Props {
    user: User;
}

export default class App extends React.Component<Props, State> {

    private customHistory = createBrowserHistory();

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {user: props.user};
    }

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
            <Router history={this.customHistory}>
                <div className="App">
                    <header>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            User from state: {JSON.stringify(this.state)}
                        </p>
                        <span onClick={this.getUser}>getUser</span>
                        <span onClick={this.getUser2}>getUser2</span>
                        <span onClick={this.getUser3}>getUser3</span>
                        <p>
                            <Link to={RoutesURL.HOME}><Icon type="home" /></Link>
                            <Link to={RoutesURL.USER_PROFILE}><Icon type="user" /></Link>
                            <Link to={RoutesURL.ACCOUNT_PROFILE}><Icon type="bank" /></Link>
                        </p>
                    </header>
                    <Button>antd button</Button>

                    <Route exact path={RoutesURL.HOME} render={() => {
                        return (
                            <div>
                                HOME
                            </div>
                        );
                    }}/>
                    <Route exact path={RoutesURL.USER_PROFILE} render={(props: RouteComponentProps) => {
                        return (
                            <div>
                                User profile
                                {JSON.stringify(props.match.params)}
                            </div>
                        );
                    }}/>
                    <Route exact path={RoutesURL.ACCOUNT_PROFILE} render={() => {
                        return (
                            <div>
                                Account profile
                            </div>
                        );
                    }}/>
                </div>
            </Router>
        );

    }
}
