import React from 'react';
import {useStyles} from "../style/CheckBox";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxesGroup(props) {
    console.log(props);
    const classes = useStyles();
    const [state, setState] = React.useState([{
        c: props.task.status === 'completed',
        b: props.task.status === 'in-progress',
        a: props.task.status === 'not-started',
    }]);

    const handleChange = (event) => {
        const newState = Object.assign({},  {...state[0], [event.target.name]: event.target.checked })
        setState([newState])
        // setState([{state, [event.target.name]: event.target.checked}]);
        if(newState.a){
            props.onStatusChange('Not-Started');
        } else if(newState.b){
            props.onStatusChange('In Progress');
        } else if(newState.c){
            props.onStatusChange('Completed');
        }

    };

    const { a, b, c } = state[0];
    let anySelected = [a, b, c].some((a) => a === true)
    const error = [a, b, c].filter((v) => v).length !== 1;

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox disabled={anySelected && !a} checked={a} onChange={handleChange} name="a" />}
                        label="Not Started"
                    />
                    <FormControlLabel
                        control={<Checkbox disabled={anySelected && !b} checked={b} onChange={handleChange} name="b" />}
                        label="In Progress"
                    />
                    <FormControlLabel
                        control={<Checkbox disabled={anySelected && !c} checked={c} onChange={handleChange} name="c" />}
                        label="Completed"
                    />
                </FormGroup>
                <FormHelperText>Pick One</FormHelperText>
            </FormControl>
        </div>
    );
}
