
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function MoneyDonation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className="btn rounded-5 text-light px-3 px-md-5 mt-4 " style={{backgroundColor:"var(--button-color)"}} onClick={handleShow}>Money Donation</button>

    {/* form for money donation */}

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Money Donation Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-md-5'>
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
                <label htmlFor="amount" className="form-label  fw-bold">Donation Amount:</label>
                <input type="number" className="form-control" id="amount" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="donation-type" className="form-label  fw-bold" >Donation Type:</label>
                <select id="donation-type" name="donation-type" disabled className='form-control'>
                    <option value="money">Money</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="medical-supplies">Medical Supplies</option>
                </select>
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
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MoneyDonation