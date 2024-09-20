
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function MoneyDonation() {
  const navigate=useNavigate("")
 
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      handleCancel()
    }
      
    const handleShow = () => setShow(true);

    const [monetaryDonationDetails,setMonetaryDonationDetails]=useState({
      name:"",
      email:"",
      donationAmount:"",
      donationDate:new Date().toLocaleDateString('en-CA')
    })
    console.log(monetaryDonationDetails);

    const handleCancel=()=>{
      setMonetaryDonationDetails({
      
        donationAmount:"",
        donationDate:new Date().toLocaleDateString('en-CA')
      })
    }
    // to handle pay
    const handlePay = () => {
      const {name,email,donationAmount}=monetaryDonationDetails
      if(!email || !name || !donationAmount)
      {
        Swal.fire({
          position: "center",
          icon: "info",
          title:"Please fill form completely",
          showConfirmButton: false,
          timer: 2000
        });
      }
      else{
      navigate('/payment', { state: { monetaryDonationDetails } });
      }
    }
    useEffect(()=>{
      if(sessionStorage.getItem("existingUser"))
      {
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setMonetaryDonationDetails({...monetaryDonationDetails,name:user.username,email:user.email})
      }
    },[show])
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
                    <input type="text" className="form-control" id="name" required value={monetaryDonationDetails.name} readOnly/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label  fw-bold">Your Email:</label>
                <input type="text" className="form-control" id="email" required  value={monetaryDonationDetails.email} readOnly/>
                </div>
                <div className="mb-3">
                <label htmlFor="amount" className="form-label  fw-bold">Donation Amount:</label>
                <input type="number" className="form-control" id="amount" required
                 value={monetaryDonationDetails.donationAmount} onChange={(e)=>setMonetaryDonationDetails({...monetaryDonationDetails,donationAmount:e.target.value})}/>
                </div>
                <div className="mb-3">
                <label htmlFor="donation-type" className="form-label  fw-bold" >Donation Type:</label>
                <select id="donation-type" name="donation-type" disabled className='form-control'>
                    <option value="money">Money</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="additional-notes" className="form-label  fw-bold">Additional Notes:</label>
                <textarea id="additional-notes" name="additional-notes" placeholder="Any special instructions..." className='form-control'></textarea>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handlePay}>
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MoneyDonation