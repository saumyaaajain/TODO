const defaultTaskState = [];

export default (state = defaultTaskState, action) => {
    console.log(1);
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'ADD_TASK_LIST':
            return [
                ...state,
                action.taskLists
            ];
        case 'ADD_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    task.taskList.push(action.tasks);
                    return {
                        ...task
                    };
                }
                return task;
            });
        case 'REMOVE_TASK_LIST':
            //console.log(action.id);
            //console.log(state.filter(({ id }) => id !== action.id));
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TASK':
            console.log(action);
            return state.map((task) => {
                if (task.id === action.listId) {
                    task.taskList.map((tsk) => {
                        if(tsk.id === action.taskId){
                            console.log(tsk);
                            console.log("som");
                            return {
                                ...task,
                                ...action.updates
                            };
                        }
                        return tsk;
                    })
                }
                return task;
            });
        default:
            return state;
    }
}