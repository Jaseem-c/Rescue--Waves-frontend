import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import cloth from '../assets/cloth.jpg'
import { serverUrl } from '../Services/serverUrl'
function CampaignCard({ campaign }) {
    // campare dates to active or deactive programs
    const [available, setAvailable] = useState(true)
    const today=new Date().toLocaleDateString('en-CA')
  
    const checkDate=()=>{
      console.log(today);
      if(today>campaign?.date)
      {
        setAvailable(false)
  
        
      }
    }

    useEffect(()=>{
      checkDate()
    },[])
  return (
    <>

      <Card style={{ width: '100%', height: "650px" ,pointerEvents: available ? 'auto' : 'none',opacity: available ? 1 : 0.5 }} className='rounded-3 p-3 shadow '>
        <Card.Img
          variant="top"
          src={`${serverUrl}/uploads/${campaign?.image}`}
          alt={campaign?.image}
          width={"100%"}
          height={"250px"}
        />
        <Card.Body>
          <Card.Title>{campaign?.title}</Card.Title>
          <p>{campaign?.description}</p>
          <Row className='w-100'>
            <Col xs={12} md={6} lg={7}>
              <h4 className='text-danger fw-bold'>FOR IN KIND DONATIONS</h4>
              <div>
                <ul>
                  {campaign?.donationItems ?
                    campaign.donationItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) : null}
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <h4 className='text-danger fw-bold'>Drop off at:</h4>
              {campaign?.dropoffLocation?.map((location, index) => (
                <h6 key={index}>{location}</h6>
              ))}
              <h6>{campaign?.date}</h6>
              <h6>{campaign?.time}</h6>
              <h6>{campaign?.contact}</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </>
  )
}

export default CampaignCard