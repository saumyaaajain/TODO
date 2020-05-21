import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const initialState = {
    title: '',
    description: '',
    createdAt: moment(),
    startDate: moment(),
    endDate: moment(),
    calendarFocused: false,
    days: 0,
    status: 'in-progress',
    error: '',
};


export default class AddFile extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = initialState;
    }

    onTitleChange = (e) => {
        e.preventDefault();
        console.log();
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

    onSubmit = (e) => {
        if(this.state.title.length === 0){
            this.setState({
                error: 'Title is mandatory!'
            });
        }
        if(this.state.description.length === 0){
            this.setState({
                error: 'Description is mandatory'
            });
        }
        const today = moment.now();
        if(this.state.startDate.diff(today, 'days') > 0){
            this.setState({status: 'not-started'})
            console.log('not');
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
                status: this.state.startDate.diff(today, 'days') > 0 ? 'not-started' : 'in-progress',
            };
            this.props.onSubmit(task);
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
                       <div>
                           Complete By:
                       </div>
                        {this.state.startDate && this.state.startDate.format('DD/MM/YYYY').toString()} - {this.state.endDate && this.state.endDate.format('DD/MM/YYYY').toString()}
                          ({this.state.days && this.state.days})

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
                {/*<Grid*/}
                {/*      container*/}
                {/*      direction="column"*/}
                {/*      justify="space-between"*/}
                {/*      alignItems="center"*/}
                {/*>*/}
                {/*   <Grid*/}
                {/*       container*/}
                {/*       direction="row"*/}
                {/*       justify="space-evenly"*/}
                {/*       alignItems="center"*/}
                {/*   >*/}
                {/*       <input*/}
                {/*           type = "text"*/}
                {/*           value={this.state.title}*/}
                {/*           onChange={this.onTitleChange}*/}
                {/*           placeholder="Task Title"*/}
                {/*       />*/}
                {/*       <input*/}
                {/*           type = "text"*/}
                {/*           value={this.state.description}*/}
                {/*           onChange={this.onDescriptionChange}*/}
                {/*           placeholder="Task Description"*/}
                {/*       />*/}
                {/*   </Grid>*/}

                {/*    <button*/}
                {/*        onClick={this.onSubmit}*/}
                {/*    >*/}
                {/*        Submit*/}
                {/*    </button>*/}
                {/*</Grid>*/}
            </React.Fragment>
        );
    }
}