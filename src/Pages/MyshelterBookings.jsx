import React, { useEffect, useState } from 'react'
import '../Pages/Myshelterbooking.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { getUserBookingDetailsApi } from '../Services/allApi'
function MyshelterBookings() {
    //  to store userbooking details
    const [userBookingDetails, setUserBookingDetails] = useState([])

    const getUserBookingDetails = async () => {

        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await getUserBookingDetailsApi(reqHeader)
        setUserBookingDetails(result.data)
    }
    console.log(userBookingDetails);

    useEffect(() => {
        getUserBookingDetails()
    }, [])

    return (
        <>
            <Header />
            <div className='p-2 p-md-5'>
                <div className="shelter-container">
                    <h2 className="text-center mb-5">My Shelter Booking Details</h2>

                    {userBookingDetails.length > 0 ? userBookingDetails.map((item) => (
                        <div className="shelter-card" key={item?._id}>
                            <h3>Booked Shelters</h3>
                            <div className="shelter-item">
                                <span className="shelter-label">Shelter Name:</span>
                                <span className="shelter-value">{item?.shelterName}</span>
                            </div>
                            <div className="shelter-item">
                                <span className="shelter-label">Location:</span>
                                <span className="shelter-value">{item?.location}</span>
                            </div>
                            <div className="shelter-item">
                                <span className="shelter-label">Number of People:</span>
                                <span className="shelter-value">{item?.noOfPeople}</span>
                            </div>
                            <div className="shelter-item">
                                <span className="shelter-label">Booking Date:</span>
                                <span className="shelter-value">{item?.BookingDate}</span>
                            </div>
                            <div className="shelter-item">
                                <span className="shelter-label">Booking Status:</span>
                                <span className="shelter-value status-confirmed">{item?.BookingStatus}</span>
                            </div>
                        </div>
                    )):<p>no Bookings</p>
            }

                    {/* Add more booking details as necessary */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyshelterBookings