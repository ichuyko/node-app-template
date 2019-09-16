import React from "react";
import HeaderView from "./HeaderView";
import URLRouteProps from "../routes/URLRouteProps";

interface Props extends URLRouteProps {

}

export default class HeaderController extends React.Component<Props> {
    render() {
        return (
            <HeaderView/>
        );
    }
}
