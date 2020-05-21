import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function CheckboxesGroup(props) {
    console.log(props);
    const classes = useStyles();
    const [state, setState] = React.useState({
        c: props.task.status === 'completed',
        b: props.task.status === 'in-progress',
        a: props.task.status === 'not-started',
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if(state.a){
            props.onStatusChange('Not-Started');
        } else if(state.b){
            props.onStatusChange('In Progress');
        } else if(state.c){
            props.onStatusChange('Completed');
        }

    };

    const { a, b, c } = state;
    const error = [a, b, c].filter((v) => v).length !== 1;

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={a} onChange={handleChange} name="a" />}
                        label="Not Started"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={b} onChange={handleChange} name="b" />}
                        label="In Progress"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={c} onChange={handleChange} name="c" />}
                        label="Completed"
                    />
                </FormGroup>
                <FormHelperText>Pick One</FormHelperText>
            </FormControl>
        </div>
    );
}