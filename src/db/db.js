import {setTaskList, addTaskList, addTask, editTask, removeTaskList} from "../actions/task";
import moment from "moment";

export const fetchTaskListFromDatabase = (props, auth_token) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth_token}`);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://todo-app-demo-backend.herokuapp.com/tasklist/", requestOptions)
        .then(response => {
            return response.json();

        })
        .then(result => {
            console.log(result);
            props.dispatch(setTaskList(result));
        })
        .catch(error => {
            console.log("Something went wrong with adding fetching tasklist... Even idk what.. !")
        })
}

export const addTaskListToDatabase = (
    {
        auth_token,
        title = '',
        tasks = [],
        props
    } ) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth_token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", title);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://todo-app-demo-backend.herokuapp.com/tasklist", requestOptions)
        .then(response => {
            return response.json();

        })
        .then(result => {
            console.log("WHOOOOOO!! task list added!");
            console.log(result);
            !result.error && props.dispatch(addTaskList({...result}))
            tasks.length > 0 ? addTaskToDatabase({auth_token: auth_token ,props: props, tasklist_id: result._id, title: tasks[0].title, description: tasks[0].description}) : props.location && props.history.push('/');
        })
        .catch(error => {
            console.log("Something went wrong with task list adding... Even idk what.. !");
            console.log(error);
        })
}

export const addTaskToDatabase = ({props, tasklist_id, auth_token, title, description}) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth_token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", title);
    urlencoded.append("description", description);
    urlencoded.append("taskList", tasklist_id);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://todo-app-demo-backend.herokuapp.com/task", requestOptions)
        .then(response => {
            return response.json();

        })
        .then(result => {
            console.log("WHOOOOOO!! task list added!");
            console.log(result);
            props.dispatch(addTask({id: tasklist_id, task: {
                ...result,
                    createdAt: result.createdAt.isAMomentObject ? result.createdAt : moment(result.createdAt),
                    startDate: result.startDate.isAMomentObject ? result.startDate : moment(result.startDate),
                    endDate: result.endDate.isAMomentObject ? result.endDate : moment(result.endDate)
            }}))
            props.location && props.history.push('/');
        })
        .catch(error => {
            console.log("Something went wrong with task adding...");
            console.log(error);
        })
}

export const editTaskOfDatabase = ({props, auth_token, list_id ,task_id, status, taskReoccur}) => {
    // description={{$randomInt}}&title=Random Description {{$randomInt}}&status=COMPLETED&startDate=2020-06-04T14:15:35.007Z
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth_token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("status", status);

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`https://todo-app-demo-backend.herokuapp.com/task/${task_id}`, requestOptions)
        .then(response => {
            return response.json();

        })
        .then(result => {
            console.log("WHOOOOOO!! task updated!");
            props.dispatch(editTask(list_id, task_id, {status: "COMPLETED", reoccur: taskReoccur, completedOn: moment().format('DD/MM/YYYY')}));
            console.log(result);

        })
        .catch(error => {
            console.log("Something went wrong with task updating...");
            console.log(error);
        })
}

export const deleteTaskListFromDatabase = ({props, auth_token, tasklist_id}) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${auth_token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("task_id", tasklist_id);

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`https://todo-app-demo-backend.herokuapp.com/tasklist/${tasklist_id}`, requestOptions)
        .then(response => {
            return response.json();

        })
        .then(result => {
            console.log("WHOOOOOO!! task deleted!");
            props.dispatch(removeTaskList(tasklist_id));
            console.log(result);

        })
        .catch(error => {
            console.log("Something went wrong with task updating...");
            console.log(error);
        })
}

