import React from "react";
import logo from "../assets/svg/logo.svg";
import LinkTo from "../routes/LinkTo";
import {RoutesURL} from "../routes/Routes";
import Icon from "antd/lib/icon";
import "./style/headerView.scss"
import {Button} from "antd";

export default class HeaderView extends React.Component{
    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="logo"/>
                <br/>
                <Button>
                    <LinkTo to={RoutesURL.HOME}><Icon type="home" /></LinkTo>
                </Button>
                <Button>
                    <LinkTo to={RoutesURL.USER_PROFILE} params={{userId: "2"}}><Icon type="user" /></LinkTo>
                </Button>
                <Button>
                    <LinkTo to={RoutesURL.ACCOUNT_PROFILE} params={{userId: "2", accountId: "3"}}> <Icon type="bank" /></LinkTo>
                </Button>
                <Button>
                    <LinkTo to={RoutesURL.LOGIN}><Icon type="bank" /> Login</LinkTo>
                </Button>
            </div>
        );
    }
}
