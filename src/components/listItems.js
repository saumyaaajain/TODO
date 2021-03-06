import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import {NavLink} from "react-router-dom";
import EventIcon from '@material-ui/icons/Event';

const navigateToDashboard = () => {

};

export const mainListItems = (
    <div>
        <NavLink to="/" exact={true} style={{ textDecoration: 'none', color: 'black' }} >
            <ListItem button onClick={navigateToDashboard}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </NavLink>
        <NavLink to="/add" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Task" />
            </ListItem>
        </NavLink>
        <NavLink to="/reports" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
        </NavLink>
        <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
        </NavLink>
    </div>
);
