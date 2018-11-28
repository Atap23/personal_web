import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import style from './index.scss';


const Index = () => {
    return <div id="main" className="main">
        Helloo Reactoso!
        <Button style={{position: 'absolute', top: '100px', left: '100px'}} variant="contained">Test Button</Button>
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));