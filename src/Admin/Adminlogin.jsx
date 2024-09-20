import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import 'react-toastify/dist/ReactToastify.css';
import { adminLoginApi } from '../Services/allApi'
import Swal from 'sweetalert2';

function Adminlogin() {
    // to navigate
    const navigate=useNavigate("")
    // to store admin values
    const [adminDetails, setAdminDetails] = useState({
        email: "",
        password: ""
    })

    // console.log(adminDetails);

    const handleLogin = async(e) => {
        e.preventDefault();
        const { email, password } = adminDetails
        const reqbody={
            email:email,
            password:password
        }

        const result= await adminLoginApi(reqbody)

        if(result.status==200){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Admin logged in successfully",
                showConfirmButton: false,
                timer: 2000
              });
              setAdminDetails({
                email: "",
                password: ""
              })
            navigate('/admindashboard')
        }

        else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Admin login failed",
                showConfirmButton: false,
                timer: 2000
              });
              setAdminDetails({
                email: "",
                password: ""
              })
        }
        
    }

    return (
        <>
            <div className="authorization d-md-flex align-items-center justify-content-center" style={{ width: "100%", height: "100vh" }} >
                <div className="container p-5 p-md-5 ">
                    <Link to={'/'}><button className='btn rounded-5 px-5 py-2 text-light' style={{ backgroundColor: "var(--button-color)" }}>Back</button></Link>
                    <Row className='w-100 border mt-3 mt-md-5 shadow'>
                        <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center' style={{ backgroundColor: "var(--button-color)" }}>
                            <img src={logo} alt="" width={"80%"} />
                        </Col>
                        <Col xs={12} md={6} lg={6} className='p-3 p-md-5 d-flex align-items-center justify-content-center'>
                            <form className='mt-3 mt-md-0 w-100 '>
                                <h2 className='text-dark text-center fw-bold'>Rescue Waves</h2>
                                <h6 className='text-dark text-center'>Login as an admin</h6>
                                <div className="mb-3 mt-3 mt-md-4">
                                    <input type="text" placeholder='Email Id ' className='form-control' value={adminDetails.email} onChange={(e) => setAdminDetails({ ...adminDetails, email: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Password' className='form-control' value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <div>
                                        <button type='button' className='btn text-light w-100' style={{ backgroundColor: "var(--button-color)" }} onClick={handleLogin}>Login</button>

                                    </div>
                                </div>

                            </form>
                        </Col>
                    </Row>
                </div>
            </div>
           
        </>
    )
}

export default Adminlogin