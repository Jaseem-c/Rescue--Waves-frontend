// CampaignManagement.jsx
import React, {  useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

import AddCampaign from './AddCampaign';
import { deleteCampaignApi, getAllCampaign } from '../../Services/allApi';

import { addResponseContext } from '../../../Context/ContextShare';
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



function CampaignManagement() {
  // to store campaign details
  const [allcampaignDetails, setAllCampaignDetails] = useState([])

 
// to add automaticaly
const {addCampaignResponse}=useContext(addResponseContext)

// to delete automaticaly
  const[autoDelete,setAutoDelete]=useState(false)

  // to delete campaigns
  const handleDelete = async(id) => {
    const  result=await deleteCampaignApi(id)
    if(result.status==200){

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Campaign deleted successfully",
        showConfirmButton: false,
        timer: 1500
      });
  
      // alert("Campaign deleted successfully")
      setAutoDelete(true)
      
    }
    else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to delete campaign",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("Failed to delete campaign")
    }
  }

  // to get campaign
  const getCampaignDetails=async()=>{
    const result=await getAllCampaign()
    setAllCampaignDetails(result.data) 
  }
 
  useEffect(()=>{
    getCampaignDetails()
    },[addCampaignResponse,autoDelete])

  return (
    <>
      <div>
        <div className='d-flex'>
            <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
              Campaign Management
            </Typography>
            <div className='ms-auto'>
            <AddCampaign/>
            </div>
        </div>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }} className='mt-5 shadow'>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Campaign Title</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Contact</StyledTableCell>
             
                
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allcampaignDetails?allcampaignDetails?.map((campaign) => (
                <StyledTableRow key={campaign._id}>
                  <TableCell>{campaign?.title}</TableCell>
                  <TableCell>{campaign?.description}</TableCell>
                  <TableCell>{campaign?.date}</TableCell>
                  <TableCell>{campaign?.time}</TableCell>
                  <TableCell>{campaign?.dropoffLocation.join(',')}</TableCell>
                  <TableCell>{campaign?.contact}</TableCell>
             
                  <TableCell align="center">
                    <Tooltip title="Delete">
                      <IconButton color="error" type='button' onClick={()=>handleDelete(campaign?._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </StyledTableRow>
              )):<p className='text-danger'>no campaigns</p>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      
   
      
    </>
  );
}

export default CampaignManagement;
