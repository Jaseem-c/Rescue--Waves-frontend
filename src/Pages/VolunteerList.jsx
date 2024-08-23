import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import VolunteerCrad from '../Components/VolunteerCrad'
import Footer from '../Components/Footer'

function VolunteerList() {
  return (
   <>
   <Header/>
      <div className="shelters p-3 p-md-5 ">
        <h1 className='text-center'>All Volunteer Opportunities</h1>
        <Row className='w-100 mt-3 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
          <VolunteerCrad/>
          </Col>
        </Row>
      </div>
      <Footer/>
   </>
  )
}

export default VolunteerList