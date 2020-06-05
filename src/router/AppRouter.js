import React from 'react';
import '../App.css';
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import {Router, Route, Switch} from "react-router-dom";
import AppContext from "../context/ContextAPI";

function AppRouter() {

    const [user, setUser] = React.useState({});
    const value = { user, setUser };

    return (
        <Dashboard/>
        // <Router>
        //     <Switch>
        //         <AppContext.Provider value={value} >
        //             <Route path="/login" component={Login}/>
        //             <Dashboard/>
        //         </AppContext.Provider>
        //     </Switch>
        // </Router>
    );
}

export default AppRouter;
