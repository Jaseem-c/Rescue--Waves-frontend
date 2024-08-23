import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import medicalimg from '../assets/medical.jpg'
function VolunteerCrad() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '100%' }} className='shadow'>
      <Card.Img variant="top" src={medicalimg} width={"100%"} height={"200px"} />
      <Card.Body>
        <Card.Title>Medical Aid Support Campaign</Card.Title>
        <div className="mb-3">
        Date: September 10, 2024
        </div>
        <div className="mb-3">
        Time: 10:00 AM - 4:00 PM
        </div>
        <div className="mb-3">
        Description: Join us in providing essential medical aid to flood victims. Volunteers will assist with first aid, distribute medicines, and provide support to those in need.
        </div>
        <Button variant="success" onClick={handleShow}>Register</Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Medical Aid Support Campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className='w-100'>
                <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
                <label htmlFor='projectimg'>
                <input type="file" id='projectimg' style={{ display: "none" }} />
                <img src="https://cdn-icons-png.freepik.com/256/6631/6631821.png?semt=ais_hybrid" alt="no image" width={"100%"} style={{ cursor: "pointer" }} />
              </label>
                </Col>
                <Col xs={12} md={6} lg={6} >
                <form >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Your Name:</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label  fw-bold">Your Phone Number:</label>
                <input type="text" className="form-control" id="phonenumber" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="address" className="form-label  fw-bold">Your Address:</label>
                <textarea id="additional-notes" name="address" placeholder="type here" className='form-control'></textarea>
                </div>
            </form>
                </Col>
            </Row>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VolunteerCrad