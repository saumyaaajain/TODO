import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default class AddFile extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: '',
            description: '',
            createdAt: moment(),
            calendarFocused: false,
        }
    }

    onTitleChange = (e) => {
        e.preventDefault();
        console.log()
        this.setState({title: e.target.value});
    };

    onDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({description: e.target.value});
    };

    onDateChange = (createdAtMoment) => {
        const createdAt = createdAtMoment.toString();
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        console.log(focused);
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        console.log(this.state);
        const task = {
            title: this.state.title,
            description: this.state.task,
            completeBy: this.state.createdAt

        }
        this.props.onSubmit(task);
    };


    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
                <Grid
                      container
                      direction="column"
                      justify="space-between"
                      alignItems="center"
                >
                   <Grid
                       container
                       direction="row"
                       justify="space-evenly"
                       alignItems="center"
                   >
                       <input
                           type = "text"
                           value={this.state.title}
                           onChange={this.onTitleChange}
                           placeholder="Task Title"
                       />
                       <input
                           type = "text"
                           value={this.state.description}
                           onChange={this.onDescriptionChange}
                           placeholder="Task Description"
                       />
                   </Grid>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                </Grid>
            </React.Fragment>
        );
    }
}