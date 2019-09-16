import React from "react";
import URLRouteProps from "../routes/URLRouteProps";
import FMMenuController from "./fmMenu/FMMenuController";
import {Route} from "react-router";
import ClientMenuController from "./clientMenu/ClientMenuController";
import {RoutesURL} from "../routes/Routes";
import "./style/headerView.scss";

interface Props extends URLRouteProps {

}

export default class HeaderController extends React.Component<Props> {
    render() {
        return (
            <header>
                <Route path={RoutesURL.HOME} component={FMMenuController}/>
                <Route path={RoutesURL.HOME} component={ClientMenuController}/>
            </header>
        );
    }
}
