import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import shelterimg from '../assets/shelter1.jpg'
import { serverUrl } from '../Services/serverUrl';
import { bookSheltersApi } from '../Services/allApi';
import { updateAvailabilityContext } from '../../Context/ContextShare';
import Swal from 'sweetalert2';

function ShelterCard({shelter}) {

  // to fetch current booking date
  const[today,setToday]=useState(new Date().toLocaleDateString('en-CA'))

  // to call checkavilability automaticaly when added or book
  const[check,setCheck]=useState(false)

  // to update automaticaly
  const {setUpdateAvailabilityResponse}=useContext(updateAvailabilityContext)

  // const getToday=()=>{
  // const todayDate=
  // setToday(todayDate)
  // }

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);
      handleCancel()}
    const handleShow = () => {setShow(true);}

    // campare dates to active or deactive programs
  const [available, setAvailable] = useState(true)

    const checkAvailability=()=>{
      if(shelter?.availability==0)
      {
        setAvailable(false)
      }
    }
   
    console.log(today);
    

    // to add shelter
    const [bookshelterDetails,setbookshelterDetails]=useState({
      shelterName:shelter?.name,
      name:"",
      email:"",
      phone:"",
      location:shelter?.location,
      noOfPeople:"",
      BookingDate:today,
      BookingStatus:"Confirmed"
      
    })

    console.log(bookshelterDetails);
    
    const handleCancel=()=>{
      setbookshelterDetails({
      shelterName:shelter?.name,
      phone:"",
      location:shelter?.location,
      noOfPeople:"",
      BookingDate:today,
      BookingStatus:"Confirmed"
      })
    }

    // to add details
    const handleAdd=async()=>{

      const {shelterName,name,email,phone,location,noOfPeople,BookingDate,BookingStatus}=bookshelterDetails
      // console.log(bookshelterDetails);
      

      if(!shelterName || !name || !email || !phone || !location || !noOfPeople || !BookingDate || !BookingStatus)
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
        const reqBody={
          shelterName,
          name,
          email,
          phone,
          location,
          noOfPeople,
          BookingDate,
          BookingStatus,
        }

        console.log(reqBody);
        
        const token=sessionStorage.getItem("token")
        const reqHeader = {
          'Content-Type': 'application/json',
          // to verify token
          "Authorization": `Bearer ${token}`
        }

        const result=await bookSheltersApi(reqBody,reqHeader)
        if(result.status==200){
          setUpdateAvailabilityResponse(result.data)
          setCheck(true)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking Successfull",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("Booking Successful")
          handleClose()
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: result.response.data.message,
            showConfirmButton: false,
            timer: 2000
          });
          // alert(result.response.data.message)
          handleClose()
          
          
        }
      }

    }

    useEffect(()=>{
      checkAvailability()
      setCheck(false)
    },[check])

    useEffect(()=>{
      if(sessionStorage.getItem("existingUser"))
      {
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setbookshelterDetails({...bookshelterDetails,name:user.username,email:user.email,phone:user.contact})
      }
    },[show])

  return (
    <>
   
    <Card style={{ width: '80%', borderRadius: '10px', overflow: 'hidden',pointerEvents: available ? 'auto' : 'none',opacity: available ? 1 : 0.5 }} className='shadow-lg'>
  <Card.Img variant="top" src={`${serverUrl}/uploads/${shelter?.photo}`} style={{ objectFit: 'cover', height: '200px' }} />
  <Card.Body>
    <Card.Title className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      {shelter?.name}
    </Card.Title>
    <Card.Text>
      <div className="mb-3">
        <strong>Location:</strong> {shelter?.location}
      </div>
    
      <div className="mb-3">
        <strong>Facilities:</strong> {shelter?.facilities}
      </div>

      <div className="mb-3">
        <strong>Availability:</strong> {shelter?.availability}/{shelter?.capacity}
      </div>
    </Card.Text>
    <Button variant="success" onClick={handleShow} className="w-100 py-2" style={{ borderRadius: '5px' }}>
      Book Now
    </Button>
  </Card.Body>
</Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{shelter?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Your Name:</label>
                    <input type="text" className="form-control" id="name" required  value={bookshelterDetails.name} readOnly/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label  fw-bold">Your Email:</label>
                <input type="text" className="form-control" id="email" required value={bookshelterDetails.email} readOnly/>
                </div>
                <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label  fw-bold">Your Phone Number:</label>
                <input type="text" className="form-control" id="phonenumber" required value={bookshelterDetails.phone} onChange={(e)=>setbookshelterDetails({...bookshelterDetails,phone:e.target.value})}/>
                </div>
                <div className="mb-3">
                <label htmlFor="peoples" className="form-label  fw-bold">Number Of Peoples:</label>
                <input type="number" className="form-control" id="peoples" required value={bookshelterDetails.noOfPeople} onChange={(e)=>setbookshelterDetails({...bookshelterDetails,noOfPeople:e.target.value})}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ShelterCard