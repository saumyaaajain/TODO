import React from 'react';
import Button from '@material-ui/core/Button';
import Title from "../Check/Title";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from "@material-ui/core/TextField";
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid";
import {DateRangePicker} from "react-dates";
import {edit} from '../actions/task';
import { Alert, AlertTitle } from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';
import CheckBox from "./CheckBox";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState({status: props.task.status})

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onTitleChange = (e) => {
        e.preventDefault();
        props.task.title = e.target.value;
        console.log(props.task.title);
    };

    const onDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({description: e.target.value});
    };

    const onDateChange = ({ startDate, endDate }) => {
        this.setState({
            startDate,
            endDate,
        });
        if(startDate && endDate){
            this.setState({
                days: endDate.diff(startDate , 'days')
            });
        }
        console.log(this.state.startDate);
    };

    const onSubmit = (e) => {
        console.log(props);
        props.dispatch(edit(props.task.id, props.task));
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                fullWidth={true}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {props.task.status === 'completed' && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Task Completed
                </Alert>}
                <DialogTitle id="alert-dialog-slide-title">
                    <Title>{props.task.title}</Title>
                </DialogTitle>
                <DialogTitle>
                    {props.task.description}
                </DialogTitle>
                <DialogContent>
                    <CheckBox {...props} onStatusChange = {(stat) => {
                        console.log(stat);
                        setStatus({status: stat});
                    }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} color="primary">
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}