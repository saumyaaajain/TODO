// Get visible expenses
import moment from "moment";
import uuid from 'react-uuid';

export default (taskLists, { text, sortBy, status }) => {
    const taskListArray = [];
    taskLists.map((taskList) => {
        const taskArray = taskList.tasks.filter((task) => {
            const textMatch = text === '' ? true : task.title.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        }).filter((task) => {
            if(status === 'none'){
                return true;
            } else if(status === 'completed') {
                const statusMatch = task.reoccur? task.completedOn === moment().format('DD/MM/YYYY') : task.status.includes("COMPLETED");
                return statusMatch;
            } else {
                return task.reoccur? task.completedOn !== moment().format('DD/MM/YYYY') : task.status.includes("IN_PROGRESS");
            }
        });
        //     .sort((a, b) => {
        //     if(sortBy === 'none'){
        //         return 1;
        //     }
        //     else if (sortBy === 'date') {
        //         return a.createdAt.diff(b.createdAt) > 0 ? 1 : -1;
        //     }else if (sortBy === 'start-date') {
        //         return a.startDate.diff(b.startDate) > 0 ? 1 : -1;
        //     } else if (sortBy === 'end-date') {
        //         return a.endDate.diff(b.endDate) > 0 ? 1 : -1;
        //     }
        // });
        const data = {
            id: taskList.id,
            title: taskList.title,
            tasks : taskArray
        }
        taskListArray.push(data);
    });
    return taskListArray;
};


export const getData = (taskList) => {
    const tasksInProgress = [];
    const tasksCompleted = [];
    const tasksDueToday = [];
    const upcomingTasks = [];
    const tasksNotStarted = [];
    const today = moment.now();
    taskList.map((taskList) => {
        taskList.tasks.map((task) => {
            if(task.status === 'COMPLETED'){
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
