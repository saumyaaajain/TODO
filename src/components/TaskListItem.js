import React from "react";
import './style/ViewFile.css'
import Title from "../Check/Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import {useStyles} from '../Check/Order';

export const TaskLstItem = ({description, date, }) => {
    const classes = useStyles();
    return (
  <div className="item col">
      <React.Fragment>
          <Title>Recent Orders</Title>
          <Table size="small">
              <TableHead>
                  <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Ship To</TableCell>
                      <TableCell>Payment Method</TableCell>
                      <TableCell align="right">Sale Amount</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key={1}>
                      <TableCell>date</TableCell>
                      <TableCell>name</TableCell>
                      <TableCell>shipTo</TableCell>
                      <TableCell>paymentMethod</TableCell>
                      <TableCell align="right">amount</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
          <div className={classes.seeMore}>
              <Link color="primary" href="#" >
                  See more orders
              </Link>
          </div>
      </React.Fragment>
      <div>
          Task
          About
          Complete By
      </div>
      <div className="lineVer" />
      <div>
          {}
      </div>
  </div>
)};