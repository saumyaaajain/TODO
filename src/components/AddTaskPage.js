import React, {useContext} from 'react';
import { connect } from 'react-redux';
import AddFile from "./AddFile";
import '../style/ViewFile.css';
import Title from "./Title";
import {useStyles} from "../style/AddTaskPage";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { addTaskListToDatabase} from '../db/db';
import AppContext from "../context/ContextAPI";


const AddTaskPage = (props) => {
    const classes = useStyles();
    props.getTitle('ADD TASK LIST');
    const {user, setUser} = useContext(AppContext);
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
                        addTaskListToDatabase( {auth_token: user.token, ...taskList, props:props});
                    }}
                />
            </Paper>
        </Grow>
    </React.Fragment>
)};

export default connect()(AddTaskPage);