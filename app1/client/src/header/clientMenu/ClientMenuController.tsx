import React from "react";
import ClientMenuView from "./ClientMenuView";
import URLRouteProps from "../../routes/URLRouteProps";

interface Props extends URLRouteProps {

}

export default class ClientMenuController extends React.Component<Props> {
    render() {
        return (
            <ClientMenuView/>
        );
    }
}
