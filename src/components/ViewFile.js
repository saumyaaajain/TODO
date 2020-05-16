import React from "react";
import {connect} from 'react-redux';
import {TaskLstItem} from "./TaskListItem";
import './style/ViewFile.css';

const ViewFile = (props) => {
  console.log(props);
  return (
      <div className="box">
          <h1>View Tasks</h1>
          <div className="line"/>
          {props.task.map((tsk) => <TaskLstItem {...tsk}/>)}
      </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        task: state.tasks,
    }
};

export default connect(mapStateToProps)(ViewFile);