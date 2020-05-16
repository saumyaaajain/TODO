const defaultTaskState = [];

export default (state = defaultTaskState, action) => {
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                action.task
            ];
            break;
        default:
            return state;
    }
}