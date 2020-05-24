import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    bodyContent : {
        display: 'flex',
        flexDirection: 'row',
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        //width: '200px'
        margin: '10px',
    },
    paperFilter: {
        padding: theme.spacing(4),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        width: '50vw',
        height: '15px',
        margin: '10px',
        alignItems: 'center',
        background: "#3f51b5",
        color: "white",
        ...theme.mixins.toolbar,
    },
    paperTaskList: {
        padding: theme.spacing(4),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        // height: '400px',
        // width: '200px',
        margin: '10px',
    },
    paperTitle: {
        padding: theme.spacing(2),
        display: 'flex',
        // overflow: 'auto',
        flexDirection: 'column',
        margin: '10px',
        background: "#3f51b5",
        color: "white",
        ...theme.mixins.toolbar,
        alignItems: "centre",
        fontHeight: "20px",
        height: '7px'
    },
    addButton: {
        marginTop: "-250px"
    },
    deleteButton : {
        color: 'white',
        '&:hover > svg':{
            display: 'none'
        },
        '&:hover > svg + svg':{
            display: 'inherit'
        },
    },
    sweepButton : {
        color: 'white',
        display: 'none',
    },
    pad: {
        padding: theme.spacing(3)
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        marginRight: '-75px',
        marginTop: '-25px',
        padding: '25px',
        width: '20vw',
        height: '100vh',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerContent: {
        padding: '32px',
    }
}));