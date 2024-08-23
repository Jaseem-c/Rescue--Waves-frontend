import './App.css'
import LandingPage from './Pages/LandingPage'
import '../src/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Authorization from './Pages/Authorization'
import SheltersList from './Pages/SheltersList'
import VolunteerList from './Pages/VolunteerList'
import PageNotFound from './Pages/PageNotFound'
import DonationCampaign from './Pages/DonationCampaign'
import Mydonations from './Pages/Mydonations'
import Totaldonations from './Pages/Totaldonations'
import MyshelterBookings from './Pages/MyshelterBookings'
import VolunteerParticipation from './Pages/VolunteerParticipation'
import Profile from './Pages/Profile'
import Chatbox from './Components/Chatbox'
import Dashboard from './Admin/Dashboard'

function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Authorization register />}/>
        <Route path='/login' element={<Authorization />}/>
        <Route path='/shelterslist' element={<SheltersList />}/>
        <Route path='/volunteerlist' element={<VolunteerList />}/>
        <Route path='/donationcampaigns' element={<DonationCampaign />}/>
        <Route path='/mydonations' element={<Mydonations />}/>
        <Route path='/totaldonations' element={<Totaldonations />}/>
        <Route path='/myshelter' element={<MyshelterBookings />}/>
        <Route path='/myparticipation' element={<VolunteerParticipation />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/chat" element={<Chatbox/>} />
        <Route path="/admindashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
