import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Profile() {
  return (
    <>
      <Header />
      <div className='profile p-3 p-md-5 d-flex justify-content-center align-items-center flex-column'>
        <h1 className=''>Edit Profile</h1>1
        <Row className='w-100 '>
          <Col xs={12} md={4} lg={4}></Col>
          <Col xs={12} md={4} lg={4} className=' '>
            <div className='d-flex justify-content-center align-items-center flex-column p-2 p-md-5 shadow border'>
              <label htmlFor='profileimg'>
                <input type="file" id='profileimg' style={{ display: "none" }} />
                <div className='d-flex align-items-center justify-content-center'><img src="https://cdn-icons-png.flaticon.com/512/9385/9385270.png " alt="no image" width={"50%"} height={"50%"} style={{ borderRadius: "50%", cursor: "pointer" }} /></div>
              </label>
              <div className="mb-3 mt-3 w-100">
                <input type="text" placeholder='Name' className='form-control' />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='Email' className='form-control' />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='Place' className='form-control' />
              </div>
              <div className="mb-3 w-100">
                <input type="text" placeholder='Contact' className='form-control' />
              </div>
              <div className="mb-3 w-100 mt-2">
              <button className='btn btn-success w-100 rounded'>Update</button>
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