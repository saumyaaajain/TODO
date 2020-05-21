import React from "react";
import {connect} from 'react-redux';
import './style/ViewFile.css';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Title from "./Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import selectTasks from '../selectors/task';
import {add, edit, remove} from "../actions/task";
import TaskListFilters from "./TaskFilter";
import EditPopUp from "./EditPopUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import './style/ViewFile.css'
import {useStyles} from "./style/ViewFile";

const ViewFile = (props) => {
    const classes = useStyles();
    //console.log(props);
    props.getTitle('VIEW TASK');
  return (
      <React.Fragment>
          <Paper className={classes.paper}>
              <Title>Filters: </Title>
              <TaskListFilters/>
              <CssBaseline />
              <div className='line'/>
              <Table size="small">
                  <TableHead>
                      <TableRow>
                          <TableCell>
                              <Title style={{color: 'black'}}>
                                  Task Name
                              </Title>
                          </TableCell>
                          <TableCell>
                              <Title>
                                  Description
                              </Title>
                          </TableCell>
                          <TableCell>
                              <Title>
                                  Start At
                              </Title>
                          </TableCell>
                          <TableCell>
                              <Title>
                                  Complete By
                              </Title>
                          </TableCell>
                          <TableCell>
                              <Title>
                                  Days
                              </Title>
                          </TableCell>
                          <TableCell>
                              <Title>
                                  Status
                              </Title>
                          </TableCell>
                          <TableCell align="right">
                              <Title>
                                  Actions
                              </Title>
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {props.task.map((tsk) => (
                          <TableRow key={tsk.id}>
                              <TableCell>{tsk.title}</TableCell>
                              <TableCell>{tsk.description}</TableCell>
                              <TableCell>{tsk.startDate.format('DD/MM/YYYY').toString()}</TableCell>
                              <TableCell>{tsk.startDate.format('DD/MM/YYYY').toString()}</TableCell>
                              <TableCell>{tsk.days}</TableCell>
                              <TableCell>{tsk.status.toUpperCase()}</TableCell>
                              <TableCell align="right">
                                  <EditPopUp {...props} task={tsk}/>
                                  <Button
                                      onClick={() => props.dispatch(remove(tsk.id))}
                                  >
                                      Remove
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
              <div className={classes.seeMore}>
                  <Link color="primary" href="#" >
                      See more orders
                  </Link>
              </div>
          </Paper>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => {
    return {
        task: selectTasks(state.tasks, state.filters)
    }
};

export default connect(mapStateToProps)(ViewFile);