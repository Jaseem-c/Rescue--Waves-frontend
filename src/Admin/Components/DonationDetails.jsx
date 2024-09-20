// DonationDetails.jsx
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { getAllMonetaryDonationsApi, getAllNonMonetaryDonationsApi, updateNonMonetaryDonationStatusApi } from '../../Services/allApi';
import Swal from 'sweetalert2';




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
  // to update automatic
  const [autoStatusUpdate,setAutoStatusUpdate]=useState(false)
  // to store all monetary donation details 
  const [monetaryDonations, setMonetaryDonations] = useState([]);
  const getMonetrayDonations=async()=>{
    const response = await getAllMonetaryDonationsApi()
    if(response.status==200)
    {
      setMonetaryDonations(response.data)
    }
  }
  console.log(monetaryDonations);

  // to store non monetay donations
  const [nonMonetaryDonations, setNonMonetaryDonations] = useState([])
  const getNonMonetaryDonations=async()=>{
    const response=await getAllNonMonetaryDonationsApi()
    if(response.status==200){
      setNonMonetaryDonations(response.data)
    }
    else{
      console.log(response.response.data)
    }
  }
  console.log(nonMonetaryDonations);

  // to handle update in progress to collect
  const handleUpdate=async(id)=>{
    const result=await updateNonMonetaryDonationStatusApi(id)
    if(result.status==200){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "status updated  Successfully",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("updated")
      setAutoStatusUpdate(true)
    }
    else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "status update failed",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
  
  
  useEffect(()=>{
    getMonetrayDonations()
  },[])
  useEffect(()=>{
    getNonMonetaryDonations()
    setAutoStatusUpdate(false)
  },[autoStatusUpdate])
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
              <StyledTableCell>Date</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {monetaryDonations.length>0? monetaryDonations.map((donation) => (
              <StyledTableRow key={donation.id}>
                <TableCell>{donation?.name}</TableCell>
                <TableCell>{donation?.Email}</TableCell>
                <TableCell>{donation.donationAmount}</TableCell>
                <TableCell>{donation?.donationDate}</TableCell>
              </StyledTableRow>
            )):<p className='text-danger'>no donations</p>}
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
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {nonMonetaryDonations.length>0?nonMonetaryDonations.map((donation) => (
              <StyledTableRow key={donation._id}>
                <TableCell>{donation?.name}</TableCell>
                <TableCell>{donation?.Email}</TableCell>
                <TableCell>{donation?.donationType}</TableCell>
                <TableCell>{donation?.noOfItems}</TableCell>
                <TableCell>{donation?.donationDate}</TableCell>
                <TableCell>
                  {donation.status==="In Progress"?(
                    <button className="btn btn-danger" type='button' onClick={()=>handleUpdate(donation?._id)}>In Progress</button>
                  ):(
                    <button className="btn btn-success">Collected</button>
                  )}
                  </TableCell>
              </StyledTableRow>
            )):<p className='text-danger'>No donations</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DonationDetails;
