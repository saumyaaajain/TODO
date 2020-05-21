// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    completeBy: undefined,
    status: 'none',
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_START_DATE':
            return {
                ...state,
                sortBy: 'start-date'
            };
        case 'SORT_BY_END_DATE':
            return {
                ...state,
                sortBy: 'end-date'
            };
        case 'SORT_BY_NONE':
            return {
                ...state,
                sortBy: 'none'
            };
        case 'FILTER_NOT_STARTED':
            return {
                ...state,
                status: 'not-started'
            };
        case 'FILTER_IN_PROGRESS':
            return {
                ...state,
                status: 'in-progress'
            };
        case 'FILTER_COMPLETED':
            return {
                ...state,
                status: 'completed'
            };
        case 'FILTER_NONE':
            return {
                ...state,
                status: 'none'
            };
        default:
            return state;
    }
};
