import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import About from './Pages/About'


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
  return(
    <div>
<Home />
<About />
    </div>
  )
}

export default App
