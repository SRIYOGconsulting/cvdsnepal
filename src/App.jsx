import { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet, useLocation} from 'react-router-dom'

function App() {
  const organizationName = "CVDS Nepal"
  const country = "Nepal"
  const city ="Kathmandu"
  const address2 = "Sankhu"
  const address1 = "Shalambutar"
  const municipality= "Shankharapur "
  const wardno = "6"
  const email1="info@cvdsnepal.org.np"
  const email2="cvdsnepal@yahoo.com"
  const phone1 = "+977-9851160868"
  const phone2 = "+977-9841360868"
  const builtWith = "Broad Press"
  const facebook = "cvdsnepal/yubraj thapa bairagi"
  const established = "2005"
  const youtube = "https://www.youtubevideoembed.com"
  const poweredBy = "flickr embed"
  const accountNumber = "050000023543"
  const accountName = "Conflict victim and disable society nepal"

  const location = useLocation();

  return(
    <div>
      <Header/> 
    <h1>you are in {location.pathname === "/"?"Home":location.pathname.slice(1)} page</h1>
    <Outlet/>
    <Footer/>
      </div>
  )
}

export default App