import React from 'react';
import {useStyles} from "./style/PageNotFound";
import Grid from '@material-ui/core/Grid';
import WarningIcon from '@material-ui/icons/Warning';
import Paper from '@material-ui/core/Paper';

export function PageNotFound() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid item
                          xs={12}
                          justify="space-around"
                          alignItems="center"
                    >
                        <Grid container
                              justify="center"
                              direction="column"
                              alignItems="center"
                              spacing={spacing}>
                            <Grid item>
                                <WarningIcon/>
                            </Grid>
                            <Grid item>
                                Error 404
                            </Grid>
                            <Grid item>
                                Page Not Found!!
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}