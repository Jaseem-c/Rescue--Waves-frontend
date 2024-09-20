
import { CommonApi } from "./CommonApi"
import { serverUrl } from "./serverUrl"

// api to add register details
export const registerApi = async (reqBody) => {
    return await CommonApi("POST", `${serverUrl}/register`, reqBody, "")
}
// api to login
export const loginApi = async (reqBody) => {
    return await CommonApi("POST", `${serverUrl}/login`, reqBody, "")
}
// api to admin login
export const adminLoginApi = async (reqBody) => {
    return await CommonApi("POST", `${serverUrl}/adminlogin`, reqBody, "")
}
// api to get all users(admin)
export const getAllUsersApi = async () => {
    return await CommonApi("GET", `${serverUrl}/allusers`, "", "")
}
// api to delete user(admin)
export const deleteUserApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/deleteuser/${id}`, {}, "")
}



// api to add campaigns(admin)
export const addCampaignApi = async (reqBody, reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-campaign`, reqBody, reqHeader)
}

// api to get all campaigns
export const getAllCampaign = async () => {
    return await CommonApi("GET", `${serverUrl}/allcampaigns`, "", "")
}
// to dlete campaign(admin)
export const deleteCampaignApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/deletecampaign/${id}`, {}, "")
}
// to get home campaigns
export const getHomeCampaignApi = async () => {
    return await CommonApi("GET", `${serverUrl}/homecampaigns`, "", "")
}



// to add voulnteerprogramsapi(admin)
export const addProgramsApi = async (reqBody, reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-volunteerprogram`, reqBody, reqHeader)
}
// to get voulnteer programs
export const getProgramsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-volunteerprograms`, "", "")
}
// to delete program
export const deleteProgramsApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/delete-volunteerprogram/${id}`, {}, "")
}
// to get Home Programs
export const getHomeProgramsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/home-volunteerprograms`, "", "")
}


// to register as volunteer
export const registerVolunteerApi = async (reqBody, reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-volunteer`, reqBody, reqHeader)
}
// to get all volunteer details
export const getAllVolunteersApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-volunteers`, "", "")
}
// api to update volunteer
export const updateVolunteerApi = async (id) => {
    return await CommonApi("PUT", `${serverUrl}/update-volunteer/${id}`,{},"")
}
// to get userparticipations
export const getUserParticipationsApi = async (reqHeader) => {
    return await CommonApi("GET", `${serverUrl}/user-participations`, "", reqHeader)
}


// to add shelters
export const addSheltersApi = async (reqBody, reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-shelter`, reqBody, reqHeader)
}
// to get all shelters
export const getAllSheltersApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-shelters`, "", "")
}
// to delete shelter
export const deleteShelterApi = async (id) => {
    return await CommonApi("DELETE", `${serverUrl}/delete-shelter/${id}`, {}, "")
}
// to get shelters (users)
export const getSheltersApi = async (searchkey) => {
    return await CommonApi("GET", `${serverUrl}/shelters?search=${searchkey}`, "", "")

}


// to book shelters
export const bookSheltersApi = async (reqBody, reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-shelter-booking`, reqBody, reqHeader)
}
// to get user booking details
export const getUserBookingDetailsApi = async (reqHeader) => {
    return await CommonApi("GET",`${serverUrl}/user-booking`,"",reqHeader)
}
// to get allbookingdetails(admin)
export const getAllBookingDetailsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-user-booking`, "", "")
}


// to add monetarydonation details
export const addMonetaryDonationApi = async (reqBody,reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-monetary-donation`, reqBody,reqHeader)
}
// to get all monetary donations
export const getAllMonetaryDonationsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-monetary-donations`, "","")
}
// to get all usermonetarydonations
export const getUserMonetaryDonationsApi = async (reqHeader) => {
    return await CommonApi("GET", `${serverUrl}/user-monetary-donation`, "",reqHeader)
}


// to add non monetary donations
export const addNonMonetaryDonationApi = async (reqBody,reqHeader) => {
    return await CommonApi("POST", `${serverUrl}/add-non-monetary-donation`, reqBody,reqHeader)
}
// to get allnon monetary donations
export const getAllNonMonetaryDonationsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-non-monetary-donations`, "","")
}
// to update non monetarydonation status
export const updateNonMonetaryDonationStatusApi = async (id) =>{
    return await CommonApi("PUT", `${serverUrl}/update-non-monetary-donation-status/${id}`,{},"")
}
// to get all usernonmonetarydonations
export const getUserNonMonetaryDonationsApi = async (reqHeader) => {
    return await CommonApi("GET", `${serverUrl}/user-non-monetary-donation`, "",reqHeader)
}
// to get allCollected non monetary donations
export const getAllCollectedNonMonetaryDonationsApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-collected-non-monetary-donations`,"","")
}
// to update profile
export const updateProfileApi = async (reqBody,reqHeader) => {
    return await CommonApi("PUT", `${serverUrl}/update-profile`, reqBody,reqHeader)
}

// to send user message api
export const sendMessageApi = async (reqBody) => {
    return await CommonApi("POST", `${serverUrl}/user/sendchat`, reqBody,"")
}
// to get messages
export const getMessagesApi = async (senderId,recieverId) => {
    return await CommonApi("GET", `${serverUrl}/getMessages/${senderId}/${recieverId}`, "",)
}
// to get all users chat
export const getAllUsersChatApi = async () => {
    return await CommonApi("GET", `${serverUrl}/all-chats`)
}