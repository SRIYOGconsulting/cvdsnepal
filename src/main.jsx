import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route  path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/members' element={<Members />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/objectives' element={<Objectives />} />
      <Route path='/ourteam' element={<Ourteam />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/projectpartnership' element={<ProjectPartnership />} />
      <Route path='/photogallery' element={<PhotoGallery />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/staffs' element={<Staffs />} />
      <Route path='/supportus' element={<Supportus />} />
      <Route path='/donations' element={<Donations />} />
      <Route path='/pastactivities' element={<PastActivities />} />
      <Route path='/upcomingactivities' element={<UpcomingActivities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
