import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {User} from "../../shared/User";

const user: User = {id: "0", name: "Default user"};

ReactDOM.render(<App user={user}/>, document.getElementById('root'));