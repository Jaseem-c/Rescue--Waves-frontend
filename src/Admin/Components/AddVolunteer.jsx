import React, { useContext, useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { addProgramsApi } from '../../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProgramsContext } from '../../../Context/ContextShare';
import Swal from 'sweetalert2';

function AddVolunteer() {

    // to add automaticaly
    const {setAddProgramsResponse}=useContext(addProgramsContext)

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }

        const handleShow = () => setShow(true);

         // to store campaign details
    const [programDetails, setProgramDetails] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location:"",
        image: ""
    })

    //  to preview image
    const [preview, setPreview] = useState("")
    // to change the value of key
    const [key, setKey] = useState(false)
      // to handle image
      const handleFile = (e) => {
        setProgramDetails({...programDetails,image:e.target.files[0]})
    }

    useEffect(()=>{
        if(programDetails.image)
        {
            setPreview(URL.createObjectURL(programDetails.image))
        }
    },[programDetails.image])

    // cancel
    const handleCancel=()=>{
        setProgramDetails({
            title: "",
            description: "",
            date: "",
            time: "",
            location:"",
            image: "" 
        })
        setPreview("")
        // on click on every cancel
        if (key == false) {
            setKey(true)
        }
        else {
            setKey(false)
        }
    }
    
    // add
    const  handleAdd=async()=>{
        // console.log(programDetails);

        const {title,description,date,time,image,location}=programDetails

        if(!title ||!description || !date || !time || !image || !location)
        {
            Swal.fire({
                position: "center",
                icon: "info",
                title: "please fill form completely",
                showConfirmButton: false,
                timer: 2000
              });
            // toast.info("please fill form completely")
        }
        else{
            const reqBody=new FormData()
            reqBody.append('title',title)
            reqBody.append('description',description)
            reqBody.append('date',date)
            reqBody.append('time',time)
            reqBody.append('location',location)
            reqBody.append('image',image)

            const reqHeader={
                "Content-Type": "multipart/form-data",
            }

            const result= await addProgramsApi(reqBody,reqHeader)

            if(result.status==200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "programme added successfull",
                    showConfirmButton: false,
                    timer: 2000
                  });
                
                // toast.success("programme added successfull")
                setAddProgramsResponse(result.data)
                handleClose()
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "something went wrong",
                    showConfirmButton: false,
                    timer: 2000
                  });
                // toast.error("something went wrong")
            }
        }
        
    }

    
    
  return (
   <>
   <div>
                <button className='btn btn-primary' onClick={handleShow}>Add programme</button>
                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Volunteer Program</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='w-100'>
                            <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                                <label htmlFor='volunteerprofile'>
                                    <input type="file" id='volunteerprofile' style={{ display: "none" }} key={key} onChange={(e) => handleFile(e)}    />
                                    <img src= {preview?preview:"https://cdn-icons-png.freepik.com/256/6631/6631821.png?semt=ais_hybrid"}alt="no image" width={"100%"} style={{ cursor: "pointer" }} />
                                </label>
                            </Col>
                            <Col xs={12} md={6} lg={6} >
                                <form >
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='title' value={programDetails.title} onChange={(e)=>setProgramDetails({...programDetails,title:e.target.value})}  />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='description' value={programDetails.description} onChange={(e)=>setProgramDetails({...programDetails,description:e.target.value})}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="date" className="form-control" required placeholder='Date' value={programDetails.date}   onChange={(e)=>setProgramDetails({...programDetails,date:e.target.value})}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='time' value={programDetails.time} onChange={(e)=>setProgramDetails({...programDetails,time:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='location' value={programDetails.location} onChange={(e)=>setProgramDetails({...programDetails,location:e.target.value})} />
                                    </div>
                                </form>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-danger' onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className='btn btn-success' onClick={handleAdd} >
                            Add
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>

            <ToastContainer autoClose={2000} theme='colored' />
   </>
  )
}

export default AddVolunteer