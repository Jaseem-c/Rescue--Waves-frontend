// ShelterSystem.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

// Example shelter data
const shelters = [
  { id: 1, name: 'Shelter A', location: 'City A', capacity: 100, status: 'Available' },
  { id: 2, name: 'Shelter B', location: 'City B', capacity: 50, status: 'Full' },
  // Add more shelter data as needed
];

const shelterBookings = [
  { id: 1, name: 'Shelter A', email: 'user1@example.com', phoneNumber: '123-456-7890', numberOfPeople: 3 },
  { id: 2, name: 'Shelter B', email: 'user2@example.com', phoneNumber: '098-765-4321', numberOfPeople: 2 },
  // Add more booking data as needed
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

function ShelterSystem() {
  return (
    <div>
      <div className='d-flex'>
          <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Shelter Management
          </Typography>
    
          {/* Add Shelter Button */}
          <Button variant="contained" color="primary" sx={{ mb: 4 }} className='ms-auto'>
            Add Shelter
          </Button>
      </div>

      {/* Shelter Details Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Shelter Details
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Shelter Name</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Capacity</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shelters.map((shelter) => (
              <StyledTableRow key={shelter.id}>
                <TableCell>{shelter.name}</TableCell>
                <TableCell>{shelter.location}</TableCell>
                <TableCell>{shelter.capacity}</TableCell>
                <TableCell>{shelter.status}</TableCell>
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

      {/* Shelter Booking Details Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Shelter Booking Details
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Shelter Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Number of People</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shelterBookings.map((booking) => (
              <StyledTableRow key={booking.id}>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.phoneNumber}</TableCell>
                <TableCell>{booking.numberOfPeople}</TableCell>
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

export default ShelterSystem;
