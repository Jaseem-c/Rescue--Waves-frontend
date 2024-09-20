import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { deleteUserApi, getAllUsersApi } from '../../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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




function Usermanagement() {
  // to store user details
  const [allUsers,setAllUsers]=useState([])
  // delete automatcialy
  const [deleteStatus,setDeleteStatus]=useState(false)

  const getAllUsers=async()=>{
    const result= await getAllUsersApi()
    setAllUsers(result.data)
  }
  console.log(allUsers);
  

  

  // to delete user
  const handleDelete=async(id)=>{
    console.log(id);
    
     const result=await deleteUserApi(id)
    if(result.status==200){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Deleted Successfully",
        showConfirmButton: false,
        timer: 2000
      });
    // toast.success("Deleted Successfully")
    setDeleteStatus(true)
    }
    else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to delete",
        showConfirmButton: false,
        timer: 2000
      });
      // toast.error("Failed to delete")
    }
  }

  useEffect(()=>{
    getAllUsers()
  },[deleteStatus])
   
  return (
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
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Mobile No</StyledTableCell>
              <StyledTableCell>Profile</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.length>0?allUsers.map((user) => (
              <StyledTableRow key={user?.id}>
                <TableCell>{user?.username}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.address}</TableCell>
                <TableCell>{user?.contact}</TableCell>
                <TableCell>{user?.profile}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Delete">
                    <IconButton color="error" type='button' onClick={()=>handleDelete(user?._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </StyledTableRow>
            )):<p className='text-danger text-center mt-3'>No user found</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <ToastContainer autoClose={3000} theme="colored" position='top-right'  />
    </>
  )
}

export default Usermanagement