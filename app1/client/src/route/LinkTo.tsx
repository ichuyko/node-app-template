import React from "react";
import {URLParams} from "./URLParams";
import {Link} from "react-router-dom";
import {RoutesURL} from "./Routes";

interface Props {
    to: RoutesURL;
    params?: URLParams;
}

export default class LinkTo extends React.Component<Props> {

    injectParams = (to: string, params?: any): string => {
        let urlWithData: string = to;
        const regEx: RegExp = new RegExp(/:([a-zA-Z]*)/gm);
        if (params) {
            let result: RegExpExecArray | null;
            while ((result = regEx.exec(to)) !== null) {
                let urlParam: string = result[0];
                let dataValue: string = result[1];
                urlWithData = urlWithData.replace(urlParam, params[dataValue]);
            }
        }
        return urlWithData;
    };

    render () {
        return (
            <Link to={this.injectParams(this.props.to, this.props.params)}>
                {this.props.children}
            </Link>
        );
    }
}
