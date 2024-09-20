import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import CampaignCard from '../Components/CampaignCard'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { getAllCampaign } from '../Services/allApi'
import { addResponseContext } from '../../Context/ContextShare'


function DonationCampaign() {


  // to store campaigndetails
  const [campaignDetails, setCampaignDetails] = useState([])

  // to get campaigndetails
  const getallCampaignDetails=async()=>{
    const result=await getAllCampaign()
    setCampaignDetails(result.data)
  }

  useEffect(()=>{
    getallCampaignDetails()
  },[])

  return (
    <div>
       <Header/>
      <div className="shelters p-3 p-md-5 ">
        <h1 className='text-center'>Current Active Campaign</h1>
        <Row className='w-100 mt-3 d-flex align-items-center justify-content-center'>
          {campaignDetails.length>0?campaignDetails.map((item)=>(
            <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' key={item?._id}>
            <CampaignCard campaign={item}/>
            </Col>
          )):<p>no available campaigns</p>}
        </Row>
      </div>
      <Footer/>
    </div>
  )
}

export default DonationCampaign