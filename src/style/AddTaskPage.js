import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper:{
        padding: theme.spacing(7),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: '75vh',
    }
}));