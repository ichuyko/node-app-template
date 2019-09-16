import React from "react";
import {generatePath, Link} from "react-router-dom";
import {RoutesURL} from "./Routes";
import URLParams from "./URLParams";

interface Props {
    to: RoutesURL;
    params?: URLParams | any;
}

export default class LinkTo extends React.Component<Props> {
    render () {
        return (
            <Link to={generatePath(this.props.to, this.props.params)}>
                {this.props.children}
            </Link>
        );
    }
}
