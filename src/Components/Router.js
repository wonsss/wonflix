import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail"  component={Detail} />
            <Route path="/search" component={Search} />
            <Route path="/tv" component={TV} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);