import React, { useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { addSheltersApi } from '../../Services/allApi';
import { useContext } from 'react';
import { addShelterContext } from '../../../Context/ContextShare';
import Swal from 'sweetalert2';

function AddShelter() {
    // to add automaticaly
    const {setAddShelterResponse}=useContext(addShelterContext);

    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false);
        handleCancel()
    }
    const handleShow = () => setShow(true);

    // to store shelter details

    const [shelterDetails,setShelterDetails]=useState({
        name: "",
        location:"",
        facilities:"",
        capacity: "",
        availability:"",
        photo:""
    })

    // to change the value of key
    const [key, setKey] = useState(false)
    //  to preview image
    const [preview, setPreview] = useState("")
     // to handle image
     const handleFile = (e) => {
        setShelterDetails({...shelterDetails,photo:e.target.files[0]})
    }

    useEffect(()=>{
        if(shelterDetails.photo)
        {
            setPreview(URL.createObjectURL(shelterDetails.photo))
        }
    },[shelterDetails.photo])

    console.log(shelterDetails);

    // to handle cancel
    const handleCancel=()=>{
        setShelterDetails({
            name: "",
        location:"",
        facilities:"",
        capacity: "",
        availability:"",
        photo:""
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
    const handleAdd=async()=>{
        
        const {name,location,facilities,capacity,availability,photo}=shelterDetails

        if(!name || !location || !facilities || !capacity || !availability || !photo)
        {
            Swal.fire({
                position: "center",
                icon: "info",
                title: "Please fill form completely",
                showConfirmButton: false,
                timer: 2000
              });
            // alert("Please fill form completely")
        }
        
        else{
           
            const reqBody= new FormData()
            reqBody.append("name",name)
            reqBody.append("location",location)
            reqBody.append("facilities",facilities)
            reqBody.append("capacity",capacity)
            reqBody.append("availability",availability)
            reqBody.append("photo",photo)

            const reqHeader={
                "Content-Type": "multipart/form-data",
            }

            const result=await addSheltersApi(reqBody,reqHeader)

            if(result.status==200){
                setAddShelterResponse(result.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Shelter Added Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
                // alert("Shelter Added Successfully")
                handleClose()
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to add shelter",
                    showConfirmButton: false,
                    timer: 2000
                  });
                // alert("Failed to add shelter")
            }


        }
    }
    



  return (
    <>
    <div>
                <button className='btn btn-primary' onClick={handleShow}>Add Shelter</button>
                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Shelters</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='w-100'>
                            <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                                <label htmlFor='volunteerprofile'>
                                    <input type="file" id='volunteerprofile' style={{ display: "none" }} key={key} onChange={(e) => handleFile(e)}  />
                                    <img src={preview?preview:"https://cdn-icons-png.freepik.com/256/6631/6631821.png?semt=ais_hybrid" }alt="no image" width={"100%"} style={{ cursor: "pointer" }} />
                                </label>
                            </Col>
                            <Col xs={12} md={6} lg={6} >
                                <form >
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Name' value={shelterDetails.name} onChange={(e)=>setShelterDetails({...shelterDetails,name:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='location' value={shelterDetails.location} onChange={(e)=>setShelterDetails({...shelterDetails,location:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Facilities' value={shelterDetails.facilities} onChange={(e)=>setShelterDetails({...shelterDetails,facilities:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Capacity' value={shelterDetails.capacity} onChange={(e)=>setShelterDetails({...shelterDetails,capacity:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Availability' value={shelterDetails.availability} onChange={(e)=>setShelterDetails({...shelterDetails,availability:e.target.value})}  />
                                    </div>
                                </form>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-danger' type='button' onClick={handleCancel} >
                            Cancel
                        </button>
                        <button className='btn btn-success' type='button' onClick={handleAdd} >
                            Add
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
    </>
  )
}

export default AddShelter