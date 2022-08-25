import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



function Main(props) {
    const { children } = props
    return(
        <React.Fragment>
            
                <AppBar position='static'>
                        <Toolbar>
                            
                            <Typography
                                variant="h6"
                                color="inherit"
                            >React App</Typography>

                        </Toolbar>
                        
                        <div  className="btn-group">
                                <Link to="/login" className="btn btn-dark btn-lg"> Sign in </Link>
                                <Link to="/form" className="btn btn-dark btn-lg"> Sign up </Link>
                                <Link to="/info" className="btn btn-dark btn-lg"> Info </Link>
                                <Link to="/redux" className="btn btn-dark btn-lg"> Redux </Link>
                                <Link to="/" className="btn btn-dark btn-lg"> Index </Link>
                        </div>
                        
                </AppBar>
            { children }
        </React.Fragment>

    );
}   

export default Main;