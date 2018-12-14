import React from "react";
import RootRef from '@material-ui/core/RootRef'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';
import styles from "./header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._rootElement = React.createRef();
        this.state = {
            sticky: false
        };

        this.changeBarOnScroll = this.changeBarOnScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeBarOnScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeBarOnScroll, false);
    }

    changeBarOnScroll() {
        var rootElementRect = this._rootElement.current.getBoundingClientRect();
        // console.log(this._rootElement);
        this.setState({ sticky: window.pageYOffset > (rootElementRect.top + rootElementRect.height) });
    }

    render() {
        const { sticky } = this.state;

        return <RootRef rootRef={this._rootElement}>

            <div>
                <AppBar position="fixed" elevation={2}>
                    <Collapse in={!sticky} collapsedHeight="45">
                        <Toolbar>
                            <Zoom in={sticky}>
                                <IconButton color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                            </Zoom>
                            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                                {'News + ' + sticky}
                            </Typography>
                            <Zoom in={!sticky}>
                                <IconButton color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                            </Zoom>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </Collapse>
                </AppBar>
            </div>
        </RootRef >;
    }
}

export default Header;