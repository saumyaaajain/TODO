import React from 'react';
import Button from '@material-ui/core/Button';
import Title from "./Title";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Alert } from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(props.state);

    const handleClose = () => {
        setOpen(false);
        props.setState(false);
    };

    return (
        <div>
            <Dialog
                id={props.task.id}
                open={open}
                TransitionComponent={Transition}
                fullWidth={true}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {props.task.status === 'COMPLETED' && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Task Completed
                </Alert>}
                <DialogTitle id="alert-dialog-slide-title">
                    <Title>{props.task.title}</Title>
                </DialogTitle>
                <DialogTitle>
                    {props.task.description}                                  ... from {props.task.title}
                </DialogTitle>
                <DialogContent>
                    <p>Created At: {props.task.createdAt.toString()}</p>
                    <p>Start Date: {props.task.startDate.toString()}</p>
                    <p>End Date: {props.task.endDate.toString()}</p>
                    <p>Updated At: {props.task.updatedAt.toString()}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}