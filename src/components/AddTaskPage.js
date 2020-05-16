import React from 'react';
import { connect } from 'react-redux';
import {add} from "../actions/task";
import AddFile from "./AddFile";

const AddTaskPage = (props) => (
    <div>
        <h1>Add Task</h1>
        <AddFile
            onSubmit = { (task) => {
                console.log(task);
                props.dispatch(add(task));
                //props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddTaskPage);