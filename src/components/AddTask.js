import React from 'react';
import Timekeeper from "react-timekeeper";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {DateRangePicker} from "react-dates";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import CheckIcon from "@material-ui/icons/Check";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    time: '20:00',
    timeObject: '',
    selectTime: false,
    selectDateRange: false,
    timeChangedFlag: false,
    reoccur: false,
    reoccurDay: '',
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
        this.setState({time: time.formatted24, timeObject: time , timeChangedFlag: true});
    };

    setTime = () => {
        this.setState({time: this.state.time.formatted24, selectTime: false});
    };

    onSubmit = (e) => {
        console.log(this.state.timeObject);
        const task = {
            title: this.state.title,
            description: this.state.description,
            createdAt: this.state.createdAt,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: 'in-progress' ,
            time: this.state.timeChangedFlag ? this.state.timeObject.formatted24 : "",
            reoccur: this.state.reoccur,
            reoccurDay: this.state.reoccurDay
        };
        this.props.onSubmit(task);
        this.setState(initialState);
    };

    handleChange = (event) => {
        this.setState({reoccurDay: event.target.value, reoccur: true});
    };

    handleClose = () => {
        this.setState({selectOpen: false});
    };

    handleOpen = () => {
        this.setState({selectOpen: false});
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
                <Grid item spacing={3}>
                    <div>
                        <FormControl>
                            <InputLabel id="demo-controlled-open-select-label">Reoccur</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={this.state.selectOpen}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.reoccurDay}
                                onChange={this.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Monday'}>Monday</MenuItem>
                                <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                                <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                                <MenuItem value={'Thursday'}>Thursday</MenuItem>
                                <MenuItem value={'Friday'}>Friday</MenuItem>
                                <MenuItem value={'Saturday'}>Saturday</MenuItem>
                                <MenuItem value={'Sunday'}>Sunday</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
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
                        Set Duration
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