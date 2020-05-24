import React from 'react';
import Timekeeper from "react-timekeeper";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {DateRangePicker} from "react-dates";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import CheckIcon from "@material-ui/icons/Check";

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
    selectTime: false,
    selectDateRange: false,
    timeChangedFlag: false,
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

    onTimeChange = (time) =>{
        this.setState({time: time, timeChangedFlag: true});
    };

    setTime = () => {
        this.setState({time: this.state.time, selectTime: false});
    };

    onSubmit = (e) => {
        const task = {
            title: this.state.title,
            description: this.state.description,
            createdAt: this.state.createdAt,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: 'in-progress' ,
            time: this.state.timeChangedFlag ? this.state.time : '',
        };
        this.props.onSubmit(task);
        this.setState(initialState);
    };

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="space-evenly"
                spacing={3}
            >
                <Grid item spacing={2}>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        fullWidth
                        autoComplete="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <ToggleButton
                            value="check"
                            selected={this.state.selectTime}
                            onChange={() => {
                                this.setState({selectTime: (!this.state.selectTime)});
                            }}
                        >
                            <CheckIcon />
                        </ToggleButton>
                    </Grid>
                    <Grid item spacing={3}>
                        Set time
                    </Grid>

                </Grid>
                { this.state.selectTime && (
                    <div>
                        <Grid item spacing={3}>
                            <Timekeeper
                                time={this.state.time}
                                onChange={this.onTimeChange}
                            />
                        </Grid>
                        <Button onClick={this.setTime}> Set </Button>
                    </div>
                )}
                <Grid container spacing={2} direction="row">
                    <Grid item>
                        <ToggleButton
                            value="check"
                            selected={this.state.selectDateRange}
                            onChange={() => {
                                this.setState({selectDateRange: (!this.state.selectDateRange)});
                            }}
                        >
                            <CheckIcon />
                        </ToggleButton>
                    </Grid>
                    <Grid item spacing={3}>
                        Reoccur
                    </Grid>

                </Grid>
                { this.state.selectDateRange && (
                    <Grid item spacing={3} >
                        <DateRangePicker
                            startDate={this.state.startDate}
                            startDateId="start-date"
                            endDate={this.state.endDate} //
                            endDateId="end-date"
                            onDatesChange={this.onDateChange}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            numberOfMonths={1}
                        />
                    </Grid>
                )}
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                >
                    Submit
                </Button>
            </Grid>
        );
    }

}