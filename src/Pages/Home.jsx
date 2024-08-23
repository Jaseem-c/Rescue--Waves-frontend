import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Col, Row } from 'react-bootstrap'
import MoneyDonation from '../Components/MoneyDonation'
import NonMonetaryDonation from '../Components/NonMonetaryDonation'
import shelterIcon from '../assets/ShelterIcon.png'
import { Link } from 'react-router-dom'
import EmergencyAlert from '../Components/EmergencyAlert'
import VolunteerCrad from '../Components/VolunteerCrad'
import CampaignCard from '../Components/CampaignCard'
import emergencyimg from '../assets/Emergency-Call-color-800px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Chatbox from '../Components/Chatbox'
function Home() {
  return (
    <>
      <Header  />
      <div className='home p-3 p-md-5' style={{ backgroundColor: "white" }}>
        <div className='hero mb-5' >
          <h1 className='fw-bold text-dark'>Welcome To <span style={{ color: "var(--button-color)" }}>Rescue Waves.</span></h1>
          <Row className='mt-5'>
            <Col xs={12} md={6} lg={7}>
              <div className='donation  rounded-3 p-3 p-md-5 bg-light shadow'>
                <h1 className='text-center text-dark'>Donate Now</h1>
                <p className='text-center mt-3'>Your contribution can make a real difference in the lives of those affected by floods.Please select a donation type and fill out the necessary details</p>
                <div className="d-md-flex align-items-center justify-content-center">
                  <MoneyDonation />
                  <NonMonetaryDonation />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={1}></Col>
            <Col xs={12} md={6} lg={4}>
              <div className='Shelters rounded-3 p-3 p-md-5 bg-light mt-3 mt-md-0 d-flex shadow align-items-center justify-content-center flex-column'>
                <img src={shelterIcon} alt="" width={"20%"} />
                <p className='mt-3 text-center'>Find And View available shelters and relief centers near you to get the help you need</p>
                <Link to={'/shelterslist'}><button className='btn text-light px-5 py-2 rounded-5' style={{ backgroundColor: "var(--button-color)" }}>View Shelters</button></Link>
              </div>
            </Col>
          </Row>
        </div>
        {/* Emergency alert */}
        <div className='my-5'>  <EmergencyAlert /></div>
        {/* volunteer oppurtunites */}
        <div className="my-5">
          <h1 className=' my-5  text-dark'>Volunteer Opportunities</h1>
          <Row className='w-100 mt-5 d-flex align-items-center justify-content-center'>
            <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <VolunteerCrad />
            </Col>
            <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <VolunteerCrad />
            </Col>
            <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <VolunteerCrad />
            </Col>
          </Row>
          <div className="my-5">
            <Link to={'/volunteerlist'} style={{ color: "var(--button-color)" }}> <p className='text-center fs-4' style={{ textDecoration: "none" }}>See More</p></Link>
          </div>
        </div>
        {/* campaign */}
        <div className="campaign mt-5" id='campaign'>
          <h1 className='text-dark my-5'>Active Campaigns</h1>
          <Row className='w-100 mt-5 d-flex align-items-center justify-content-center'>
            <Col xs={12} md={6} lg={6} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <CampaignCard />
            </Col>
            <Col xs={12} md={6} lg={6} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <CampaignCard />
            </Col>
          </Row>
          <div className="my-5">
            <Link to={'/donationcampaigns'} style={{ color: "var(--button-color)" }}> <p className='text-center fs-4' style={{ textDecoration: "none" }}>See More</p></Link>
          </div>
        </div>
        {/* emergency contacts */}
        <div className="campaign mt-5" id='emergency'>
          <h1 className='text-dark my-5'>Emergency Contacts</h1>
          <Row className='w-100 mt-5 d-flex align-items-center justify-content-center shadow'>
            <Col xs={12} md={6} lg={6} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
              <img src={emergencyimg} alt="" width={"100%"} height={"400px"} />
            </Col>
            <Col xs={12} md={6} lg={6} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center flex-column' >
              <div>
                <div className='d-flex align-items-center justify-content-between '>
                  <h5 className='text-dark'>
                    National Disaster Response Force (NDRF)
                  </h5>
                  <h5 className='ms-5'>
                    <a href="tel:+917034295539">
                      <button className='btn rounded-5 text-light' style={{ backgroundColor: "var(--button-color)" }}>
                        <FontAwesomeIcon icon={faPhone} />
                      </button>
                    </a>
                  </h5>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <h5 className='text-dark'>
                    Local Police Station
                  </h5>
                  <h5 className='ms-5'>
                    <a href="tel:+917034295539">
                      <button className='btn rounded-5 text-light' style={{ backgroundColor: "var(--button-color)" }}>
                        <FontAwesomeIcon icon={faPhone} />
                      </button>
                    </a>
                  </h5>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <h5 className='text-dark'>
                    Fire & Rescue Services
                  </h5>
                  <h5 className='ms-5'>
                    <a href="tel:+917034295539">
                      <button className='btn rounded-5 text-light' style={{ backgroundColor: "var(--button-color)" }}>
                        <FontAwesomeIcon icon={faPhone} />
                      </button>
                    </a>
                  </h5>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <h5 className='text-dark'>
                    Ambulance Services
                  </h5>
                  <h5 className='ms-5'>
                    <a href="tel:+917034295539">
                      <button className='btn rounded-5 text-light' style={{ backgroundColor: "var(--button-color)" }}>
                        <FontAwesomeIcon icon={faPhone} />
                      </button>
                    </a>
                  </h5>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <h5 className='text-dark'>
                    Emergency Shelter Helpline
                  </h5>
                  <h5 >
                    <a href="tel:+917034295539">
                      <button className='btn rounded-5 text-light' style={{ backgroundColor: "var(--button-color)" }}>
                        <FontAwesomeIcon icon={faPhone} />
                      </button>
                    </a>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{position:"fixed",right:"40px",bottom:"60px"}}>
          <Chatbox/>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Home