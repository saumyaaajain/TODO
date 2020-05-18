import React from 'react';
import { connect } from 'react-redux';
import {add} from "../actions/task";
import AddFile from "./AddFile";
import './style/ViewFile.css';
import Title from "../Check/Title";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    paper:{
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: '75vh',
    }
}));

const AddTaskPage = (props) => {
    const classes = useStyles();
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