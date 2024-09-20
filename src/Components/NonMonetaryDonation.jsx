import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { addNonMonetaryDonationApi } from '../Services/allApi';


function NonMonetaryDonation() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setNonmonetaryDonationDetails({ ...nonmonetaryDonationDetails, donationType: event.target.value })
  };
  console.log(selectedOption);

  // to store nonmonetary donation details
  const [nonmonetaryDonationDetails, setNonmonetaryDonationDetails] = useState({
    name: "",
    email: "",
    donationType: "",
    PickupAddress: "",
    donationDate: new Date().toLocaleDateString('en-CA'),
    noOfItems: "",
    status: "In Progress"
  })
  console.log(nonmonetaryDonationDetails);


  const handleCancel = () => {
    setNonmonetaryDonationDetails({
      donationType: "",
      PickupAddress: "",
      donationDate: new Date().toLocaleDateString('en-CA'),
      noOfItems: "",
      status: "In Progress"
    })
    setSelectedOption("")
  }

  const handleAdd = async () => {
    const { name, email, donationType, PickupAddress, donationDate, noOfItems, status } = nonmonetaryDonationDetails
    if (!name || !email || !donationDate || !donationType || !PickupAddress || !noOfItems || !status) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please fill form completely",
        showConfirmButton: false,
        timer: 2000
      });
    }
    else {
      const reqBody = {
        name,
        email,
        donationDate,
        donationType,
        PickupAddress,
        noOfItems,
        status
      }
      
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }

        const result=await addNonMonetaryDonationApi(reqBody,reqHeader)
        if(result.status==200)
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your donation has been successfully submitted and is now Awaiting Pickup",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("success")
          handleClose()
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Donation Failed",
            showConfirmButton: false,
            timer: 2000
          });
          handleClose()
          // alert("error")
        }
      }
    }
  

    useEffect(()=>{
      if(sessionStorage.getItem("existingUser"))
      {
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setNonmonetaryDonationDetails({...nonmonetaryDonationDetails,name:user.username,email:user.email})
      }
    },[show])


  return (
    <>
      <button className="btn  text-light  px-3 px-md-5 mt-4 rounded-5 ms-md-4" style={{ backgroundColor: "var(--button-color)" }} onClick={handleShow}>Non Monetary Donations</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Non Monetary Donations </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Your Name:</label>
              <input type="text" className="form-control" id="name" required value={nonmonetaryDonationDetails.name}
               readOnly/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label  fw-bold">Your Email:</label>
              <input type="text" className="form-control" id="email" required value={nonmonetaryDonationDetails.email}
               readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="donation-type" className="form-label  fw-bold" >Donation Type:</label>
              <select
                id="options"
                value={selectedOption}
                onChange={handleSelectChange}
                className='form-control'
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
              >
                <option value="" disabled>Select an option</option>
                <option value="Food">Food</option>
                <option value="Cloth">Cloth</option>
                <option value="Medical Supplies">Medical Supplies</option>

              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="noofitems" className="form-label  fw-bold">No of Items:</label>
              <input type="number" className="form-control" id="noofitems" required value={nonmonetaryDonationDetails.noOfItems}
                onChange={(e) => setNonmonetaryDonationDetails({ ...nonmonetaryDonationDetails, noOfItems: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="pickup-address" className="form-label  fw-bold">Pickup/Drop-off Address</label>
              <input type="text" id="pickup-address" name="pickup-address" className='form-control' value={nonmonetaryDonationDetails.PickupAddress}
                onChange={(e) => setNonmonetaryDonationDetails({ ...nonmonetaryDonationDetails, PickupAddress: e.target.value })} />
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
          <Button variant="success" onClick={handleAdd}>
            Submit Donation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NonMonetaryDonation