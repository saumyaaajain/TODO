import React from 'react';
import { connect } from 'react-redux';
import {addTaskList} from "../actions/task";
import AddFile from "./AddFile";
import '../style/ViewFile.css';
import Title from "./Title";
import {useStyles} from "../style/AddTaskPage";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";


const AddTaskPage = (props) => {
    const classes = useStyles();
    props.getTitle('ADD TASK LIST');
    return (
    <React.Fragment>
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{timeout: 5000}}
        >
            <Paper className={classes.paper}>
                <Title>
                    Add Task List
                </Title>
                <AddFile
                    onSubmit = { (taskList) => {
                        console.log(taskList);
                        props.dispatch(addTaskList(taskList));
                        props.location && props.history.push('/');
                    }}
                />
            </Paper>
        </Grow>
    </React.Fragment>
)};

export default connect()(AddTaskPage);