import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FlipCardAnimation from './transitions';
import AppContext from "../context/ContextAPI";
import {Redirect, useHistory} from 'react-router-dom';
import {history} from "./Dashboard";
import Copyright from "./Copyright";
import {useStyles} from "../style/LandingPage";

export default function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {user, setUser} = useContext(AppContext);
    const [auth_token, setAuthToken] = React.useState('');

    const onEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const signIn = (e) => {
        e.preventDefault();
        console.log("sign in button clicked");
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8010/login", requestOptions)
            .then(response => {
                const variable = response.json();
                console.log("I'll gooooo madddd", variable );
                return variable;

            })
            .then(result => {
                console.log(result);
                if(result.token){
                    setAuthToken(result.token);
                    console.log("you are registered with us, sorry, we cant help!");
                    setUser(result);
                    localStorage.setItem('user', JSON.stringify(result));
                    history.push('/');
                    // return <Redirect to="/add"/>;
                }
                else{
                    console.log("Congrats, you're not registered! Take my advise, use another app!!!");
                }
            })
            .catch(error => {
                console.log("Something went wrong... Even idk what.. dont wait up, its never gonna work!")
            })

    }

    const signUp = () => {
        props.setSignIn(false)
    }

    return (
        <Grid className={classes.component} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onEmailChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onPasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={signUp}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
        </Grid>
    );
}