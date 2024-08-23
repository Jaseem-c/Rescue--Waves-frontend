import React from 'react'
import  '../Pages/Mydonation.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function Mydonations() {
  return (
   <>
   <Header/>
   <div className='py-5 px-3 px-md-5'>
     <div className="enhanced-container">
              <h2 className="text-center mb-5">My Donation Details</h2>
  
              {/* Monetary Donations Section */}
              <div className="donation-card">
                  <h3>Monetary Donations</h3>
                  <div className="donation-item">
                      <span className="donation-label">Total Donations:</span>
                      <span className="donation-value">₹50,000</span>
                  </div>
                  <div className="donation-item ">
                      <span className="donation-label">Donation Date:</span>
                      <span className="donation-value ">15th August 2024</span>
                  </div>
              </div>
  
              {/* Non-Monetary Donations Section */}
              <div className="donation-card mt-4">
                  <h3>Non-Monetary Donations</h3>
                  <div className="donation-item">
                      <span className="donation-label">Total Food Items Donated:</span>
                      <span className="donation-value">50 items</span>
                  </div>
                  <div className="donation-item">
                      <span className="donation-label">Total Clothing Items Donated:</span>
                      <span className="donation-value">30 items</span>
                  </div>
                  <div className="donation-item">
                      <span className="donation-label">Total Medical Supplies Donated:</span>
                      <span className="donation-value">15 items</span>
                  </div>
              </div>
          </div>
   </div>
        <Footer/>
   </>
  )
}

export default Mydonations