import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';

import Home from "../Home/Home";

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Switch>
            <Route exact path='/' component={Home}/>
      </Switch>;
    }
}

export default Main;