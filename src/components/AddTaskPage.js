import React from 'react';
import { connect } from 'react-redux';
import {add} from "../actions/task";
import AddFile from "./AddFile";
import '../style/ViewFile.css';
import Title from "./Title";
import {useStyles} from "../style/AddTaskPage";
import Paper from "@material-ui/core/Paper";


const AddTaskPage = (props) => {
    const classes = useStyles();
    props.getTitle('ADD TASK');
    return (
    <React.Fragment>
        <Paper className={classes.paper}>
            <Title>
                Add Task
            </Title>
            <AddFile
                onSubmit = { (task) => {
                    console.log(task);
                    props.dispatch(add(task));
                    //props.history.push('/');
                }}
            />
        </Paper>
    </React.Fragment>
)};

export default connect()(AddTaskPage);