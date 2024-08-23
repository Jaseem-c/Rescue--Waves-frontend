import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Authorization({register}) {
  return (
    <>
    <div className="authorization d-md-flex align-items-center justify-content-center" style={{ width: "100%", height: "100vh" }} >
      <div className="container p-5 p-md-5 ">
        <Link to={'/'}><button className='btn rounded-5 px-5 py-2 text-light' style={{backgroundColor:"var(--button-color)"}}>Back</button></Link>
        <Row className='w-100 border mt-3 mt-md-5 shadow'>
        <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center' style={{backgroundColor:"var(--button-color)"}}>
        <img src={logo} alt="" width={"80%"} />
        </Col>
        <Col xs={12} md={6} lg={6} className='p-3 p-md-5 d-flex align-items-center justify-content-center'>
        <form className='mt-3 mt-md-0 w-100 '>
                <h2 className='text-dark text-center fw-bold'>Rescue Waves</h2>
            {register? <h6 className='text-dark text-center'>Sign up to your Account</h6> :
                  <h6 className='text-dark text-center'>Sign in to your Account</h6>}
                    {register && <div className="mb-3 mt-3 mt-md-4">
                <input type="text" className='form-control' placeholder='Username'/>
                </div>}
                <div className="mb-3 mt-3 mt-md-4">
                  <input type="text" placeholder='Email Id ' className='form-control'   />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Password' className='form-control'  />
                </div>
                <div className="mb-3">
                  {register? <div>
                    <button type='button' className='btn  w-100 text-light' style={{backgroundColor:"var(--button-color)"}} >Register</button>
                    <p className='mt-3'>Already a user? Click Here to <Link to={'/login'} style={{ color: 'var(--button-color)', textDecoration: "none" }}>login</Link></p>
                  </div> :
                    <div>
                      <button type='button' className='btn text-light w-100' style={{backgroundColor:"var(--button-color)"}}>Login</button>
                      <p className='mt-3'>New User? Click Here to <Link to={'/register'} style={{ color: 'var(--button-color)', textDecoration: "none" }}>Register</Link></p>
                    </div>}
                </div>

              </form>
        </Col>
        </Row>
      </div>
    </div>
    </>
  )
}

export default Authorization