import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
 import cloth from '../assets/cloth.jpg'
function CampaignCard() {
  return (
    <>
    <Card style={{ width: '100%' }} className='rounded-3 p-3 shadow'>
      <Card.Img variant="top" src={cloth} width={"100%"} height={"250px"}/>
      <Card.Body>
        <Card.Title>Cloth Donation Campaign</Card.Title>
        <p>Donate clothes to help those affected by the disaster. Your contribution will 
        make a difference.</p>
        <Row className='w-100'>
            <Col xs={12} md={6} lg={7}>
                <h4 className='text-danger fw-bold'>FOR IN KIND DONATIONS</h4>
                <div>
                    <ul>
                        <li>Clothing for Adults</li>
                        <li>Under wear</li>
                        <li>Clothing for Childrens</li>
                        <li>Blankets</li>
                        <li> Footwear</li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} md={6} lg={5}>
                <h4 className='text-danger fw-bold'>Drop off at:</h4>
                <h6>ABC Building,Aluva</h6>
                <h6>Ernakulam ,Kerala</h6>
                <h6>11/10/2024 10:00 Am</h6>
                <h6>+91 3443344343</h6>
            </Col>
        </Row>
      </Card.Body>
    </Card>
    </>
  )
}

export default CampaignCard