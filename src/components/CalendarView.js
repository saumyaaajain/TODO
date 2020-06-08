import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as Cal, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import calendarViewFilter from "../selectors/CalendarView";
import {connect} from "react-redux";
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Table from "@material-ui/core/Table";
import "../style/CalendarView.css";
import Title from "./Title";

class CalendarView extends React.Component{
    constructor(props) {
        super(props);
        const today= moment();
        this.state = {
            date: moment(),
            formattedDate: today.format('DD/MM/YYYY'),
            event : props.location.list,
            dateWiseSortedMap: props.dateWiseSortedMap
        }
    }

    onDateChange = date => {
        this.setState({ date , formattedDate: date.format('DD/MM/YYYY')});
    };

    render() {
        return (
            <div className="div">
                <Grid container justify="space-between" direction="row">
                    <Grid item sm={4}>
                        <SingleDatePicker
                            date={this.state.date}
                            onDateChange={this.onDateChange}
                            focused={true}
                            numberOfMonths={1}
                            onFocusChange={({ focused }) => this.setState({ focused })}
                            id="your_unique_id"
                            startDate={moment().subtract(3, 'months')}
                        />
                    </Grid>
                    <Grid item spacing={4}>
                        <Paper className="paper-stack1">
                            <br/>

                            <Paper className="paper-stack2">
                                <br/>
                                <Paper className="paper">
                                    <Title className="title">Showing Tasks For: {this.state.formattedDate}</Title>
                                    {
                                        this.state.dateWiseSortedMap.has(this.state.formattedDate)
                                            ? this.state.dateWiseSortedMap.get(this.state.date.format('DD/MM/YYYY')).map((task) => (
                                                <Table size="small">
                                                    <TableBody>
                                                        <TableRow >
                                                            <TableCell>{task.title}</TableCell>
                                                            <TableCell align="right">...from: {task.taskListName}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            ))
                                            : 'No Tasks...'
                                    }
                                </Paper>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
         dateWiseSortedMap: calendarViewFilter(state.taskLists)
    }
};

export default connect(mapStateToProps)(CalendarView);