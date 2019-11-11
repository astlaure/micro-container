import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import EventEmitter from 'eventemitter3';
import './services';
import Navbar from "./components/navbar";
import ClientRoute from "./routes/client-route";
import PolicyRoute from "./routes/policy-route";

window.eventEmitter = new EventEmitter();

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/policy" component={PolicyRoute} />
            <Route path="/" exact component={ClientRoute} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);