import React from "react";
import Icon from "antd/lib/icon";
import {Button} from "antd";
import LinkTo from "../../routes/LinkTo";
import {RoutesURL} from "../../routes/Routes";
import logo from "../../assets/svg/logo.svg";

export default class FMMenuView extends React.Component{
    render() {
        return (
            <div className="fm-menu">
                <div className="logo">
                    <img src={logo} className="fm-logo" alt="logo"/> FM
                </div>
                <div className="menu-items">
                </div>
                <div className="client">
                    <Button>
                        <LinkTo to={RoutesURL.ACCOUNT_PROFILE} params={{userId: 1, accountId: 2}}>
                            <Icon type="home" /> Account Profile
                        </LinkTo>
                    </Button>
                </div>
            </div>
        );
    }
}
