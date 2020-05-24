

export default (taskList) => {
    let dateMap = new Map();
    let taskArray = [];
    taskList.map((taskList) => {
        taskList.tasks.map((task) => {
            if(dateMap.has(task.endDate.format('DD/MM/YYYY'))){
                taskArray = dateMap.get(task.endDate.format('DD/MM/YYYY'));
                const newTask = {
                    taskListName: taskList.title,
                    ...task
                }
                taskArray.push(newTask);
                dateMap.set(task.endDate.format('DD/MM/YYYY'), taskArray);
            }
            else{
                const newTask = {
                    taskListName: taskList.title,
                    ...task
                }
                dateMap.set(task.endDate.format('DD/MM/YYYY'), [newTask]);
            }
        });
    });
    return dateMap;
}