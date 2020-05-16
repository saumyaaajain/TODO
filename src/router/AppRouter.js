import React from 'react';
import '../App.css';
import AddTaskPage from "../components/AddTaskPage";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ViewFile from "../components/ViewFile";

function AppRouter() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    TO DO
                    <div className="Row">
                        <NavLink style={{"paddingRight": "20px"}} to="/" exact={true} >Dashboard</NavLink>
                        <NavLink className="Padding" to="/add" >Add</NavLink>
                    </div>
                </header>
                <Switch>
                    <Route path="/" component={ViewFile} exact={true}/>
                    <Route path="/add" component={AddTaskPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
