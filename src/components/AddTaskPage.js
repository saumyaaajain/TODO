import React from 'react';
import { connect } from 'react-redux';
import {addTaskList} from "../actions/task";
import AddFile from "./AddFile";
import '../style/ViewFile.css';
import Title from "./Title";
import {useStyles} from "../style/AddTaskPage";
import Paper from "@material-ui/core/Paper";


const AddTaskPage = (props) => {
    const classes = useStyles();
    props.getTitle('ADD TASK LIST');
    return (
    <React.Fragment>
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
    </React.Fragment>
)};

export default connect()(AddTaskPage);