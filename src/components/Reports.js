import React from 'react';
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./style/Dashboard";
import List from "@material-ui/core/List";
import TitleHeading from './Title';
import Grid from "@material-ui/core/Grid";
import clsx from 'clsx';
import { Stack } from '@devexpress/dx-react-chart';
import moment from "moment";
import {
    Chart,
    PieSeries,
    Title,
    Legend,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import {getData} from "../selectors/task";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { withStyles } from '@material-ui/core/styles';


const stacks = [
    { series: ['👶 Young', '🧑 Adult', '🧓 Old'] },
];

const legendStyles = {
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
        width: '100%',
    },
};
const legendLabelStyles = theme => ({
    label: {
        paddingTop: theme.spacing(1),
    },
});
const legendItemStyles = {
    item: {
        flexDirection: 'column',
    },
};

const LegendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item {...restProps} className={classes.item} />
);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

const Label = ({ text, ...props }) => (
    <ValueAxis.Label {...props} text={`${Math.abs(text)}%`} />
);

const Reports = (props) => {
    props.getTitle('REPORT');
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const chartData = props.data.pieData;
    console.log(props);
    console.log(props.data.upcomingTasks.length);
    const today = moment.now();

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <Chart
                            data={chartData}
                        >
                            <PieSeries
                                valueField="number"
                                argumentField="status"
                            />
                            <Title
                                text="Status Report"
                            />
                            <Legend
                                position="bottom"
                                rootComponent={LegendRoot}
                                itemComponent={LegendItem}
                                labelComponent={LegendLabel}
                            />
                            <Stack
                                stacks={stacks}
                            />
                            <Animation />
                        </Chart>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <TitleHeading>Tasks In Progress</TitleHeading>
                        {
                            props.data.tasksInProgress.length === 0
                                ? 'Good Job !\n All tasks are done\nNo work to do...'
                                : props.data.tasksInProgress.map((task) => <List key={task.id} style={{display:'flex', flexDirection:'row'}}>
                                    {task.title}
                                </List>)
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper className={classes.paper}>
                        <TitleHeading> Tasks Due Today</TitleHeading>
                        {props.data.tasksDueToday.length === 0
                            ? 'No Tasks Due Today, add some tasks...'
                            : <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Title
                                        </TableCell>
                                        <TableCell>
                                            Description
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.data.tasksDueToday.map((tsk) => (
                                        <TableRow key={tsk.id}>
                                            <TableCell>{tsk.title}</TableCell>
                                            <TableCell>{tsk.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper className={classes.paper}>
                        <TitleHeading>Upcoming Tasks</TitleHeading>
                        {props.data.upcomingTasks.length !== 0
                        ? <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Title
                                        </TableCell>
                                        <TableCell>
                                            Complete By
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.data.upcomingTasks.map((tsk) => (
                                        <TableRow key={tsk.id}>
                                            <TableCell>{tsk.title}</TableCell>
                                            <TableCell>{tsk.endDate.format('DD/MM/YY').toString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            : 'No Tasks Due Today'
                        }
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        data: getData(state.tasks)
    }
};

export default connect(mapStateToProps)(Reports);