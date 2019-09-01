import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {User} from "../../shared/User";
import "./index.css";

const user: User = {id: "0", name: "Default user"};

ReactDOM.render(<App user={user}/>, document.getElementById("root"));
