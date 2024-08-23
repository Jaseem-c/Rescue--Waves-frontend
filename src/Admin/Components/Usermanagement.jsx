import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const userData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', place: 'New York', mobileNo: '123-456-7890', profile: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', place: 'Los Angeles', mobileNo: '987-654-3210', profile: 'Editor' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', place: 'Chicago', mobileNo: '456-789-0123', profile: 'Contributor' },
    // Add more user data as needed
  ];
  
  // Styled components
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
  }));

function Usermanagement() {
   
  return (
    <>
 <>
 <div>
      <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        All Users
      </Typography>
      <TableContainer component={Paper}  className='mt-5 shadow'>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Place</StyledTableCell>
              <StyledTableCell>Mobile No</StyledTableCell>
              <StyledTableCell>Profile</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <StyledTableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.place}</TableCell>
                <TableCell>{user.mobileNo}</TableCell>
                <TableCell>{user.profile}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Delete">
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
    </>
  )
}

export default Usermanagement