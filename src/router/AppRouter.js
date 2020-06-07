import React from 'react';
import '../App.css';
import Dashboard, {history} from "../components/Dashboard";
import {Router, Route, Switch} from "react-router-dom";
import AppContext from "../context/ContextAPI";
import {fetchTaskListFromDatabase} from "../db/db";
import LandingPage from "../components/LandingPage";

function AppRouter(props) {

    const [user, setUser] = React.useState(  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {});
    // console.log(JSON.parse(localStorage.getItem('user')))
    // const userDe = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const value = { user, setUser };
    if(user.token){
        return (
            <Wrapper value={value}>
                {UserAvailable(props, user.token)}
            </Wrapper>
        );
    }
    else{
        return (
            <Wrapper value={value}>
                <Route to="/login" component={LandingPage} />
            </Wrapper>
        );
    }
}

const UserAvailable = (props, token) => {
    fetchTaskListFromDatabase(props, token);
    return <Dashboard />
}

const Wrapper = (props) => {
    const {
        value,
        children
    } = props;
    return (
        <Router history = {history} >
            <Switch>
                <AppContext.Provider value={value} >
                    {children}
                </AppContext.Provider>
            </Switch>
        </Router>
    )
}

export default AppRouter;
