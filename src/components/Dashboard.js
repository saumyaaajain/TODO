import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ViewFile from "./ViewFile";
import AddTaskPage from "./AddTaskPage";
import Reports from './Reports';
import CalendarView from './CalendarView';
import {useStyles} from "../style/Dashboard";
import Copyright from "./Copyright";
import SimpleGrow from "./GrowCard";
import {FlipCard} from "./transitions";
import createHistory from "history/createBrowserHistory";
import {Logout} from "./Logout";

export const history = createHistory();

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        title:'Dashboard'
    });
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const setTitle = (tte) => {
        if(state.title !== tte){
            setState({title: tte});
        }
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {state.title}
                    </Typography>
                    <Logout/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Route path="/" render={(routeProps) => <ViewFile {...routeProps} getTitle = { (title) => {
                                setTitle(title);
                            }}/>} exact={true}/>
                            <Route path="/add" component={(routeProps) => <AddTaskPage {...routeProps} getTitle = { (title) => {
                                setTitle(title);
                            }}/> } exact={true}/>
                            <Route path="/reports" render={(routeProps) => <Reports {...routeProps} getTitle = { (title) => {
                                setTitle(title);
                            }}/>} exact={true}/>
                            <Route path="/dashboard" render={(routeProps) => <CalendarView {...routeProps} getTitle = { (title) => {
                                setTitle(title);
                            }}/>} exact={true}/>
                            <Route path="/animate" component={SimpleGrow} exact={true}/>
                            {/*<Route path="/" component={PageNotFound}/>*/}
                        </Grid>
                    </Grid>
                    <Box pt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    )
}