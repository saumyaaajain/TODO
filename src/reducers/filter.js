// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    completeBy: undefined,
    status: 'None',
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
        default:
            return state;
    }
};
