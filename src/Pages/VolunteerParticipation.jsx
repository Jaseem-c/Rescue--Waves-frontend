import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import  '../Pages/VolunteerParticipation.css'
import { getUserParticipationsApi } from '../Services/allApi'
function VolunteerParticipation() {
  // to store userparticipation details
  const [userParticipation,setUserParticipation]=useState([])

  // to get userparticipation details
  const getUserParticipation = async () => {

   const token= sessionStorage.getItem("token")
    const reqHeader ={
      'Content-Type': 'multipart/form-data',
      // to verify token
        "Authorization": `Bearer ${token}`
    }

    const result=await getUserParticipationsApi(reqHeader)
    setUserParticipation(result.data)
  }
  console.log(userParticipation);
  

  useEffect(()=>{
    getUserParticipation()
  },[])
  return (
    <>
    <Header/>
    <div className='p-2 p-md-5'>
    <div className="participation-container">
            <h2 className="text-center mb-5">My Volunteer Participation History</h2>
            
           {userParticipation.length>0?userParticipation.map((item)=>(
            <div className="participation-card">
            <h3>{item?.program}</h3>
            <p><strong>Date:</strong> {item?.date}</p>
            <p><strong>Location:</strong> {item?.location}</p>
            <p><strong>Status: </strong> 
            {item?.status==='pending'?<strong className='text-danger' >Pending</strong>:<strong className='text-success'>Completed</strong>}
            </p>
        </div>
           )) :<p className='text-danger'>No participations</p>}
            
            
            {/* Add more cards here if needed */}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default VolunteerParticipation
