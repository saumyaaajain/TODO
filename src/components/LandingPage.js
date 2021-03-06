import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FlipCardAnimation from './transitions';
import Login from "./Login";
import SignUp from "./SignUp";
import {useStyles} from "../style/LandingPage";
import {Route} from 'react-router-dom';


export default function LandingPage(props) {
    const classes = useStyles();
    const [signIn, setSignIn] = React.useState('true')

    return (
        <div>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid className={classes.visible} item xs={false} sm={4} md={7} justify="center" >
                    <FlipCardAnimation/>
                </Grid>
                {
                    signIn
                        ? <Route to="/signin" render={() => <Login setSignIn = {(signInState) => setSignIn(signInState)} />}/>
                        : <Route to="/signup" render={() => <SignUp setSignIn = {(signInState) => setSignIn(signInState)} />}/>
                }
            </Grid>
        </div>
    );
}