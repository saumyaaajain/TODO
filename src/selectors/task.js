// Get visible expenses
import moment from "moment";

export default (tasks, { text, sortBy, status }) => {
    console.log("st:");
     console.log(status);
    //console.log(tasks);
    const taskArray = tasks.filter((task) => {
        // console.log("t:")
        // console.log(title);
        const textMatch = task.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a, b) => {
        if(sortBy === 'none'){
            return 1;
        }
        else if (sortBy === 'date') {
            return a.createdAt.diff(b.createdAt) > 0 ? 1 : -1;
        }else if (sortBy === 'start-date') {
            return a.startDate.diff(b.startDate) > 0 ? 1 : -1;
        } else if (sortBy === 'end-date') {
            return a.endDate.diff(b.endDate) > 0 ? 1 : -1;
        }
    }).filter((task) => {
        if(status === 'none'){
            return true;
        } else {
            const statusMatch = task.status.includes(status);
            console.log(statusMatch);
            return statusMatch;
        }
    });
    return taskArray;
};

export const getData = (tasks) => {
    const tasksInProgress = [];
    const tasksCompleted = [];
    const tasksDueToday = [];
    const upcomingTasks = [];
    const tasksNotStarted = [];
    const today = moment.now();
    tasks.map((task) => {
        if(task.status === 'completed'){
            tasksCompleted.push(task);
        }
        else if(task.status === 'not-started'){
            tasksNotStarted.push(task);
        } else{
            tasksInProgress.push(task);
        }
        if(task.endDate.diff(today, 'days') === 0 ){
            tasksDueToday.push(task);
        }
        if(task.startDate.diff(today, 'days') > 1){
            upcomingTasks.push(task);
        }
    });
    const pieData = [];
    pieData.push({status:'Not Started', number: tasksNotStarted.length});
    pieData.push({ status: 'In-Progress', number: tasksInProgress.length });
    pieData.push({ status: 'Completed', number: tasksCompleted.length });
    return {
        pieData,
        tasksNotStarted,
        tasksInProgress,
        tasksCompleted,
        tasksDueToday,
        upcomingTasks
    };
};
