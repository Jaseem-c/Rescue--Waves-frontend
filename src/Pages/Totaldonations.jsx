import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Col, Row } from 'react-bootstrap'
import moneydonation from '../assets/money donation.jpg'
import nonmonetary from '../assets/medical.jpg'
import { getAllCollectedNonMonetaryDonationsApi, getAllMonetaryDonationsApi, getAllNonMonetaryDonationsApi } from '../Services/allApi'
import './totaldonation.css'
function Totaldonations() {
  // to store monetary donation details
  const [totalMonetary, setTotalMonetary] = useState([])
  const [total, setTotal] = useState(0)
  const [toppers, setToppers] = useState([])

  // to store non monetary donations
  const [totalNonMonetary, setTotalNonMonetary] = useState([])
  const[totalItems,setTotalItems]=useState(0)
  const [totalFood,setTotalFood]=useState(0)
  const [totalCloths,setTotalCloths]=useState(0)
  const [totalMedical,setTotalMedical]=useState(0)

const today=new Date().toLocaleDateString('en-CA')

  const totalMonetaryDonations = async () => {
    const response = await getAllMonetaryDonationsApi()
    setTotalMonetary(response.data)

    // to get total amount
    // Calculate total amount immediately after setting state
    const totalMonetaryDonation = response.data
      .map((item) => item.donationAmount)
      .reduce((n1, n2) => n1 + n2, 0);

    setTotal(totalMonetaryDonation);
    // to get toppres
    const toppersOfMonetaryDonations = response.data.filter((item)=>item.donationDate==today).sort((n1, n2) => n2.donationAmount - n1.donationAmount).slice(0, 3)
    setToppers(toppersOfMonetaryDonations)
  }
  console.log(toppers);


  useEffect(() => {
    totalMonetaryDonations()
  }, [])

  // non monetary donations
  const totalNonMonetaryDonations = async () => {
    const response = await getAllCollectedNonMonetaryDonationsApi()
    setTotalNonMonetary(response.data)

    // to get total no of  items
    const totalNoOflItems = response.data.map((item)=>item.noOfItems).reduce((n1,n2)=>n1+n2)
    setTotalItems(totalNoOflItems)
    // to get total no of food items
    const totalNoOfFoodItems=response.data.filter((item)=>item.donationType=='Food').map((item)=>item.noOfItems).reduce((n1,n2)=>n1+n2)  
    setTotalFood(totalNoOfFoodItems)
    // to get all no of cloths
    const totalNoOfClothItems=response.data.filter((item)=>item.donationType=='Cloth').map((item)=>item.noOfItems).reduce((n1,n2)=>n1+n2)  
    setTotalCloths(totalNoOfClothItems)
    // to get all no of medical items
    const totalNoOfMedicalItems=response.data.filter((item)=>item.donationType=='Medical Supplies').map((item)=>item.noOfItems).reduce((n1,n2)=>n1+n2)  
    setTotalMedical(totalNoOfMedicalItems)

  }
  console.log(totalNonMonetary);
  useEffect(() => {
    totalNonMonetaryDonations()
  }, [])
  return (
    <>
      <Header />
      <div className="container  d-flex align-items-center justify-content-center">
        <Row className='w-100 my-5 d-flex align-items-center justify-content-center'>

          <Col xs={12} md={6} lg={6} >
            <div className=' border shadow '>
              <div>
                <img src={moneydonation} alt="" width={"100%"} height={"300px"} />
              </div>
              <div className='p-3'>
                <p className='text-center mt-3'>Total Donation :</p>
                <h1 className='text-center text-primary mt-3 fw-bold'>₹{total}</h1>
                <div >
                  <h4 className='mt-4'>Today's Toppers</h4>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>{toppers[0]?.name}</p>
                    <p className='fw-bold m-0'>₹{toppers[0]?.donationAmount}</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>{toppers[1]?.name}</p>
                    <p className='fw-bold m-0'>₹{toppers[1]?.donationAmount}</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>{toppers[2]?.name}</p>
                    <p className='fw-bold m-0'>₹{toppers[2]?.donationAmount}</p>
                  </div>
                  <div className='mt-3 mt-md-5 mb-5'>
                    <div className="thank-you-container">
                      <div className="thank-you-card">
                        <h2 className="thank-you-title">Thank You!</h2>
                        <p className="thank-you-message">
                          Your generosity is greatly appreciated.
                        </p>

                      </div>
                    </div>
                  </div>

                  <div className="d-flex"></div>
                  <div className="d-flex"></div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className=' border shadow '>
              <div>
                <img src={nonmonetary} alt="" width={"100%"} height={"300px"} />
              </div>
              <div className='p-3'>
                <p className='text-center mt-3'>Total Donation :</p>
                <h1 className='text-center text-primary mt-3 fw-bold'>{totalItems} Items</h1>
                <div >
                  <h4 className='mt-4'>Non Monetary Donations</h4>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Food </p>
                    <p className='fw-bold m-0'>{totalFood} Items</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Cloth</p>
                    <p className='fw-bold m-0'>{totalCloths} Items</p>
                  </div>
                  <div className="d-flex mt-3 px-3 py-2 align-items-center justify-content-between rounded-3" style={{ backgroundColor: "lightgrey" }}>
                    <p className='fw-bold m-0'>Medical  Supplies</p>
                    <p className='fw-bold m-0'>{totalMedical} Items</p>
                  </div>
                  <div className='mt-3 mt-md-5 mb-5'>
                    <div className="thank-you-container">
                      <div className="thank-you-card">
                        <h2 className="thank-you-title">Thank You!</h2>
                        <p className="thank-you-message">
                          Your generosity is greatly appreciated.
                        </p>

                      </div>
                    </div>
                  </div>

                  <div className="d-flex"></div>
                  <div className="d-flex"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
      <Footer />
    </>
  )
}

export default Totaldonations