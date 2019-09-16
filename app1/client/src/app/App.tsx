import "./App.css";
import React from "react";
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history";
import {RoutesURL} from "../routes/Routes";
import URLRouteProps from "../routes/URLRouteProps";
import LoginPageController from "../pages/login/LoginPageController";
import HeaderController from "../header/HeaderController";
import "./style/app.scss"

export default class App extends React.Component {

    private customHistory = createBrowserHistory();

    render() {
        return (
            <Router history={this.customHistory}>
                <div className="main">
                    <header>
                        <Route path={RoutesURL.HOME} component={HeaderController}/>
                    </header>
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
