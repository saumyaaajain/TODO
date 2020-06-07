import uuid from 'react-uuid';
import moment from "moment";

export const setTaskList = (tasklist) => ({
    type: "SET_TASKLIST",
    taskLists : tasklist

})

export const addTaskList = (
    {
        _id,
        tasks = [],
        title,
        owner,
        createdAt,
        updatedAt
    } ) => ({
    type: 'ADD_TASK_LIST',
    taskLists: {
        id: _id,
        tasks,
        title,
        owner,
        createdAt,
        updatedAt
    }
});

export const addTask = ({
    id,
    task }) => {
    console.log(task)
    return {
    type: 'ADD_TASK',
    id,
    tasks:{
        ...task,
    }
}};

export const editTask = (listId = '', taskId = '', updates) => ({
    type: 'EDIT_TASK',
    listId,
    taskId,
    updates
});

export const removeTaskList = (id = '') => ({
    type: 'REMOVE_TASK_LIST',
    id
});