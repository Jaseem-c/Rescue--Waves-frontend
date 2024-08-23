import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import shelterimg from '../assets/shelter1.jpg'
function ShelterCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '80%' }}>
      <Card.Img variant="top" src={shelterimg} width={"100%"} height={"200px"}/>
      <Card.Body>
        <Card.Title>Mes College , Edapally</Card.Title>
        <Card.Text>
          <div className="mb-3">
            Location : Edapally
          </div>
          <div className="mb-3">
            Contact : 1234567890
          </div>
          <div className="mb-3">
          Facilities : Food,Medicine ,Room
          </div>
          <div className="mb-3">
            Availability : 80/100
          </div>
        </Card.Text>
        <Button variant="success" onClick={handleShow}>Book Now</Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mes College</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Your Name:</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label  fw-bold">Your Email:</label>
                <input type="text" className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label  fw-bold">Your Phone Number:</label>
                <input type="text" className="form-control" id="phonenumber" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="peoples" className="form-label  fw-bold">Number Of Peoples:</label>
                <input type="number" className="form-control" id="peoples" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="additional-notes" className="form-label  fw-bold">Special Requirements:</label>
                <textarea id="additional-notes" name="additional-notes" placeholder="Any special Requirements..." className='form-control'></textarea>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ShelterCard