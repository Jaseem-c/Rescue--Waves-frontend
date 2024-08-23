// DonationDetails.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

// Example donation data
const monetaryDonations = [
  { id: 1, donorName: 'John Doe', email: 'john@example.com', amount: '$500' },
  { id: 2, donorName: 'Jane Smith', email: 'jane@example.com', amount: '$300' },
  // Add more monetary donation data as needed
];

const nonMonetaryDonations = [
  { id: 1, donorName: 'Alice Brown', email: 'alice@example.com', item: 'Clothes', quantity: '50 units', status: 'Collected' },
  { id: 2, donorName: 'Bob Green', email: 'bob@example.com', item: 'Food', quantity: '200 kg', status: 'Pending' },
  // Add more non-monetary donation data as needed
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

function DonationDetails() {
  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Donation Details
      </Typography>

      {/* Monetary Donations Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Monetary Donations
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Donor Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monetaryDonations.map((donation) => (
              <StyledTableRow key={donation.id}>
                <TableCell>{donation.donorName}</TableCell>
                <TableCell>{donation.email}</TableCell>
                <TableCell>{donation.amount}</TableCell>
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

      {/* Non-Monetary Donations Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
        Non-Monetary Donations
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Donor Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nonMonetaryDonations.map((donation) => (
              <StyledTableRow key={donation.id}>
                <TableCell>{donation.donorName}</TableCell>
                <TableCell>{donation.email}</TableCell>
                <TableCell>{donation.item}</TableCell>
                <TableCell>{donation.quantity}</TableCell>
                <TableCell>{donation.status}</TableCell>
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

export default DonationDetails;
