import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from "./components/App/App";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#424242' }, // Purple and green play nicely together.
        secondary: { main: '#ef6c00' }, // This is just green.A700 as hex.
      },
    typography: { useNextVariants: true },
  });



ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </MuiThemeProvider>
), document.getElementById("index"));