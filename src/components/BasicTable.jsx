import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getMembers } from '../service/apiservice';

function createData(name, lastName, address, ssn) {
  return { name, lastName, address, ssn };
}



export default function BasicTable(props) {
    const [rows, setRows] = React.useState([]);

    const [update, setUpdate] = React.useState(props.update);
    
    React.useEffect(()=>{
        const fetched = [];
        getMembers().then(r => {
            setRows(r.data)
        })
        
    }, [update, props.update])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">SSN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.ssn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}