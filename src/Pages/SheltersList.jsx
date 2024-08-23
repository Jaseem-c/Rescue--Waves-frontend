import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ShelterCard from '../Components/ShelterCard'

function SheltersList() {
  return (
    <>
    <Header/>
      <div className="shelters p-3 p-md-5 ">
        <h1 className='text-center'>All Shelters</h1>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex align-items-center">
            <input type="text" className='form-control rounded-5' placeholder='Search' /><FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: "-25px", color: "lightgray" }} />
          </div>
          <div className="col-md-4"></div>
        </div>
        <Row className='w-100 mt-5 d-flex align-items-center justify-content-center'>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
          <ShelterCard/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
          <ShelterCard/>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0 d-flex align-items-center justify-content-center' >
          <ShelterCard/>
          </Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}

export default SheltersList