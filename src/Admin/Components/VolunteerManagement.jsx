// VolunteerManagement.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, IconButton, Tooltip, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import AddVolunteer from './AddVolunteer';
import { deleteProgramsApi, getAllVolunteersApi, getProgramsApi, updateVolunteerApi } from '../../Services/allApi';
import { addProgramsContext } from '../../../Context/ContextShare';
import { serverUrl } from '../../Services/serverUrl';
import Swal from 'sweetalert2';
import { faL } from '@fortawesome/free-solid-svg-icons';




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


  // to update automaticaly=
  const [autoupdate, setAutoUpdate] = useState(false)
  // to delete automaticaly
  const [AutodDelteProgram, setAutoDeleteProgram] = useState(false)
  // to add automaticaly
  const { addProgramsResponse } = useContext(addProgramsContext)
  // to store programs
  const [programs, setPrograms] = useState([])

  const getAllPrograms = async () => {
    const result = await getProgramsApi()
    setPrograms(result.data)

  }
  console.log(programs);



  // delete programs
  const handleDelete = async (id) => {
    // console.log(id);

    const result = await deleteProgramsApi(id)
    if (result.status == 200) {
      setAutoDeleteProgram(true)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Program deleted successfully",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("Program deleted successfully")
    }
    else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error deleting program",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("Error deleting program")
    }
  }
  useEffect(() => {
    getAllPrograms()
    setAutoDeleteProgram(false)
  }, [addProgramsResponse, AutodDelteProgram])


  // to get all volunteer details
  const [volunteerDetails, setVolunteerDetails] = useState([])

  const getAllVolunteerDetails = async () => {
    const result = await getAllVolunteersApi()
    setVolunteerDetails(result.data)
  }
  console.log(volunteerDetails);



  // to update status of volunteer
  const handleUpdate = async (id) => {

    // console.log(id);

    const result = await updateVolunteerApi(id)
    console.log(result.data.status);
    if(result.status==200)
    {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "status updated  Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setAutoUpdate(true)
    }
    else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error updating volunteer status",
        showConfirmButton: false,
        timer: 1500
      });
    
    }


  }


  useEffect(() => {
    getAllVolunteerDetails()
    setAutoUpdate(false)
  }, [autoupdate])


  return (
    <>
      <div>
        <div className='d-flex'>
          <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
            Volunteer Management
          </Typography>

          {/* Add Volunteer Program Button */}
          <div className='ms-auto'>
            <AddVolunteer />
          </div>

        </div>
        {/* Volunteer Programs Section */}
        <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary' }}>
          Volunteer Programs
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Ttile</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programs.map((program) => (
                <StyledTableRow key={program.id}>
                  <TableCell>{program?.title}</TableCell>
                  <TableCell>{program?.date}</TableCell>
                  <TableCell>{program?.time}</TableCell>
                  <TableCell>{program?.description}</TableCell>
                  <TableCell>{program?.location}</TableCell>
                  <TableCell align="center">

                    <Tooltip title="Delete">
                      <IconButton color="error" type='button' onClick={() => handleDelete(program?._id)}>
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
                <StyledTableCell>program</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {volunteerDetails.map((volunteer) => (
                <StyledTableRow key={volunteer._id}>
                  <TableCell>
                    <Avatar alt={volunteer?.name} src={`${serverUrl}/uploads/${volunteer?.profile}`} />
                  </TableCell>
                  <TableCell>{volunteer?.name}</TableCell>
                  <TableCell>{volunteer?.phoneNo}</TableCell>
                  <TableCell>{volunteer?.address}</TableCell>
                  <TableCell>{volunteer?.program}</TableCell>
                  <TableCell>{volunteer?.date}</TableCell>
                  <TableCell>{volunteer?.location}</TableCell>
                  <TableCell>
                    {volunteer.status === 'pending' ? (
                      <button className="btn btn-danger" onClick={() => handleUpdate(volunteer?._id)}>Pending</button>
                    ) : (
                      <button className="btn btn-success">Completed</button>
                    )}
                  </TableCell>




                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}

export default VolunteerManagement;
