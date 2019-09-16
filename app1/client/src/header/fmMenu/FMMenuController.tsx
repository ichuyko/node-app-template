import React from "react";
import FMMenuView from "./FMMenuView";
import URLRouteProps from "../../routes/URLRouteProps";

interface Props extends URLRouteProps {

}

export default class FMMenuController extends React.Component<Props> {
    render() {
        return (
            <FMMenuView/>
        );
    }
}
