import React from 'react';
import { connect } from 'react-redux';
import {add} from "../actions/task";
import AddFile from "./AddFile";
import './style/ViewFile.css';

const AddTaskPage = (props) => (
    <div className="box">
        <h1>Add Task</h1>
        <div className="line" />
        <div className="item">
            <AddFile
                onSubmit = { (task) => {
                    console.log(task);
                    props.dispatch(add(task));
                    //props.history.push('/');
                }}
            />
        </div>
    </div>
);

export default connect()(AddTaskPage);