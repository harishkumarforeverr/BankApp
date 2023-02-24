import React from 'react';
import ReactRedux from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardHeader from '@material-ui/core/CardHeader';

function Statement() {
  const rows = useSelector(state => state.list);
  return (
    <Card>
      <CardHeader title="Account Statement" />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> When</TableCell>
              <TableCell align="right"> Type</TableCell>
              <TableCell align="right"> Amount {'\u20B9'}</TableCell>
              <TableCell align="right"> Details </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {
                    (new Date(row.time).toLocaleDateString('hi-IN'),
                    ' ',
                    new Date(row.time).toLocaleDateString())
                  }
                </TableCell>
                <TableCell align="right"> {row.type}</TableCell>
                <TableCell align="right"> {row.amount}</TableCell>
                <TableCell align="right"> {row.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CardActions>
        <Button color="primary" component={Link} to="/deposit">
          Deposit
        </Button>
        <Button color="primary" component={Link} to="/withdraw">
          Withdraw
        </Button>
      </CardActions>
    </Card>
  );
}
export default Statement;
