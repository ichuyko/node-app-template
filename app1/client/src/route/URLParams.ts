import {RouteComponentProps} from "react-router";

export interface URLParams {
    userId?: string;
    accountId?: string;
}

export interface URLProps extends RouteComponentProps<URLParams>{}
