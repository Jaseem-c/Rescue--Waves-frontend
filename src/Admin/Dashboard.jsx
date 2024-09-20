import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import UserManagement from './Components/Usermanagement';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import Homedashboard from './Components/Homedashboard';
import CampaignManagement from './Components/CampaignManagement';
import DonationDetails from './Components/DonationDetails';
import ShelterSystem from './Components/ShelterSystem';
import VolunteerManagement from './Components/VolunteerManagement';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminChat from './Components/AdminChat';

export default function Dashboard() {
  const naviagte=useNavigate('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout=()=>{
    setShow(false)
    naviagte("/")

  }
  return (
    <>
    <div className='bg-primary d-flex py-3 px-5'>
        <h4 className='text-light'>Admin Dashboard</h4>
        <button className='btn ms-auto text-light bg-dark rounded-5 px-3' onClick={handleShow}><LogoutIcon/>LogOut</button>
    </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#f5f5f5' }}>
          <Box sx={{ width: '100%', height: '100%', maxWidth: '100%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
            <Tabs
              aria-label="Vertical tabs"
              orientation="vertical"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                '& .MuiTab-root': {
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  color: '#555555',
                  transition: 'color 0.3s ease',
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#1976d2',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              <TabList sx={{ backgroundColor: '#f0f0f0', borderRight: '1px solid #e0e0e0',width:"25%",height:"180vh"}}>
                <Tab><DashboardIcon/>Dashboard</Tab>
                <Tab><AccountCircleIcon/>User Management</Tab>
                <Tab><CampaignIcon/>Campaign Management</Tab>
                <Tab><MonetizationOnIcon/>Donation Details </Tab>
                <Tab><ApartmentIcon/>Shelter System </Tab>
                <Tab><VolunteerActivismIcon/>Volunteer Managment </Tab>
                <Tab><EmailIcon/>Chat Box</Tab>
              </TabList>
              <Box sx={{ padding: '24px', width: '100%' }}>
                <TabPanel value={0}>
                    <Homedashboard/>
                </TabPanel>
                <TabPanel value={1}>
                 <UserManagement/>
                </TabPanel>
                <TabPanel value={2}>
                  <CampaignManagement/>
                </TabPanel>
                <TabPanel value={3}>
                  <DonationDetails/>
                </TabPanel>
                <TabPanel value={4}>
                  <ShelterSystem/>
                </TabPanel>
                <TabPanel value={5}>
                  <VolunteerManagement/>
                </TabPanel>
                <TabPanel value={6}>
                 <AdminChat/>
                </TabPanel>
              </Box>
            </Tabs>
          </Box>
        </Box>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

