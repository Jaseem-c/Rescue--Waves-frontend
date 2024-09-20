import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Components/Header.css'
import logo from '../assets/logo.png'
import avatarImg from '../assets/avatar.png'
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { serverUrl } from '../Services/serverUrl'
import { updateProfileResponseContext } from '../../Context/ContextShare'


function Header() {
    const [profileImg, setProfileImg] = useState("")
   
    // to update avatar automaticaly
    const {updateProfileResponse}=useContext(updateProfileResponseContext)

    // menu button
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // modal
    const naviagte = useNavigate('')

    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogout = () => {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existingUser")
        naviagte('/')
    }

    // to set avatar

    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            const user = JSON.parse(sessionStorage.getItem("existingUser"));
            // Assuming user.profile is a file object
            setProfileImg(user.profile);
        }
    }, [updateProfileResponse]);
    
   
    
// console.log(avatar);


return (
    <>
        <Navbar expand="lg" className="headnavbar px-md-5">
            <Container fluid>
                <Navbar.Brand href="#home" as={Link} to={'/home'} className='text-light'><img
                    src={logo}
                    width="50"
                    height="50"
                    alt="Rescue waves logo"
                />{' '}
                    Rescue Waves
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Nav.Link href="#home" as={Link} to={'/home'} className='text-light'>Home</Nav.Link>
                        <NavDropdown title={<span style={{ color: 'white' }}>Donation</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" as={Link} to={'/mydonations'}>My Donations</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" as={Link} to={'/totaldonations'}>Total Donations
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span style={{ color: 'white' }}>Shelters</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" as={Link} to={'/myshelter'}>My Bookings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" as={Link} to={'/shelterslist'}>Shelters List
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span style={{ color: 'white' }}>Volunteer Oppurtunites</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" as={Link} to={'/myparticipation'}>My Participations</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" as={Link} to={'/volunteerlist'}>Oppurtunites List
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#campaign" as={Link} to={'/donationcampaigns'} className='text-light'>Campaigns</Nav.Link>
                        <Nav.Link href="#emergency" className='text-light'>Emergency Contacts</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* menu button */}
                        <div>
                            <IconButton onClick={handleClick}>
                                <Avatar
                                    src={profileImg ? `${serverUrl}/uploads/${profileImg}` : avatarImg}
                                    alt="User Avatar"
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} component={Link} to='/profile'>Profile</MenuItem>
                                <MenuItem onClick={handleShow}  >Logout</MenuItem>
                            </Menu>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>confirm logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want logout</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                <Button variant="primary" type='button' onClick={handleLogout}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>



    </>
)
}

export default Header