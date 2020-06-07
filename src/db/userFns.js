import {history} from "../components/Dashboard";

export const login = (email, password, auth_token) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch("https://todo-app-demo-backend.herokuapp.com/login", requestOptions)
        .then(response => {
            const variable = response.json();
            console.log("I'll gooooo madddd", variable );
            return variable;

        })
}