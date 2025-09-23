import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Activities from './Pages/Activities'
import Contactus from './Pages/Contactus'
import Donate from './Pages/Donate'
import Members from './Pages/Members'
import Messages from './Pages/Messages'
import Objectives from './Pages/Objectives'
import Ourteam from './Pages/Ourteam'
import Partners from './Pages/Partners'
import PhotoGallery from './Pages/PhotoGallery'
import Projects from './Pages/Projects'
import Staffs from './Pages/Staffs'
import Supportus from './Pages/Supportus'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Donations from './Pages/Donations'
import PastActivities from './Pages/PastActivities'
import UpcomingActivities from './Pages/UpcomingActivities'
import { Route, Routes } from 'react-router-dom'


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
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/members' element={<Members />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/objectives' element={<Objectives />} />
      <Route path='/ourteam' element={<Ourteam />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/photogallery' element={<PhotoGallery />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/staffs' element={<Staffs />} />
      <Route path='/supportus' element={<Supportus />} />
      <Route path='/donations' element={<Donations />} />
      <Route path='/pastactivities' element={<PastActivities />} />
      <Route path='/upcomingactivities' element={<UpcomingActivities />} />
    </Routes>
    <Footer/>
      </div>
  )
}

export default App
