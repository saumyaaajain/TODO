
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
export const setStartDate = () => ({
    type: 'SORT_BY_START_DATE',
});

export const setEndDate = () => ({
    type: 'SORT_BY_END_DATE',
});
export const setNone = () => ({
    type: 'SORT_BY_NONE',
});

export const filterInProgress = () => ({
    type: 'FILTER_IN_PROGRESS',
});

export const filterCompleted = () => ({
    type: 'FILTER_COMPLETED',
});