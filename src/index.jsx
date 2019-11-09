import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar";
import ClientRoute from "./routes/client-route";
import PolicyRoute from "./routes/policy-route";

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