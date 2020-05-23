import React from 'react';
import Timekeeper from "react-timekeeper";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {DateRangePicker} from "react-dates";
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
    time: '10:00',
};

export class AddTaskDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    //console.log(props);

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

    onSubmit = (e) => {
        const task = {
            title: this.state.title,
            description: this.state.description,
            createdAt: this.state.createdAt,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: 'in-progress' ,
        };
        this.props.onSubmit(task);
        this.setState(initialState);
    };

    render() {
        return (
            <div>
                <Grid container justify="space-around">
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
                    <DateRangePicker
                        startDate={this.state.startDate}
                        startDateId="start-date"
                        endDate={this.state.endDate} //
                        endDateId="end-date"
                        onDatesChange={this.onDateChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                    />
                    <Timekeeper
                        time={this.state.time}
                        onChange={this.onChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </Grid>
            </div>
        );
    }

}