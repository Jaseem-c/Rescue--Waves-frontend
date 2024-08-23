import React from 'react'

function EmergencyAlert() {
  return (
    <>
    <div className='p-3 px-md-5 py-md-4 border  border-success shadow rounded-3'>
        <h2 className='text-dark'>Emeregency Alerts</h2>
        <p className='text-dark mt-3'>Severe Flood Warning:Severe flooding is expected in the downtown area. Please 
        avoid travel and move to higher ground immediately.</p>
        <p className='text-dark fw-light'>Issued by: National Weather Service</p>
    </div>
    </>
  )
}

export default EmergencyAlert