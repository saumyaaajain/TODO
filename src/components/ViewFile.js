import React from "react";
import {connect} from 'react-redux';
import {TaskLstItem} from "./TaskListItem";

const ViewFile = (props) => {
  console.log(props);
  return (
      <div>
          <h1>View Tasks</h1>
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