const defaultTaskState = [];

export default (state = defaultTaskState, action) => {
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                action.task
            ];
        case 'EDIT':
            break;
        default:
            return state;
    }
}