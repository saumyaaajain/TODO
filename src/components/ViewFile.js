import React, {useContext} from "react";
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
import {addTask, editTask, remove, removeTaskList} from "../actions/task";
import TaskListFilters from "./TaskFilter";
import EditPopUp from "./EditPopUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import '../style/ViewFile.css';
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
import moment from "moment";
import Grow from "@material-ui/core/Grow";
import {addTaskToDatabase, deleteTaskListFromDatabase, editTaskOfDatabase} from "../db/db";
import AppContext from "../context/ContextAPI";
import Alert from "./EditPopUp";

const ViewFile = (props) => {
    const classes = useStyles();
    const [searchPageVisible, setState] = React.useState(false);
    const [title, setTask] = React.useState( '');
    const [id, setId] = React.useState('');
    const {user, setUser} = useContext(AppContext);
    props.getTitle('VIEW TASK');

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

    const handleChange = (event, listId ,taskId, task) => {
        setCheckbox({ ...checkboxValue, [event.target.name]: event.target.checked });
        if(task.reoccur){
            props.dispatch(editTask(listId, taskId, {status: "in-progress", reoccur: task.reoccur, completedOn: moment().format('DD/MM/YYYY')}));
        }
        else{
            editTaskOfDatabase({props: props, list_id: listId, task_id: taskId, auth_token: user.token, status: "COMPLETED", taskReoccur:task.reoccur})
        }
    };
    const onAddTaskChange = (e) => {
        setTask( e.target.value);
    };
    const onDelete = (id) => {
        deleteTaskListFromDatabase({props: props, auth_token: user.token, tasklist_id: id})
    };
    const onSearchOpen = () => {
        setState(true);
    };
    const onSearchClose = () => {
        setState(false);
    };

    const [dialogueState, setDialogueState] = React.useState(false);
    const [dialogueTask, setDialogueTask] = React.useState({});

    const popUp = (task) => {
        setDialogueState(!dialogueState);
        setDialogueTask(task);
    }

    // const handleClickOpen = () => {
    //     setOpenDialogue(true);
    // };
    //
    // const handleCloseDialogue = () => {
    //     setOpen(false);
    // };

    // const TaskDetails = (task, tasklist)=> {
    //     return <AlertDialogSlide task = {task} tasklist = {tasklist} />
    // }

  return (
      <React.Fragment>
         <div id="test" className={classes.bodyContent}>
             <Grid item xs={12}>
                 <Grid container justify="space-between">
                     {/*<Paper className={classes.paperFilter} elevation={5}>*/}
                     {/*    Filter*/}
                     {/*</Paper>*/}
                     <Title>Filters:</Title>
                     {
                         searchPageVisible
                             ? <Tooltip title="Close Filters"><IconButton onClick={onSearchClose}><CancelPresentationIcon/></IconButton></Tooltip>
                             : <Tooltip title="Open Filters" ><IconButton onClick={onSearchOpen}><FindInPageIcon/></IconButton></Tooltip>
                     }
                 </Grid>
                 {searchPageVisible && <Paper className={classes.paper}><TaskListFilters/></Paper>}
                 <Grid container justify="space-evenly" spacing={3}>
                     {props.taskLists.map((list) => (
                         <div>
                             <Grow
                                 in={true}
                                 style={{ transformOrigin: '0 0 0' }}
                                 {...{timeout: 2000}}
                             >
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
                                             ? <Table
                                                 size="small">
                                                 <TableBody>
                                                     {list.tasks.map((task) => (
                                                         <TableRow onClick={()=>popUp(task)} >
                                                             {dialogueState && <Alert id={task.id} task={dialogueTask} tasklist={list} state={dialogueState} setState = {(state) => {setDialogueState(state)}}/>}
                                                             <TableCell>
                                                                 <FormControlLabel
                                                                     control={
                                                                         <Checkbox
                                                                             checked={task.reoccur ? task.completedOn === moment().format('DD/MM/YYYY') : task.status === 'COMPLETED'}
                                                                             onChange={(e) => {
                                                                                 handleChange(e,list.id ,task._id, task)
                                                                             }}
                                                                             icon={<AssignmentIcon />}
                                                                             checkedIcon={<AssignmentTurnedInIcon/>}
                                                                             color='primary'
                                                                             name={task.id} />
                                                                     }
                                                                     label={task.title}
                                                                 /></TableCell>
                                                             {task.time !== '' && <TableCell>{task.reoccur && task.reoccurDay} {task.time}</TableCell>}
                                                         </TableRow>
                                                     ))}


                                                 </TableBody>
                                             </Table>
                                             : "No Data"
                                         }
                                         <Grid justify="space-between" container>
                                             <TextField
                                                 required
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
                                                     onClick={() => {
                                                         handleDrawerOpen(list.id);
                                                         // document.getElementById('drawer').scrollIntoView();
                                                     }}
                                                 >
                                                     <AddIcon/>
                                                 </IconButton>
                                             </Tooltip>
                                         </Grid>
                                     </Paper>
                                 </Grid>
                             </Grow>
                         </div>
                     ))}
                     <Grow
                         in={true}
                         style={{ transformOrigin: '0 0 0' }}
                         {...{timeout: 5000}}
                     >
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
                     </Grow>
                 </Grid>
             </Grid>
             {open &&
             <div id="drawer" tabIndex="-1">
                 <Drawer
                     id="drawer"
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
                                 <ChevronLeftIcon/>
                             </IconButton>
                         </div>
                     </Grid>
                     <Divider/>
                     <AddTaskDetails
                         onSubmit={(task) => {
                             const tsk = {
                                 ...task,
                                 title: title,
                             };
                             setTask("");
                             addTaskToDatabase({props: props,auth_token: user.token ,...tsk, tasklist_id: id })
                         }}
                     />
                 </Drawer>
             </div>
             }
         </div>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => {
    return {
        taskLists: selectTasks(state.taskLists, state.filters)
    }
};

export default connect(mapStateToProps)(ViewFile);