import uuid from 'react-uuid';
import moment from "moment";

export const addTaskList = (
    {
        title = '',
        tasks = []
    } ) => ({
    type: 'ADD_TASK_LIST',
    taskLists:{
        id: uuid(),
        title,
        tasks
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
        status = 'in-progress',
        time = '',
        reoccurDay = '',
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
        status,
        time,
        reoccurDay
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