
const defaultTaskState = [];

export default (state = defaultTaskState, action) => {
    switch(action.type){
        case 'ADD_TASK_LIST':
            return [
                ...state,
                action.taskLists
            ];
        case 'ADD_TASK':
            console.log(action.tasks);
            return state.map((taskList) => {
                if (taskList.id === action.id) {
                    taskList.tasks.push(action.tasks);
                    return {
                        ...taskList
                    };
                }
                return taskList;
            });
        case 'REMOVE_TASK_LIST':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TASK':
            let variable = state.map((taskList) => {
                if (taskList.id === action.listId) {
                    const list = taskList.tasks.map((task) => {
                        if(task._id === action.taskId){
                            const updates = {
                                ...task,
                                ...action.updates
                            };
                            return updates;
                        }
                        return task;
                    });
                    return {
                        ...taskList,
                        tasks:list,
                    }
                }
                return taskList;
            });
            return variable;
        case "SET_TASKLIST": {
            const tasklistList = [];
            action.taskLists.docs.map((tasklist) => {
                tasklistList.push({
                    id: tasklist._id,
                    title: tasklist.title,
                    tasks: tasklist.tasks
                });
            })
            return tasklistList
        }
        default:
            return state;
    }
}