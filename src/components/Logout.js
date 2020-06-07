import React, {useContext} from 'react';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import AppContext from "../context/ContextAPI";

export const Logout = () => {

    const {user, setUser} = useContext(AppContext);

    const logoutFunction = () => {
        setUser({});
        localStorage.clear();
    }

    return (
        <IconButton
            color="inherit"
            onClick={logoutFunction}
        >
            <ExitToAppIcon/>
        </IconButton>
    );
}