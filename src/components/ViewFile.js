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
import {add, addTask, edit, remove, removeTaskList} from "../actions/task";
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
import {Switch, Route, NavLink} from "react-router-dom";
import AddTaskPage from "./AddTaskPage";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { positions } from '@material-ui/system';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import {AddTaskDetails} from "./AddTask";

const ViewFile = (props) => {
    const classes = useStyles();
    console.log(props);
    const [searchPageVisible, setState] = React.useState(false);
    const [title, setTask] = React.useState( '');
    const [id, setId] = React.useState('');
    props.getTitle('VIEW TASK');
    const onSubmit = (task) => {
        console.log(task);
    };

    //drawer
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Checkbox
    const [checkboxValue, setCheckbox] = React.useState({
        check:false
    });

    const handleChange = (event, listId ,taskId) => {
        setCheckbox({ ...checkboxValue, [event.target.name]: event.target.checked });
        props.dispatch(edit(listId, taskId, {status: "completed"}));
    };
    const onAddTaskChange = (e) => {
        // console.log(e.target.value);
        setTask( e.target.value);
    };
    const onDelete = (id) => {
        console.log("som");
        console.log(id);
        props.dispatch(removeTaskList(id));
    };
    const onSearchOpen = () => {
        setState(true);
    };
    const onSearchClose = () => {
        setState(false);
    };
  return (
      <React.Fragment>
         <div className={classes.bodyContent}>
             <Grid item xs={12}>
                 <Grid container justify="space-between">
                     {/*<Paper className={classes.paperFilter} elevation={5}>*/}
                     {/*    Filter*/}
                     {/*</Paper>*/}
                     Filters:
                     {
                         searchPageVisible
                             ? <Tooltip title="Close Filters"><IconButton onClick={onSearchClose}><CancelPresentationIcon/></IconButton></Tooltip>
                             : <Tooltip title="Open Filters" ><IconButton onClick={onSearchOpen}><FindInPageIcon/></IconButton></Tooltip>
                     }
                 </Grid>
                 {searchPageVisible && <Paper className={classes.paper}><TaskListFilters/></Paper>}
                 <Grid container justify="space-evenly" spacing={3}>
                     {props.taskLists.map((list) => (
                         <Grid key={list.id} item>
                             <Paper className={classes.paperTitle} elevation={5}>
                                 <Grid key={list.id} justify="space-between" container>
                                     <div className={classes.title}>{list.title}</div>
                                     <Tooltip title="Delete this list">
                                         <IconButton
                                             key={list.id}
                                             onClick={() => onDelete(list.id)}
                                         >
                                      <span className={classes.deleteButton}>
                                          <DeleteSweepIcon />
                                          <DeleteForeverIcon className={classes.sweepButton}/>
                                      </span>
                                         </IconButton>
                                     </Tooltip>
                                 </Grid>
                             </Paper>
                             <Paper className={classes.paperTaskList} elevation={5}>
                                 {list.tasks.length > 0
                                     ? <Table size="small">
                                         <TableBody>
                                             {list.tasks.map((task) => (
                                                 <TableRow >
                                                     <TableCell>
                                                         <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={task.status==='completed'}
                                                                    onChange={(e) => handleChange(e,list.id ,task.id)}
                                                                    icon={<AssignmentIcon />}
                                                                    checkedIcon={<AssignmentTurnedInIcon/>}
                                                                    color='primary'
                                                                    name={task.id} />
                                                            }
                                                            label={task.title}
                                                        /></TableCell>
                                                     {task.time !== '' && <TableCell>{task.time}</TableCell>}
                                                 </TableRow>
                                             ))}

                                         </TableBody>
                                     </Table>
                                     : "No Data"
                                 }
                                 <Grid justify="space-between" container>
                                     <TextField
                                         required
                                         id="title"
                                         name="title"
                                         label="Title"
                                         autoComplete="title"
                                         onChange={onAddTaskChange}

                                     />
                                     <Tooltip title="Open drawer">
                                         <IconButton
                                             variant="contained"
                                             color="primary"
                                             position="bottom"
                                             // className={classes.addButton}
                                             onClick={() => handleDrawerOpen(list.id)}
                                         >
                                             <AddIcon/>
                                         </IconButton>
                                     </Tooltip>
                                 </Grid>
                             </Paper>
                         </Grid>

                     ))}
                     <Grid item>
                         <Paper className={classes.paperTitle} elevation={5}>
                             Add List
                         </Paper>
                         <Paper className={classes.paper} elevation={7}>
                             <NavLink to={{
                                 pathname:"/add",
                                 aboutProps: {id: null}
                             }} exact={true} style={{ textDecoration: 'none', color: 'black' }} >
                                 <Tooltip title="Add a new task list">
                                     <NoteAddIcon/>
                                 </Tooltip>
                             </NavLink>
                         </Paper>
                     </Grid>
                 </Grid>
             </Grid>
             <div>
                 <Drawer
                     variant="persistent"
                     anchor="right"
                     classes={{
                         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                     }}
                     open={open}
                 >

                     <Grid container justify="space-between" direction="row">
                         <div className={classes.drawerContent}>Add Task Details</div>
                         <div className={classes.toolbarIcon}>
                             <IconButton onClick={handleDrawerClose}>
                                 <ChevronLeftIcon />
                             </IconButton>
                         </div>
                     </Grid>
                     <Divider />
                     <AddTaskDetails
                        onSubmit = {(task) => {
                            console.log(task);
                            const tsk = {
                                ...task,
                                title: title,
                            };
                            setTask(null);
                            console.log(title);
                            props.dispatch(addTask(id, tsk));
                        }}
                     />
                 </Drawer>
             </div>
         </div>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
    console.log((state.filters));
    return {
        taskLists: selectTasks(state.taskLists, state.filters)
    }
};

export default connect(mapStateToProps)(ViewFile);