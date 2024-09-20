import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { serverUrl } from '../Services/serverUrl';
import { registerVolunteerApi } from '../Services/allApi';
import Swal from 'sweetalert2';

function VolunteerCrad({ program }) {



  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  // regsiter
  const [volunteerDetails, setVolunteerDetails] = useState({
    name: "",
    phoneNo: "",
    address: "",
    status: "pending",
    date: program?.date,
    location: program?.location,
    profile: "",
    program: program?.title
  })

  //  to preview image
  const [preview, setPreview] = useState("")
  // to change the value of key
  const [key, setKey] = useState(false)
  // to handle image
  // existing image
  const [existingImage, setExistingImage] = useState('')
  const handleFile = (e) => {
    setVolunteerDetails({ ...volunteerDetails, profile: e.target.files[0] })
  }

  useEffect(() => {
    if (volunteerDetails.profile) {
      try {
        setPreview(URL.createObjectURL(volunteerDetails.profile))
      } catch (error) {
        console.error("Error creating object URL:", error);
      }

    }
  }, [volunteerDetails.profile])

  // console.log(volunteerDetails);


  // cancel
  const handleCancel = () => {
    setVolunteerDetails({
      address: "",
      status: "pending",
      date: program?.date,
      location: program?.location,
      profile: existingImage ? existingImage : "",
      program: program?.title
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

  // register

  const handleRegister = async () => {
    const { name, phoneNo, address, program, date, location, status, profile } = volunteerDetails

    // console.log({name,phoneNo,address,program,date,location,status,profile});

    if (!name || !phoneNo || !address || !program || !date || !location || !status || !profile) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "please fill form completely",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("please fill form completely")
    }
    else {
      const reqBody = new FormData()
      reqBody.append('name', name)
      reqBody.append('phoneNo', phoneNo)
      reqBody.append('address', address)
      reqBody.append('program', program)
      reqBody.append('date', date)
      reqBody.append('location', location)
      reqBody.append('status', status)
      { preview ? reqBody.append('profile', profile) : reqBody.append('profile', existingImage) }

      const token = sessionStorage.getItem("token")
      // console.log(token);

      if (preview) {
        const reqHeader = {
          'Content-Type': 'multipart/form-data',
          // to verify token
          "Authorization": `Bearer ${token}`
        }
        const result = await registerVolunteerApi(reqBody, reqHeader)
        // console.log(result);

        if (result.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 2000
          });

          // alert("Registration Successfully")
          handleClose()
        }
        else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Registration Failed",
            showConfirmButton: false,
            timer: 2000
          });
          // alert(result.response.data)
          handleClose()

        }
      }
      else {
        const reqHeader = {
          'Content-Type': 'application/json',
          // to verify token
          "Authorization": `Bearer ${token}`
        }
        const result = await registerVolunteerApi(reqBody, reqHeader)
        // console.log(result);

        if (result.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 2000
          });

          // alert("Registration Successfully")
          handleClose()
        }
        else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: result.response.data,
            showConfirmButton: false,
            timer: 2000
          });
          // alert(result.response.data)
          handleClose()

        }
      }

    }

  }


  // campare dates to active or deactive programs
  const [active, setAtcive] = useState(true)
  const compareDates = () => {
    const today = new Date().toLocaleDateString('en-CA');
    const programDate = program?.date
    // console.log(programDate);

    // console.log(today);
    if (today > programDate) {
      setAtcive(false)

    }


  }
  useEffect(() => {
    compareDates()
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setVolunteerDetails({ ...volunteerDetails, name: user.username, phoneNo: user.contact, profile: user.profile,address:user.address})
      setExistingImage(user.profile)
    }
  }, [show])

  // 
  return (
    <>
      <Card s className='shadow' style={{
        width: '100%',
        pointerEvents: active ? 'auto' : 'none', // Disable interactions if not active
        opacity: active ? 1 : 0.5, // Make the card appear dimmed if not active
      }}>
        <Card.Img variant="top" src={`${serverUrl}/uploads/${program?.image}`} width={"100%"} height={"200px"} />
        <Card.Body>
          <Card.Title>{program?.title}</Card.Title>
          <div className="mb-3">
            Date: {program?.date}
          </div>
          <div className="mb-3">
            Time: {program?.time}
          </div>
          <div className="mb-3">
            location: {program?.location}
          </div>
          <div className="mb-3">
            {program?.description}
          </div>
          <Button variant="success" onClick={handleShow}>Register</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='w-100'>
            <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
              <label htmlFor='volunteerprofile'>
                <input type="file" id='volunteerprofile' style={{ display: "none" }} key={key} onChange={(e) => handleFile(e)} />
                {existingImage == "" ?
                  <img src={preview ? preview : "https://cdn-icons-png.freepik.com/256/6631/6631821.png?semt=ais_hybrid"} alt="no image" width={"100%"} style={{ cursor: "pointer" }} /> :
                  <img src={preview ? preview : `${serverUrl}/uploads/${existingImage}`} alt="no image" width={"100%"} style={{ cursor: "pointer" }} />
                }
              </label>
            </Col>
            <Col xs={12} md={6} lg={6} >
              <form >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold" >Your Name:</label>
                  <input type="text" className="form-control" id="name" required value={volunteerDetails.name} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="phonenumber" className="form-label  fw-bold" >Your Phone Number:</label>
                  <input type="text" className="form-control" id="phonenumber" required value={volunteerDetails.phoneNo} onChange={(e) => setVolunteerDetails({ ...volunteerDetails, phoneNo: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label  fw-bold" >Your Address:</label>
                  <textarea id="additional-notes" name="address" placeholder="type here" className='form-control' value={volunteerDetails.address} onChange={(e) => setVolunteerDetails({ ...volunteerDetails, address: e.target.value })}></textarea>
                </div>
              </form>
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type='button' onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleRegister} >
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default VolunteerCrad