import React, { useEffect, useState } from 'react'
import  '../Pages/Mydonation.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { getUserMonetaryDonationsApi, getUserNonMonetaryDonationsApi } from '../Services/allApi'
function Mydonations() {

// monetary donations
    const [userMonetaryDonations, setUserMonetaryDonations] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [lastDate,setLastDate]=useState('')

    // non monetary donations
    const [userNonMonetaryDonations, setUserNonMonetaryDonations] = useState([])
    const [userFoodItems,setUserFoodItems]=useState(0)
    const [userClothItems,setUserClothItems]=useState(0)
    const [userMedicineItems,setUserMedicineItems]=useState(0)

    const getUserMonetaryDonations = async () => {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };

        const result = await getUserMonetaryDonationsApi(reqHeader);
        setUserMonetaryDonations(result.data);

        // Calculate total amount immediately after setting state
        const totalMonetaryDonation = result.data
            .map((item) => item.donationAmount)
            .reduce((n1, n2) => n1 + n2, 0);

        setTotalAmount(totalMonetaryDonation);
        // calculate last date donted
        const lastdate=result.data.map((item)=>item.donationDate).reduce((n1,n2)=>n1>n2?n1:n2)
        setLastDate(lastdate)
    };

    // Alternatively, you can use useEffect to calculate total whenever donations change
    // useEffect(() => {
    //     if (userMonetaryDonations.length > 0) {
    //         const totalMonetaryDonation = userMonetaryDonations
    //             .map((item) => item.donationAmount)
    //             .reduce((n1, n2) => n1 + n2, 0);
    //         setTotalAmount(totalMonetaryDonation);
    //     }
    // }, [userMonetaryDonations]);

    useEffect(() => {
        getUserMonetaryDonations();
    }, []);

    console.log(userMonetaryDonations);
    console.log(totalAmount);

    // non monetary donations
    const getUserNonMonetaryDonations = async () => {
        const token = sessionStorage.getItem("token");

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };

        const result = await getUserNonMonetaryDonationsApi(reqHeader);
        setUserNonMonetaryDonations(result.data);

        // calculate total no of fooditems
        const totalFoodItems = result.data.filter((item)=>item.donationType=="Food").map((item)=>item.
        noOfItems).reduce((n1,n2)=>n1+n2)
        setUserFoodItems(totalFoodItems)
        // calculate total no of cloth items
        const totalclothItems = result.data.filter((item)=>item.donationType=="Cloth").map((item)=>item.
        noOfItems).reduce((n1,n2)=>n1+n2)
        setUserClothItems(totalclothItems)
        // calculate total no of medicine items
        const totalMedicineItems = result.data.filter((item)=>item.donationType=="Medical Supplies").map((item)=>item.
        noOfItems).reduce((n1,n2)=>n1+n2)
        setUserMedicineItems(totalMedicineItems)
    }
    console.log(userFoodItems);
    console.log(userClothItems);
    console.log(userMedicineItems);
    
    
    
    useEffect(()=>{
        getUserNonMonetaryDonations();
    },[])
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
                      <span className="donation-value">₹{totalAmount}</span>
                  </div>
                  <div className="donation-item ">
                      <span className="donation-label">Last Donated Date:</span>
                      <span className="donation-value ">{lastDate}</span>
                  </div>
              </div>
  
              {/* Non-Monetary Donations Section */}
              <div className="donation-card mt-4">
                  <h3>Non-Monetary Donations</h3>
                  <div className="donation-item">
                      <span className="donation-label">Total Food Items Donated:</span>
                      <span className="donation-value">{userFoodItems} items</span>
                  </div>
                  <div className="donation-item">
                      <span className="donation-label">Total Clothing Items Donated:</span>
                      <span className="donation-value">{userClothItems} items</span>
                  </div>
                  <div className="donation-item">
                      <span className="donation-label">Total Medical Supplies Donated:</span>
                      <span className="donation-value">{userMedicineItems} items</span>
                  </div>
              </div>
          </div>
   </div>
        <Footer/>
   </>
  )
}

export default Mydonations