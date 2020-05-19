import uuid from 'react-uuid';

export const add = (
    {
        title='',
        description='',
        completeBy=0,
        startDate=0,
        endDate=0,
        days=0,
        status = 'inProgress'
    } ={} ) => ({
    type: 'ADD',
    task:{
        id: uuid(),
        title,
        description,
        completeBy,
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