import React from 'react'
import  '../Pages/Myshelterbooking.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function MyshelterBookings() {
  return (
    <>
    <Header/>
      <div className='p-2 p-md-5'>
        <div className="shelter-container">
              <h2 className="text-center mb-5">My Shelter Booking Details</h2>
  
              <div className="shelter-card">
                  <h3>Booked Shelters</h3>
                  <div className="shelter-item">
                      <span className="shelter-label">Shelter Name:</span>
                      <span className="shelter-value">Hope Haven Shelter</span>
                  </div>
                  <div className="shelter-item">
                      <span className="shelter-label">Location:</span>
                      <span className="shelter-value">123 Relief Lane, Cityville</span>
                  </div>
                  <div className="shelter-item">
                      <span className="shelter-label">Number of People:</span>
                      <span className="shelter-value">4</span>
                  </div>
                  <div className="shelter-item">
                      <span className="shelter-label">Booking Date:</span>
                      <span className="shelter-value">1st September 2024</span>
                  </div>
                  <div className="shelter-item">
                      <span className="shelter-label">Booking Status:</span>
                      <span className="shelter-value status-confirmed">Confirmed</span>
                  </div>
              </div>
  
              {/* Add more booking details as necessary */}
          </div>
      </div>
        <Footer/>
    </>
  )
}

export default MyshelterBookings