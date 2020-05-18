import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const initialState = {
    title: '',
    description: '',
    createdAt: moment(),
    calendarFocused: false,
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

    onDateChange = (createdAt) => {
        //const createdAt = createdAtMoment.toString();
        try {
            console.log(createdAt);
            if (createdAt) {
                this.setState(() => ({ createdAt }));
            }
        } catch (error) {
            console.log(error);
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
            description: this.state.description,
            completeBy: this.state.createdAt

        };
        this.props.onSubmit(task);
        this.setState(initialState);
        console.log(this.state);
    };


    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
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
                        {this.state.createdAt.format('DD/MM/YYYY').toString()}
                        {/*<Text*/}
                        {/*    required*/}
                        {/*    id="firstName"*/}
                        {/*    name="firstName"*/}
                        {/*    label="First name"*/}
                        {/*    fullWidth*/}
                        {/*    autoComplete="fname"*/}
                        {/*    onChange={this.onDescriptionChange}*/}
                        {/*/>*/}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
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