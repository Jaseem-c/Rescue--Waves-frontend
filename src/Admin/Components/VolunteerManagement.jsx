// VolunteerManagement.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton, Tooltip, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

// Example data for volunteer programs
const volunteerPrograms = [
  { id: 1, name: 'Beach Cleanup', date: '2024-09-10', time: '10:00 AM', description: 'A community effort to clean up the local beaches.' },
  { id: 2, name: 'Tree Plantation', date: '2024-09-15', time: '08:00 AM', description: 'Planting trees in the local park to enhance green spaces.' },
  // Add more volunteer program data as needed
];

// Example data for participation details
const participationDetails = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', address: '123 Main St, City A', profileImage: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Jane Smith', phone: '098-765-4321', address: '456 Maple Ave, City B', profileImage: 'https://via.placeholder.com/40' },
  // Add more participation details as needed
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

function VolunteerManagement() {
  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Volunteer Management
      </Typography>

      {/* Add Volunteer Program Button */}
      <Button variant="contained" color="primary" sx={{ mb: 4 }}>
        Add Volunteer Program
      </Button>

      {/* Volunteer Programs Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Volunteer Programs
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {volunteerPrograms.map((program) => (
              <StyledTableRow key={program.id}>
                <TableCell>{program.name}</TableCell>
                <TableCell>{program.date}</TableCell>
                <TableCell>{program.time}</TableCell>
                <TableCell>{program.description}</TableCell>
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

      {/* Participation Details Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Volunteer Participation Details
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Profile Image</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participationDetails.map((participant) => (
              <StyledTableRow key={participant.id}>
                <TableCell>
                  <Avatar alt={participant.name} src={participant.profileImage} />
                </TableCell>
                <TableCell>{participant.name}</TableCell>
                <TableCell>{participant.phone}</TableCell>
                <TableCell>{participant.address}</TableCell>
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
  );
}

export default VolunteerManagement;
