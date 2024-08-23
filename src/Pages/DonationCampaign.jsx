import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import CampaignCard from '../Components/CampaignCard'
import Footer from '../Components/Footer'

function DonationCampaign() {
  return (
    <div>
       <Header/>
      <div className="shelters p-3 p-md-5 ">
        <h1 className='text-center'>Current Active Campaign</h1>
        <Row className='w-100 mt-3 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <CampaignCard/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <CampaignCard/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <CampaignCard/>
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  )
}

export default DonationCampaign