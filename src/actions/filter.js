
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
export const sortByStartDate = () => ({
    type: 'SORT_BY_START_DATE',
});

export const sortByEndDate = () => ({
    type: 'SORT_BY_END_DATE',
});
export const sortByNone = () => ({
    type: 'SORT_BY_NONE',
});

export const filterNone = () => ({
    type: 'FILTER_NONE',
});

export const filterNotStarted = () => ({
    type: 'FILTER_NOT_STARTED',
});
export const filterInProgress = () => ({
    type: 'FILTER_IN_PROGRESS',
});

export const filterCompleted = () => ({
    type: 'FILTER_COMPLETED',
});