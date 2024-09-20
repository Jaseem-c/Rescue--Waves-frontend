import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { json } from 'react-router-dom'
import { serverUrl } from '../Services/serverUrl'
import { updateProfileApi } from '../Services/allApi'
import Swal from 'sweetalert2'
import { updateProfileResponseContext } from '../../Context/ContextShare'

function Profile() {
  // to update avatar automaticaly
  const {setUpdateProfileStatus}=useContext(updateProfileResponseContext)

  const [profileDetails, setProfileDetails] = useState({
    username: '',
    email: "",
    password: "",
    address: '',
    contact: "",
    profile: ''
  })
  const [existingImage, setExistingImage] = useState("")
  // to view image
  const [image, setImage] = useState("")
  const [updateStatus,setUpdateStatus] = useState({})

  const handleFile = (e) => {
    e.preventDefault()
    setProfileDetails({ ...profileDetails, profile: e.target.files[0] })
  }
 
  
  useEffect(() => {
    if (profileDetails.profile) {
      try {
        setImage(URL.createObjectURL(profileDetails.profile));
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  }, [profileDetails.profile])

  console.log(profileDetails);

  // handleupdate
  const handleUpdate = async () => {
    const {username,email,password,address,contact,profile}=profileDetails
    if(!address || !contact)
    {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please fill form completely",
        showConfirmButton: false,
        timer: 2000
      });
      // alert("Please fill all the fields")
    }
    else{
      const reqBody = new FormData()
      reqBody.append('username', username)
      reqBody.append('email', email)
      reqBody.append('password', password)
      reqBody.append('address', address)
      reqBody.append('contact', contact)
      {image?reqBody.append('profile',profile):reqBody.append('profile',existingImage)}

      const token=sessionStorage.getItem("token")

      if(image)
      {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result=await updateProfileApi(reqBody,reqHeader)
        if(result.status==200)
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "profile updated successfully",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("success")
          setUpdateProfileStatus(result.data)
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          
          setUpdateStatus(result.data)
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "profile update failed",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("Failed")
        }
      }
      else{
        const reqHeader = {
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`
        }
        const result=await updateProfileApi(reqBody,reqHeader)
        if(result.status==200)
        {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "profile updated successfully",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("success")
          setUpdateProfileStatus(result.data)
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          setUpdateStatus(result.data)
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "profile update failed",
            showConfirmButton: false,
            timer: 2000
          });
          // alert("Failed")
        }
      }

  }
}


console.log(profileDetails);

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setProfileDetails({ ...profileDetails, username: user.username, email: user.email, password: user.password, address: user.address, contact: user.contact, profile: user.profile })
      setExistingImage(user.profile)
    }
  }, [updateStatus])
  return (
    <>
      <Header />
      <div className='profile p-3 p-md-5 d-flex justify-content-center align-items-center flex-column'>
        <h1 className=''>Profile</h1>
        <Row className='w-100 mt-5 '>
          <Col xs={12} md={4} lg={4}></Col>
          <Col xs={12} md={4} lg={4} className=' '>
            <div className='d-flex justify-content-center align-items-center flex-column p-2 p-md-5 shadow border'>
              <label htmlFor='profileimg'>
                <input type="file" id='profileimg' style={{ display: "none" }} onChange={(e) => handleFile(e)} />
                <div className='d-flex align-items-center justify-content-center'>
                  {existingImage == ""?
                  <img src={image?image:"https://cdn-icons-png.flaticon.com/512/9385/9385270.png "} alt="no image" width={"150px"} height={"150px"} style={{ borderRadius: "50%", cursor: "pointer" }} />:
                  <img src={image?image:`${serverUrl}/uploads/${existingImage}`} alt="no image" width={"150px"} height={"150px"} style={{ borderRadius: "50%", cursor: "pointer" }} /> }
                </div>
              </label>
              <div className="mb-3 mt-3 w-100">
                <input type="text" placeholder='Name' className='form-control' value={profileDetails.username} readOnly />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='Email' className='form-control' value={profileDetails.email} readOnly />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='address' className='form-control' value={profileDetails.address} onChange={(e) => setProfileDetails({ ...profileDetails, address: e.target.value })} />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='Contact' className='form-control' value={profileDetails.contact} onChange={(e) => setProfileDetails({ ...profileDetails, contact: e.target.value })} />
              </div>
              <div className="mb-3 w-100 mt-2">
                <button className='btn btn-success w-100 rounded'  onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}></Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Profile