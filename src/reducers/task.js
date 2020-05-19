const defaultTaskState = [];

export default (state = defaultTaskState, action) => {
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                action.task
            ];
        case 'REMOVE':
            //console.log(action.id);
            //console.log(state.filter(({ id }) => id !== action.id));
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates
                    };
                } else {
                    return task;
                }
            });
        default:
            return state;
    }
}