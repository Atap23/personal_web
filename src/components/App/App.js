import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div id="app" className="app">
            <Header />
            <Main />
        </div>;
    }
}

export default App;