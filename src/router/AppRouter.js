import React from 'react';
import '../App.css';
import AddTaskPage from "../components/AddTaskPage";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ViewFile from "../components/ViewFile";

function AppRouter() {
    return (
        <div className="Row">
            <div className="SideBar">
                <div className="Profile line"/>
            </div>
            <Router>
                <div className="App">
                    <header className="App-header">
                        TO DO
                    </header>
                    <div className="content">
                        <div className="col">
                            <h3><NavLink to="/" exact={true} >Dashboard</NavLink></h3>
                            <h3><NavLink className="Padding" to="/add" >Add</NavLink></h3>
                        </div>
                        <div className="line" />
                        <Switch>
                            <Route path="/" component={ViewFile} exact={true}/>
                            <Route path="/add" component={AddTaskPage}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default AppRouter;
