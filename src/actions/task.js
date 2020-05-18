import uuid from 'react-uuid';

export const add = (
    {
        title='',
        description='',
        completeBy=0,
    } ={} ) => ({
    type: 'ADD',
    task:{
        id: uuid(),
        title,
        description,
        completeBy
    }
});