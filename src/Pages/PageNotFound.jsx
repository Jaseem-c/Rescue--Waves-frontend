import React from 'react'
import { Col, Row } from 'react-bootstrap'
import pagenotfoundimg from '../assets/page-not-found-404.gif'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
   <>
   <div className="pagenotfound p-3 p-md-5">
    <Row className='w-100'>
    <Col xs={12} md={6} lg={3}></Col>
    <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center'>
    <img src={pagenotfoundimg} alt="" width={"90%"} />
    </Col>
    <Col xs={12} md={6} lg={3}></Col>
    </Row>
    <Row className='w-100'>
    <Col xs={12} md={6} lg={3}></Col>
    <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center flex-column'>
    <h1 className='text-center'>Page Not Found</h1>
   <Link to={'/home'}> <button className='btn rounded-5 px-5 text-light py-2 mt-3'style={{backgroundColor:"var(--button-color)"}}>Back To Home</button></Link>
    </Col>
    <Col xs={12} md={6} lg={3}></Col>
    </Row>
   </div>
   </>
  )
}

export default PageNotFound