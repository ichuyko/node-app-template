import "./App.css";
import React from "react";
import logo from "../assets/svg/logo.svg";
import {Button} from "antd";
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history";
import Icon from "antd/lib/icon";
import {RoutesURL} from "../routes/Routes";
import LinkTo from "../routes/LinkTo";
import URLRouteProps from "../routes/URLRouteProps";
import LoginPageController from "../pages/login/LoginPageController";

export default class App extends React.Component {

    private customHistory = createBrowserHistory();

    render() {
        return (
            <Router history={this.customHistory}>
                <div className="App">
                    <header>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            <LinkTo to={RoutesURL.HOME}><Icon type="home" /></LinkTo>
                            <LinkTo to={RoutesURL.USER_PROFILE} params={{userId: "2"}}><Icon type="user" /></LinkTo>
                            <LinkTo to={RoutesURL.ACCOUNT_PROFILE} params={{userId: "2", accountId: "3"}}><Icon type="bank" /></LinkTo>
                            <LinkTo to={RoutesURL.LOGIN}><Icon type="bank" />Login</LinkTo>
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
                    <Route exact path={RoutesURL.USER_PROFILE} render={(props: URLRouteProps) => {
                        return (
                            <div>
                                User profile
                                {JSON.stringify(props.match.params.userId)}
                            </div>
                        );
                    }}/>
                    <Route exact path={RoutesURL.ACCOUNT_PROFILE} render={(props: URLRouteProps) => {
                        return (
                            <div>
                                Account profile
                                {JSON.stringify(props.match.params)}
                            </div>
                        );
                    }}/>
                    <Route exact path={RoutesURL.LOGIN} component={LoginPageController} />
                </div>
            </Router>
        );
    }
}
