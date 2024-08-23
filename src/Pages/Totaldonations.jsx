import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Col, Row } from 'react-bootstrap'
import moneydonation from '../assets/money donation.jpg'
import nonmonetary from '../assets/medical.jpg'
function Totaldonations() {
  return (
    <>
      <Header />
      <div className="container  d-flex align-items-center justify-content-center">
        <Row className='w-100 my-5 d-flex align-items-center justify-content-center'>
          
          <Col xs={12} md={6} lg={6} >
            <div className=' border shadow '>
              <div>
                <img src={moneydonation} alt="" width={"100%"} height={"300px"} />
              </div>
              <div className='p-3'>
                <p className='text-center mt-3'>Total Donation :</p>
                <h1 className='text-center text-primary mt-3 fw-bold'>₹60,000</h1>
                <div >
                  <h4 className='mt-4'>Today's Toppers</h4>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Neel</p>
                    <p className='fw-bold m-0'>₹50,000</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Neel</p>
                    <p className='fw-bold m-0'>₹50,000</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Neel</p>
                    <p className='fw-bold m-0'>₹50,000</p>
                  </div>
                  <div className='mt-3 mt-md-5 mb-5'>
                    <button className='btn px-5 py-3 text-light w-100 ' style={{backgroundColor:"var(--button-color)"}}>Participate Now</button>
                  </div>

                  <div className="d-flex"></div>
                  <div className="d-flex"></div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
          <div className=' border shadow '>
              <div>
                <img src={nonmonetary} alt="" width={"100%"} height={"300px"} />
              </div>
              <div className='p-3'>
                <p className='text-center mt-3'>Total Donation :</p>
                <h1 className='text-center text-primary mt-3 fw-bold'>10,000 Items</h1>
                <div >
                  <h4 className='mt-4'>Non Monetary Donations</h4>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Food Items</p>
                    <p className='fw-bold m-0'>300</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Clothing Items</p>
                    <p className='fw-bold m-0'>500</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Medical  Supplies</p>
                    <p className='fw-bold m-0'>200</p>
                  </div>
                  <div className='mt-3 mt-md-5 mb-5'>
                    <button className='btn px-5 py-3 text-light w-100 ' style={{backgroundColor:"var(--button-color)"}}>Participate Now</button>
                  </div>

                  <div className="d-flex"></div>
                  <div className="d-flex"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
      <Footer />
    </>
  )
}

export default Totaldonations