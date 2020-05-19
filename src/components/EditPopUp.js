import React from 'react';
import Button from '@material-ui/core/Button';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);

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
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                autoComplete="title"
                                value={props.task.title}
                                onChange={onTitleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="Description"
                                fullWidth
                                autoComplete="Description"
                                value={props.task.description}
                                onChange={onDescriptionChange}
                            />
                        </Grid>
                    </Grid>
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