import React from "react";
import {connect} from 'react-redux';
import './style/ViewFile.css';
import Paper from '@material-ui/core/Paper';
import Title from "../Check/Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
}}));

const ViewFile = (props) => {
    const classes = useStyles();
  console.log(props);
  return (
      <React.Fragment>
          <Paper className={classes.paper}>
              <Title>Recent Orders</Title>
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
                          <TableCell align="right">
                              <Title>
                                  Complete By
                              </Title>
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {props.task.map((tsk) => (
                          <TableRow key={tsk.id}>
                              <TableCell>{tsk.title}</TableCell>
                              <TableCell>{tsk.description}</TableCell>
                              <TableCell align="right">{tsk.completeBy.toString()}</TableCell>
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
    console.log(state);
    return {
        task: state.tasks,
    }
};

export default connect(mapStateToProps)(ViewFile);