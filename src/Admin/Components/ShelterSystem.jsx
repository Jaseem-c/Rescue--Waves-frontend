// ShelterSystem.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import AddShelter from './AddShelter';
import { deleteShelterApi, getAllBookingDetailsApi, getAllSheltersApi } from '../../Services/allApi';
import { addShelterContext } from '../../../Context/ContextShare';
import Swal from 'sweetalert2';



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
  // to add shelter automaticaly
  const {addShelterResponse}=useContext(addShelterContext)
  // to delete shelter autoamticaly
  const [shelterDeleteStatus,setShelterDeleteStatus]=useState(false)
  // to store shelter details
  const [shelters, setShelters] =useState([]);

  const getShelters=async()=>{
    const result=await getAllSheltersApi()
    setShelters(result.data)
  }
  console.log(shelters);

 

  // to delete shelter
  const handleDelete=async(id)=>{
    const result=await deleteShelterApi(id)

    if(result.status==200){
      setShelterDeleteStatus(true)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Shelter deleted successfully",
        showConfirmButton: false,
        timer: 2000
      });
      // alert('Shelter deleted successfully')
    }
    else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error deleting shelter",
        showConfirmButton: false,
        timer: 2000
      });
      // alert('Error deleting shelter')
    }
  }
  
  useEffect(()=>{
    getShelters()
    setShelterDeleteStatus(false)
  },[addShelterResponse,shelterDeleteStatus])


  // to store alluserbooking details
  const [allUserBookings, setAllUserBookings] = useState([]);

  const getAllUserBookingDetails=async()=>{
    const result=await getAllBookingDetailsApi()
    setAllUserBookings(result.data)
  }

  useEffect(()=>{
    getAllUserBookingDetails()
  },[])
  console.log(allUserBookings);
  
  

  return (
    <div>
      <div className='d-flex'>
          <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Shelter Management
          </Typography>
    
          {/* Add Shelter Button */}
         <div className='ms-auto'>
          <AddShelter/>
         </div>
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
              <StyledTableCell>Facilities</StyledTableCell>
              <StyledTableCell>Capacity</StyledTableCell>
              <StyledTableCell>Availability</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shelters?shelters.map((shelter) => (
              <StyledTableRow key={shelter._id}>
                <TableCell>{shelter?.name}</TableCell>
                <TableCell>{shelter?.location}</TableCell>
                <TableCell>{shelter?.facilities}</TableCell>
                <TableCell>{shelter?.capacity}</TableCell>
                <TableCell>{shelter?.availability}</TableCell>
            
                <TableCell align="center">
                  
                  <Tooltip title="Delete">
                    <IconButton color="error" type='button' onClick={()=>handleDelete(shelter?._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </StyledTableRow>
            )):<p className='text-danger'>No shelters</p>}
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
            <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Shelter Name</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Number of People</StyledTableCell>
              <StyledTableCell >Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUserBookings.length>0?allUserBookings.map((item) => (
              <StyledTableRow key={item?._id}>
                <TableCell>{item?.name}</TableCell>
                <TableCell>{item?.shelterName}</TableCell>
                <TableCell>{item?.location}</TableCell>
                <TableCell>{item?.email}</TableCell>
                <TableCell>{item?.phone}</TableCell>
                <TableCell>{item?.BookingDate}</TableCell>
                <TableCell align='center'>{item?.noOfPeople}</TableCell>
                <TableCell className='text-primary'>{item?.BookingStatus}</TableCell>
              </StyledTableRow>
            )):<p className='text-danger'>No Bookings</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ShelterSystem;
