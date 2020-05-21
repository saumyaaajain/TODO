import React from 'react';
import { connect } from 'react-redux';
import {
    sortByStartDate,
    sortByEndDate,
    setTextFilter,
    sortByDate,
    filterInProgress,
    filterCompleted,
    filterNone, sortByNone, filterNotStarted
} from '../actions/filter';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';

const TaskListFilters = (props) => {
    return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="description"
                    name="description"
                    label="Description"
                    fullWidth
                    autoComplete="Description"
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Select
                    labelId="dropDown"
                    id="select"
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            //console.log(props);
                            props.dispatch(sortByDate());
                        } else if(e.target.value === 'start-date'){
                            props.dispatch(sortByStartDate());
                        } else if(e.target.value === 'end-date'){
                            props.dispatch(sortByEndDate());
                        } else if(e.target.value === 'none'){
                            props.dispatch(sortByNone());
                        }
                    }}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="date">Created At</MenuItem>
                    <MenuItem value="start-date">Start Date</MenuItem>
                    <MenuItem value="end-date">End Date</MenuItem>
                </Select>

            </Grid>
            <Grid item xs={12} sm={3}>
                <Select
                    labelId="dropDown1"
                    id="select1"
                    value={props.filters.status}
                    onChange={(e) => {
                        if(e.target.value === 'in-progress'){
                            props.dispatch(filterInProgress());
                        } else if(e.target.value === 'completed'){
                            props.dispatch(filterCompleted());
                        } else if(e.target.value === 'none'){
                            props.dispatch(filterNone());
                        } else if(e.target.value === 'not-started'){
                            props.dispatch(filterNotStarted());
                        }
                    }}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="not-started">Not Started</MenuItem>
                    <MenuItem value="in-progress">In Progress</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>

            </Grid>
        </Grid>

    </div>
)};

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(TaskListFilters);
