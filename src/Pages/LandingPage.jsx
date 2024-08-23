import React from 'react'
import '../Pages/LandingPage.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import about from '../assets/About.jpeg'
import donation from '../assets/donation.jpg'
import shelter from '../assets/shleter.jpg'
import resources from '../assets/resources.jpg'
import liveSupport from '../assets/chat.jpg'
import campaign from '../assets/donation campaign.jpg'
import volunteer from '../assets/volunteer.jpg'
import contact from '../assets/Contact.png'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>
      {/* hero */}
      <div className='bg' style={{ position: 'relative' }}>
        <Row className='w-100' >
          <div className='container px-5'>
            <nav className="navbar">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Bootstrap" width="130" height="130" />
              </a>
            </nav>
          </div>
        </Row>
        <Row className='w-100 mt-5'>
          <div className='d-flex align-items-center justify-content-center mt-3 pt-5 flex-column'>
            <h1 className='herotitle text-center fw-bold'>Rescue Waves</h1>
            <h1 className='heropara text-center'>A Flood Relief Service Platform</h1>
            <Link to={'/login'}><button className='btn mt-4 text-light rounded-5 px-5 py-3' style={{ backgroundColor: "var(--button-color)" }}>Get Help</button></Link>
          </div>
        </Row>
      </div>
      {/* about */}
      <div className='about p-3 p-md-5 '>
        <Row className='mt-5 mb-5'>
          <Col xs={12} md={6} lg={6} className="mb-4" >
            <img src={about} alt="" width={"100%"} className='rounded-3' />
          </Col>
          <Col xs={12} md={6} lg={6} className="mb-4 d-flex align-items-center justify-content-center flex-column p-md-5">
            <h1 className='text-light text-center'>Our Mission</h1>
            <p className='mt-3 text-light' style={{ textAlign: "justify" }}>The mission of "Rescue Waves: A Flood Relief Platform" is to provide timely and effective support to communities affected by floods. By offering a comprehensive platform for disaster management, we aim to connect those in need with available resources, shelters, and volunteers. Our goal is to facilitate donations, streamline shelter bookings, and coordinate emergency responses to alleviate the impact of natural disasters and assist affected individuals with compassion and efficiency.
            </p>
          </Col>
        </Row>
        <Row className=' p-2 mb-3' >
          <Col xs={12} md={6} lg={12} className=" p-4 p-md-5  rounded-3" style={{ backgroundColor: "var(--button-color)" }} >
            <div className='d-md-flex align-items-center justify-content-center'>
              <h5 className='text-light'>
                Focus on immediate relief, coordinate resources, communicate clearly, and monitor progress.</h5>
              <Link to={'/login'} className='ms-auto'><button className='btn text-dark rounded-5 mt-3  mt-md-0 px-5  ' style={{ backgroundColor: "white" }}>Get Help</button></Link>
            </div>
          </Col>
        </Row>
      </div>
      {/* services */}
      <div className='services p-3 p-md-5 '>
        <h1 className='text-center text-light mt-3 mb-5'>Our Services</h1>
        <Row className=' mt-3 mt-md-5'>
          <Col xs={12} md={4} lg={3} className="my-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '90%' }} className='rounded p-2'>
              <Card.Img variant="top" src={donation} width={"100%"} height={"300px"} />
              <Card.Body>
                <Card.Title className='text-center'>Donation</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="my-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '90%' }} className='rounded p-2'>
              <Card.Img variant="top" src={shelter} width={"100%"} height={"300px"} />
              <Card.Body>
                <Card.Title className='text-center'>Shelters</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="my-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '90%' }} className='rounded p-2'>
              <Card.Img variant="top" src={resources} width={"100%"} height={"300px"} />
              <Card.Body>
                <Card.Title className='text-center'>Resources</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="my-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '90%' }} className='rounded p-2'>
              <Card.Img variant="top" src={liveSupport} width={"100%"} height={"300px"} />
              <Card.Body>
                <Card.Title className='text-center'>Live Support</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* donation */}
      <div className="donation p-3 p-md-5  ">
        <h1 className='fw-bold' style={{ color: "var(--button-color)" }}>Consider participating in our donation campaign to contribute effectively to flood relief efforts.</h1>
        <img src={campaign} alt="" width={"100%"} className='mt-5 mb-5' />
      </div>
      {/* volunteer */}
      <div className='volunteer p-3 p-md-5 '>
        <Row className='mb-5'>
          <Col xs={12} md={6} lg={6} className="my-4">
            <img src={volunteer} alt="" width={"100%"} height={"400px"} />
          </Col>
          <Col xs={12} md={6} lg={6} className="my-4 d-flex align-items-center justify-content-center flex-column p-0 p-md-5" >
            <h1 className='text-light '>Get Involved</h1>
            <h4 className='mt-5 text-light text-center' style={{ lineHeight: "2" }}>Register as a volunteer to make a direct impact in   flood  relief efforts and support those in need
            </h4>
           <Link to={'/login'}> <button className='btn rounded-5 px-5 py-3 text-light mt-4'  style={{ backgroundColor: "var(--button-color)" }}>Join Us.</button></Link>
          </Col>
        </Row>
      </div>
      {/* testimonial */}
      {/* contact */}
      <div className="container-fluid p-0">
        <Row className="g-0">
          <Col xs={12} md={6} lg={6} className="p-3 p-md-5">
        <h2>Get In Touch</h2>
        <input type="text" name="" id="" placeholder='name' className='form-control bg-body-tertiary rounded mt-4' />
        <input type="text" name="" id="" placeholder='email' className='form-control bg-body-tertiary rounded mt-3' />
        <textarea name="" id="" placeholder='message' className='form-control bg-body-tertiary rounded mt-3'></textarea>
        <button className='btn rounded-5 px-5 py-2 text-light mt-3 ' style={{backgroundColor:"var(--button-color)"}}>Send Message</button>
          </Col>
          <Col xs={12} md={6} lg={6} className="p-0">
            <img src={contact} alt="" width="100%" height="400px" />
          </Col>
        </Row>
      </div>
      {/* footer */}
      <div className='footer p-3 p-md-3 d-flex align-items-center justify-content-center flex-column'>
        <img src={logo} alt="" width={100} />
        <p className='text-light mt-3'>© 2024 Rescue Waves. All rights reserved.</p>
      </div>
    </>
  )
}

export default LandingPage