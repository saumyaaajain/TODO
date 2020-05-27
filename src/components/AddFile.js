import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Title from "./Title";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Timekeeper from "react-timekeeper";

const initialState = {
    listTitle: '',
    listDescription: '',
    title: '',
    description: '',
    createdAt: moment(),
    startDate: moment(),
    endDate: moment(),
    calendarFocused: false,
    days: 0,
    status: 'in-progress',
    error: '',
    time: '20:00',
    timeObject: '',
    date: new Date(),
    addTask: false
};


export default class AddFile extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = initialState;
    }

    onListTitleChange = (e) => {
        e.preventDefault();
        this.setState({listTitle: e.target.value});
    };

    onListDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({listDescription: e.target.value});
    };

    onTitleChange = (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
    };

    onDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({description: e.target.value});
    };

    onDateChange = ({ startDate, endDate }) => {
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
    onFocusChange = ({ focused }) => {
        console.log(focused);
        this.setState({ focused });
    };

    onChange = (time) =>{
        console.log(time);
    };

    onAddTask = () => {
        this.setState({
            addTask : !this.state.addTask
        })
    };

    onTimeChange = (time) =>{
        this.setState({time: time.formatted24, timeObject: time , timeChangedFlag: true});
    };

    onSubmit = (e) => {
        if(this.state.title.length === 0){
            this.setState({
                error: 'Title is mandatory!'
            });
        }
        if(this.state.description.length === 0) {
            this.setState({
                error: 'Description is mandatory'
            });
        }
        if(this.state.error.length === 0){
            this.setState({
                error: ''
            });
            console.log(this.state.status);
            const task = {
                title: this.state.title,
                description: this.state.description,
                createdAt: this.state.createdAt,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                status: 'in-progress',
            };
            const taskList = {
                title: this.state.listTitle,
                description: this.state.listDescription,
                tasks: task.title === '' ? [] : [task]
            }
            this.props.onSubmit(taskList);
            this.setState(initialState);
        }
    };


    render() {
        return (
            <React.Fragment>
                {/*<Typography variant="h6" gutterBottom>*/}
                {/*    Add Task*/}
                {/*</Typography>*/}

                <div style={{color:'red'}}>
                    {this.state.error && this.state.error}
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="title"
                            name="title"
                            label="Title"
                            fullWidth
                            autoComplete="title"
                            value={this.state.listTitle}
                            onChange={this.onListTitleChange}
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
                            value={this.state.listDescription}
                            onChange={this.onListDescriptionChange}
                        />
                    </Grid>
                    <Grid container direction="row" justify="space-between">
                        <Title> Add A Task</Title>
                        {
                            this.state.addTask
                                ? <Tooltip title="Close Add Task"><IconButton onClick={this.onAddTask}><CancelPresentationIcon/></IconButton></Tooltip>
                                : <Tooltip title="Open Add Task"><IconButton onClick={this.onAddTask}><KeyboardArrowDownIcon/></IconButton></Tooltip>
                        }
                    </Grid>
                    {this.state.addTask &&
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                autoComplete="title"
                                value={this.state.title}
                                onChange={this.onTitleChange}
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
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Timekeeper
                                time={this.state.time}
                                onChange={this.onTimeChange}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DateRangePicker
                                startDate={this.state.startDate}
                                startDateId="start-date"
                                endDate={this.state.endDate} //
                                endDateId="end-date"
                                onDatesChange={this.onDateChange}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                            />
                        </Grid>
                    </Grid>
                    }
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}