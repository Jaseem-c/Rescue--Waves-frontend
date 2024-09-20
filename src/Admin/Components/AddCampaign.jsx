import React, {  useContext, useEffect } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';

import { addCampaignApi } from '../../Services/allApi';
import { addResponseContext } from '../../../Context/ContextShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

function AddCampaign() {
    // to add automaticaly
    const {setAddCampaignResponse}=useContext(addResponseContext)

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }
    const handleShow = () => setShow(true);

    // to store campaign details
    const [campaignDetails, setCampaignDetails] = useState({
        title: "",
        description: "",
        donationItems: [],
        dropoffLocation: [],
        date: "",
        time: "",
        contact: "",
        image: ""
    })
    // console.log(campaignDetails);
    //  to preview image
    const [preview, setPreview] = useState("")
    // to change the value of key
    const [key, setKey] = useState(false)


    // to handle image
    const handleFile = (e) => {
        setCampaignDetails({ ...campaignDetails, image: e.target.files[0] })
    }

    useEffect(() => {
        if (campaignDetails.image) {
            setPreview(URL.createObjectURL(campaignDetails.image))
        }
    }, [campaignDetails.image])
    // to handle cancel
    const handleCancel = () => {
        setCampaignDetails({
            title: "",
            description: "",
            donationItems: [],
            dropoffLocation: [],
            date: "",
            time: "",
            contact: "",
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
    //   to add campaign details
    const handleadd = async () => {
        const { title, description, donationItems, dropoffLocation, date, time, contact, image } = campaignDetails

        if (!title || !description || !donationItems || !dropoffLocation || !date || !time || !contact || !image) {
            Swal.fire({
                position: "top-end",
                icon: "info",
                title: "please fill form completely",
                showConfirmButton: false,
                timer: 1500
              });
            // toast.info("please fill form completely")
        }
       else{
        const reqBody = new FormData()

        
        
            reqBody.append('title', title)
            reqBody.append('description', description)
            reqBody.append('donationItems',donationItems )
            reqBody.append('dropoffLocation', dropoffLocation)
            reqBody.append('date', date)
            reqBody.append('time', time)
            reqBody.append('contact', contact)
            reqBody.append("image",image)

            // header
            
            const reqHeader={
                "Content-Type": "multipart/form-data"
            }

            const result=await addCampaignApi(reqBody,reqHeader)
            // console.log(result);

            if(result.status==200){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Campaign Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
               
                // toast.success("Campaign Added Successfully");
                setAddCampaignResponse(result.data)
                handleClose()
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to add campaign",
                    showConfirmButton: false,
                    timer: 1500
                  });
            //    toast.error("Failed to add campaign")
            }

       }
    }
    return (
        <>
            <div>
                <button className='btn btn-primary' onClick={handleShow}>Add Campaign</button>
                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Campaign</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='w-100'>
                            <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                                <label htmlFor='projectimg'>
                                    <input type="file" id='projectimg' style={{ display: "none" }} key={key} onChange={(e) => handleFile(e)} />
                                    <img src={preview ? preview : "https://cdn-icons-png.freepik.com/256/6631/6631821.png?semt=ais_hybrid"} alt="no image" width={"100%"} style={{ cursor: "pointer" }} />
                                </label>
                            </Col>
                            <Col xs={12} md={6} lg={6} >
                                <form >
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='title' value={campaignDetails.title} onChange={(e) => setCampaignDetails({ ...campaignDetails, title: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='description' value={campaignDetails.description} onChange={(e) => setCampaignDetails({ ...campaignDetails, description: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Donation Items' value={campaignDetails.donationItems} onChange={(e) => setCampaignDetails({ ...campaignDetails, donationItems: e.target.value.split(',').map(item => item.trim()) })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='Drop off Location' value={campaignDetails.dropoffLocation} onChange={(e) => setCampaignDetails({ ...campaignDetails, dropoffLocation: e.target.value.split(',').map(item => item.trim()) })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="date" className="form-control" required placeholder='Date' value={campaignDetails.date} onChange={(e) => setCampaignDetails({ ...campaignDetails, date: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='time' value={campaignDetails.time} onChange={(e) => setCampaignDetails({ ...campaignDetails, time: e.target.value })} />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <input type="text" className="form-control" required placeholder='contact' value={campaignDetails.contact} onChange={(e) => setCampaignDetails({ ...campaignDetails, contact: e.target.value })} />
                                    </div>
                                </form>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-danger' onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className='btn btn-success' onClick={handleadd}>
                            Add
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
            <ToastContainer theme='colored' />
        </>
    )
}

export default AddCampaign