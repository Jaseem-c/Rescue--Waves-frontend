
import { BarChart } from '@mui/x-charts/BarChart';
import React,{useEffect, useState} from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { getAllBookingDetailsApi, getAllCampaign, getAllSheltersApi, getAllUsersApi } from '../../Services/allApi';

function Homedashboard() {

    const [numberOfUsers,setNumberOfUsers]= useState([])
    const [numberOfShelters,setNumberOfShelters]=useState([])
    const [numberOfCampaigns,setNumberOfCampaigns]=useState([])
    const [dashBookingDetails,setDashBookingDetails]=useState([])


    const getnumberofUsers=async()=>{
        const result=await getAllUsersApi()
        setNumberOfUsers(result.data)
    }
    const getnumberofshelters=async()=>{
        const result=await getAllSheltersApi()
        setNumberOfShelters(result.data)
    }
    const numberofcampaigns=async()=>{
        const result=await getAllCampaign()
        setNumberOfCampaigns(result.data)
    }
    const dashbookingdetails=async()=>{
        const result=await getAllBookingDetailsApi()
        setDashBookingDetails(result.data)
    }
    console.log(dashBookingDetails);
    

    useEffect(()=>{
        getnumberofUsers()
        getnumberofshelters()
        numberofcampaigns()
        dashbookingdetails()
    },[])


    return (
        <>
            <h3>DashBoard</h3>
            <div>
                <Row className='w-100 mt-5'>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>{numberOfUsers.length}</h3>
                            <h6 className='mb-0'>users</h6>
                        </div>

                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>{numberOfShelters.length}</h3>
                            <h6 className='mb-0'>Shelters</h6>
                        </div></Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>{numberOfCampaigns.length}</h3>
                            <h6 className='mb-0'>Campaign</h6>
                        </div></Col>
                </Row>
                <Row className='w-100 mt-5'>
                    <Col xs={12} md={6} lg={6}>
                        <div className='shadow d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h4 className='text-dark'>Donations</h4>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['money', 'food', 'cloth', 'medical'] }]}
                                series={[
                                    {
                                        data: [25, 50, 75, 35], // Example data where each value corresponds to one category
                                        color: '#8e2de2'
                                    },
                                ]}
                                width={500}
                                height={300}
                            />
                        </div>

                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='shadow d-flex  align-items-center justify-content-center flex-column rounded text-white p-3' style={{height:"370px"}}>
                                    <h4 className='text-dark'>Shelter Booking History</h4>
                                    <div className='p-4 w-100 d-flex align-items-center justify-content-center'>
            <div style={{ width: "90%", maxHeight: "200px", overflowY: "auto" }} className='border border-primary'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Shelter Name</th>
                            <th>Peoples(Nos)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashBookingDetails.length>0?dashBookingDetails.map((bookings)=>(
                            <tr>
                            <td>{bookings?.name}</td>
                            <td>{bookings?.shelterName}</td>
                            <td>{bookings?.noOfPeople}</td>
                        </tr>
                        )):<p>No Bookings</p>}
                    </tbody>
                </Table>
            </div>
        </div>
                        </div></Col>
                </Row>
            </div>
        </>
    )
}

export default Homedashboard