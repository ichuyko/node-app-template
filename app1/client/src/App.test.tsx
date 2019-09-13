import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {User} from "../../shared/src/User";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const user: User = {id: "0", name: "Default user"};
    ReactDOM.render(<App user={user}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
