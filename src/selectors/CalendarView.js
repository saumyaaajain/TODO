import moment from "moment";

export default (taskList) => {
    let dateMap = new Map();
    let taskArray = [];
    taskList.map((taskList) => {
        taskList.tasks.map((task) => {
            const endDate = (task.endDate.isAMomentObject ? task.endDate : moment(task.endDate)).format('DD/MM/YYYY');
            if(dateMap.has(endDate)){
                taskArray = dateMap.get(endDate);
                const newTask = {
                    taskListName: taskList.title,
                    ...task
                }
                taskArray.push(newTask);
                dateMap.set(endDate, taskArray);
            }
            else{
                const newTask = {
                    taskListName: taskList.title,
                    ...task
                }
                dateMap.set(endDate, [newTask]);
            }
        });
    });
    return dateMap;
}