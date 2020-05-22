import React from "react";
import {connect} from 'react-redux';
import '../style/ViewFile.css';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import selectTasks from '../selectors/task';
import {add, edit, remove} from "../actions/task";
import TaskListFilters from "./TaskFilter";
import EditPopUp from "./EditPopUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import '../style/ViewFile.css'
import {useStyles} from "../style/ViewFile";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems} from "./listItems";
import Drawer from "@material-ui/core/Drawer";

const ViewFile = (props) => {
    const classes = useStyles();
    console.log(props);
    props.getTitle('VIEW TASK');
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
      <React.Fragment>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                  {[0, 1, 2].map((value) => (
                      <Grid key={value} item>
                          <Paper className={classes.paper} />
                      </Grid>
                  ))}
                  <Paper className={classes.paper}>
                      <Table size="small">
                          <TableBody>
                              {props.task.map((tsk) => (
                                  <TableRow key={tsk.id}>
                                      <TableCell>{tsk.title}</TableCell>
                                      <TableCell>{tsk.description}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </Paper>
                  <Grid container
                        justify="center"
                        spacing={4}
                  >
                      <Paper className={classes.paper}>

                      </Paper>
                  </Grid>
              </Grid>
              <Grid container
                    justify="center"
                    spacing={5}
              >
                  <Grid item>
                      <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="open drawer"
                          onClick={handleDrawerOpen}
                          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Drawer
                          variant="persistent"
                          anchor="right"
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
                  </Grid>
              </Grid>
          </Grid>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => {
    return {
        task: selectTasks(state.tasks, state.filters)
    }
};

export default connect(mapStateToProps)(ViewFile);