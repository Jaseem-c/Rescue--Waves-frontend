import React, { createContext, useState } from 'react'

export const addResponseContext=createContext({})
export const addProgramsContext=createContext({})
export const addShelterContext=createContext({})
export const updateAvailabilityContext=createContext({})
export const updateProfileResponseContext=createContext({})

function ContextShare({children}) {
    const[addCampaignResponse,setAddCampaignResponse]=useState({})
    const [addProgramsResponse,setAddProgramsResponse]=useState({})
    const [addShelterResponse,setAddShelterResponse]=useState({})
    const [updateAvailabiltyResponse,setUpdateAvailabilityResponse]=useState({})
    const [updateProfileResponse,setUpdateProfileStatus]=useState({})
  return (
   <addResponseContext.Provider value={{addCampaignResponse,setAddCampaignResponse}}>
    <addProgramsContext.Provider value={{addProgramsResponse,setAddProgramsResponse}}>
      <addShelterContext.Provider value={{addShelterResponse,setAddShelterResponse}}>
        <updateAvailabilityContext.Provider value={{updateAvailabiltyResponse,setUpdateAvailabilityResponse}}>
         <updateProfileResponseContext.Provider value={{updateProfileResponse,setUpdateProfileStatus}}> 
          {children}
          </updateProfileResponseContext.Provider>
          </updateAvailabilityContext.Provider>
       
        </addShelterContext.Provider>
      </addProgramsContext.Provider>
   
   </addResponseContext.Provider>
  )
}

export default ContextShare