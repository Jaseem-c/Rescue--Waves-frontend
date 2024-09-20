import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../Services/allApi'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'



function Authorization({ register }) {
 
  // to navigate
  const navigate = useNavigate("")
  // to store userdetails
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: "",
    password: ""
  })

// resgistration
  const handleRegister = async (e) => {
    e.preventDefault()
    const result = await registerApi(userDetails)
    console.log(result);
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "please fill form completely",
        showConfirmButton: false,
        timer: 1500
      });
    //  toast.info("please fill form completely")
    }
    else {

      if (result.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      //  toast.success("Registration Successfull")
        setUserDetails({
          username: '',
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "User Already Exist",
          showConfirmButton: false,
          timer: 1500
        });
      //  toast.error("User Already Exist")
        setUserDetails({
          username: '',
          email: "",
          password: ""
        })
      }
    }


  }
  // console.log(userDetails);
  // login
  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userDetails
    if(!email || !password)
    {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "please fill form completely",
        showConfirmButton: false,
        timer: 1500
      });
      // toast.info("please fill form completely")
    }
    else{
      const result=await loginApi({email,password})
      console.log(result);
      if(result.status==200){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        // toast.success("Login Successfull")
        setUserDetails({
          username: '',
          email: "",
          password: ""
        })
        
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        navigate('/home')
    
      }
      else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500
        });
        // toast.error("Invalid Email or Password")
          setUserDetails({
          username: '',
          email: "",
          password: ""
        })
      }
      
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
                {register ? <h6 className='text-dark text-center'>Sign up to your Account</h6> :
                  <h6 className='text-dark text-center'>Sign in to your Account</h6>}
                {register && <div className="mb-3 mt-3 mt-md-4">
                  <input type="text" className='form-control' placeholder='Username' value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                </div>}
                <div className="mb-3 mt-3 mt-md-4">
                  <input type="text" placeholder='Email Id ' className='form-control' value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Password' className='form-control' value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                </div>
                <div className="mb-3">
                  {register ? <div>
                    <button type='button' className='btn  w-100 text-light' style={{ backgroundColor: "var(--button-color)" }} onClick={handleRegister}>Register</button>
                    <p className='mt-3'>Already a user? Click Here to <Link to={'/login'} style={{ color: 'var(--button-color)', textDecoration: "none" }}>login</Link></p>
                  </div> :
                    <div>
                      <button type='button' className='btn text-light w-100' style={{ backgroundColor: "var(--button-color)" }} onClick={handleLogin}>Login</button>
                      <p className='mt-3'>New User? Click Here to <Link to={'/register'} style={{ color: 'var(--button-color)', textDecoration: "none" }}>Register</Link></p>
                    </div>}
                </div>

              </form>
            </Col>
          </Row>
        </div>
      </div>
      {/* <ToastContainer autoClose={3000} theme="colored" position='top-right'  /> */}
    </>
  )
}

export default Authorization