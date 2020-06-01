import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function SimpleGrow() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grow in={true}>
                    <Paper elevation={4} className={classes.paper}>
                        <svg className={classes.svg}>
                            <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                        </svg>
                    </Paper>
                </Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...{timeout: 1000}}
                >
                    <Paper elevation={4} className={classes.paper}>
                        <svg className={classes.svg}>
                            <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                        </svg>
                    </Paper>
                </Grow>
            </div>
        </div>
    );
}
