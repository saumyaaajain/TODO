import uuid from 'react-uuid';
import moment from "moment";

export const addTaskList = (
    {
        title = '',
        taskList = []
    } ) => ({
    type: 'ADD_TASK_LIST',
    taskLists:{
        id: uuid(),
        title,
        taskList
    }
});

export const addTask = (
    id,
    {
        title = '',
        description = '',
        createdAt = moment.now(),
        startDate = moment.now(),
        endDate = moment.now(),
        days = 0,
        status = 'in-progress'
    } ) => ({
    type: 'ADD_TASK',
    id,
    tasks:{
        id: uuid(),
        title,
        description,
        createdAt,
        startDate,
        endDate,
        days,
        status
    }
});

export const edit = (listId = '', taskId = 's', updates) => ({
    type: 'EDIT_TASK',
    listId,
    taskId,
    updates
});

export const removeTaskList = (id = '') => ({
    type: 'REMOVE_TASK_LIST',
    id
});