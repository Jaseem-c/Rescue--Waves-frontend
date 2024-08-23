import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Components/Header.css'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'


import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'


function Header() {

    // menu button
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                                        src={avatar}
                                        alt="User Avatar"
                                    />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}component={Link} to='/profile'>Profile</MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/">Logout</MenuItem>
                                </Menu>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            

        </>
    )
}

export default Header