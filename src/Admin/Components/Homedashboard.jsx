import { useTheme } from '@emotion/react';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

function Homedashboard() {

    return (
        <>
            <h3>DashBoard</h3>
            <div>
                <Row className='w-100 mt-5'>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>35</h3>
                            <h6 className='mb-0'>users</h6>
                        </div>

                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>18</h3>
                            <h6 className='mb-0'>Shelters</h6>
                        </div></Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='bg-primary d-flex align-items-center justify-content-center flex-column rounded text-white p-3'>
                            <h3 className='mb-1'>7</h3>
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
                            <th>NO.of Peoples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Neel</td>
                            <td>Mes College</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Neel</td>
                            <td>Mes College</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Neel</td>
                            <td>Mes College</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Neel</td>
                            <td>Mes College</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Neel</td>
                            <td>Mes College</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>15</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Cloth</td>
                            <td>20</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Money</td>
                            <td>10</td>
                            <td>20</td>
                        </tr>
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