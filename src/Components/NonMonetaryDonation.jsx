import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function NonMonetaryDonation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className="btn  text-light  px-3 px-md-5 mt-4 rounded-5 ms-md-4" style={{backgroundColor:"var(--button-color)"}} onClick={handleShow}>Non Monetary Donations</button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Non Monetary Donations </Modal.Title>
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
                <label htmlFor="donation-type" className="form-label  fw-bold" >Donation Type:</label>
                <select id="donation-type" name="donation-type"  className='form-control'>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="medical-supplies">Medical Supplies</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="pickup-address" className="form-label  fw-bold">Pickup/Drop-off Address</label>
                <input type="text" id="pickup-address" name="pickup-address"  className='form-control'/>
                </div>
                <div className="mb-3">
                <label htmlFor="additional-notes" className="form-label  fw-bold">Additional Notes:</label>
                <textarea id="additional-notes" name="additional-notes" placeholder="Any special instructions..." className='form-control'></textarea>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
           Submit Donation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NonMonetaryDonation