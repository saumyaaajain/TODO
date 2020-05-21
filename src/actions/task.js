import uuid from 'react-uuid';
import moment from "moment";

export const add = (
    {
        title='',
        description='',
        createdAt=moment.now(),
        startDate=moment.now(),
        endDate=moment.now(),
        days=0,
        status = 'in-progress'
    } ={} ) => ({
    type: 'ADD',
    task:{
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

export const edit = (id = '', updates) => ({
    type: 'EDIT',
    id,
    updates
});

export const remove = (id = '') => ({
    type: 'REMOVE',
    id
});