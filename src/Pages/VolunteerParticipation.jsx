import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import  '../Pages/VolunteerParticipation.css'
function VolunteerParticipation() {
  return (
    <>
    <Header/>
    <div className='p-2 p-md-5'>
    <div className="participation-container">
            <h2 className="text-center mb-5">My Volunteer Participation History</h2>
            
            <div className="participation-card">
                <h3>Community Clean-Up Drive</h3>
                <p><strong>Date:</strong> September 15, 2024</p>
                <p><strong>Location:</strong> Central Park, Cityville</p>
                <p><strong>Status:</strong> <span className="status completed">Completed</span></p>
            </div>
            
            <div className="participation-card">
                <h3>Food Distribution Program</h3>
                <p><strong>Date:</strong> September 22, 2024</p>
                <p><strong>Location:</strong> Downtown Community Center</p>
                <p><strong>Status:</strong> <span className="status completed">Completed</span></p>
            </div>
            
            <div className="participation-card">
                <h3>Clothing Donation Drive</h3>
                <p><strong>Date:</strong> October 5, 2024</p>
                <p><strong>Location:</strong> Eastside Mall</p>
                <p><strong>Status:</strong> <span className="status upcoming">Upcoming</span></p>
            </div>
            
            {/* Add more cards here if needed */}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default VolunteerParticipation
