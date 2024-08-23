// CampaignManagement.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

// Example campaign data
const campaignData = [
  { id: 1, name: 'Flood Relief', date: '2024-01-15', time: '10:00 AM', location: 'Main Street', district: 'Central', state: 'New York', contact: '123-456-7890' },
  { id: 2, name: 'Medical Supplies', date: '2024-03-01', time: '02:00 PM', location: 'Health Center', district: 'West', state: 'California', contact: '987-654-3210' },
  // Add more campaign data as needed
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

function CampaignManagement() {
  return (
    <div>
      <div className='d-flex'>
          <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Campaign Management
          </Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ mb: 2 }} className='ms-auto'>
            Add Campaign
          </Button>
      </div>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }} className='mt-5 shadow'>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Campaign Name</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>District</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Contact</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaignData.map((campaign) => (
              <StyledTableRow key={campaign.id}>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.date}</TableCell>
                <TableCell>{campaign.time}</TableCell>
                <TableCell>{campaign.location}</TableCell>
                <TableCell>{campaign.district}</TableCell>
                <TableCell>{campaign.state}</TableCell>
                <TableCell>{campaign.contact}</TableCell>
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

export default CampaignManagement;
