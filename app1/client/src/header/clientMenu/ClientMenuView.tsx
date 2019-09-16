import React from "react";
import Icon from "antd/lib/icon";
import {Button} from "antd";
import LinkTo from "../../routes/LinkTo";
import {RoutesURL} from "../../routes/Routes";

export default class ClientMenuView extends React.Component{
    render() {
        return (
            <div className="client-menu">
                <div className="logo">
                    <LinkTo to={RoutesURL.HOME}>
                        <span>LOGO</span>
                    </LinkTo>
                </div>
                <div className="menu-items">
                    <div className="menu-item">
                        <Button>
                            <LinkTo to={RoutesURL.HOME}><Icon type="home" /></LinkTo>
                        </Button>
                    </div>
                    <div className="menu-item">
                        <Button>
                            <LinkTo to={RoutesURL.USER_PROFILE} params={{userId: "2"}}><Icon type="user" />User Profile</LinkTo>
                        </Button>
                    </div>
                </div>
                <div className="search">
                    SEARCH
                </div>
            </div>
        );
    }
}
