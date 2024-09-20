import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ShelterCard from '../Components/ShelterCard'
import { getAllSheltersApi, getSheltersApi } from '../Services/allApi'
import { updateAvailabilityContext } from '../../Context/ContextShare'

function SheltersList() {
  // to update availability automaticaly
  const {updateAvailabiltyResponse}=useContext(updateAvailabilityContext)


// search key
const [searchKey, setSearchKey] = useState('')

  // to store shelters details
  const [allShelters,setAllShelters]=useState([])

  const getAllShelters=async()=>{
    const result=await getSheltersApi(searchKey)
    setAllShelters(result.data)
  }
  console.log(allShelters);
  useEffect(()=>{
    getAllShelters()
  },[searchKey,updateAvailabiltyResponse])
  
  return (
    <>
    <Header/>
      <div className="shelters p-3 p-md-5 ">
        <h1 className='text-center'>All Shelters</h1>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex align-items-center">
            <input type="text" className='form-control rounded-5' placeholder='Search By location' onChange={(e)=>setSearchKey(e.target.value)} /><FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: "-25px", color: "lightgray" }} />
          </div>
          <div className="col-md-4"></div>
        </div>
        <Row className='w-100 mt-3 d-flex align-items-center justify-content-center'>
          {allShelters.length>0?allShelters.map((item)=>(
            <Col xs={12} md={6} lg={4} className='mt-3 mt-md-5 d-flex align-items-center justify-content-center' >
            <ShelterCard shelter={item}/>
            </Col>
          )):<p className='text-danger'>No shelters</p>}
          
        </Row>
      </div>
      <Footer/>
    </>
  )
}

export default SheltersList