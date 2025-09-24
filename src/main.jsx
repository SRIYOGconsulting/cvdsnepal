import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Activities from './Pages/Activities.jsx'
import Contactus from './Pages/Contactus.jsx'
import Donate from './Pages/Donate.jsx'
import Donations from './Pages/Donations.jsx'
import Members from './Pages/Members.jsx'
import Messages from './Pages/Messages.jsx'
import Objectives from './Pages/Objectives.jsx'
import Ourteam from './Pages/Ourteam.jsx'
import Partners from './Pages/Partners.jsx'
import PastActivities from './Pages/PastActivities.jsx'
import PhotoGallery from './Pages/PhotoGallery.jsx'
import ProjectPartnership from './Pages/ProjectPartnership.jsx'
import Projects from './Pages/Projects.jsx'
import Staffs from './Pages/Staffs.jsx'
import Supportus from './Pages/Supportus.jsx'
import UpcomingActivities from './Pages/UpcomingActivities.jsx'
import Videos from './Pages/Videos.jsx'
import Gallery from './Pages/Gallery.jsx'



const router = createBrowserRouter([
  {path:'/', element: <App />, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'activities', element:<Activities/>},
    {path:'contactus', element:<Contactus/>},
    {path:'donate', element:<Donate/>},
    {path:'donations', element:<Donations/>},
    {path:'gallery', element:<Gallery/>},
    {path:'members', element:<Members/>},
    {path:'messages', element:<Messages/>},
    {path:'objectives', element:<Objectives/>},
    {path:'ourteam', element:<Ourteam/>},
    {path:'partners', element:<Partners/>},
    {path:'pastactivities', element:<PastActivities/>},
    {path:'photogallery', element:<PhotoGallery/>},
    {path:'projectpartnership', element:<ProjectPartnership/>},
    {path:'projects', element:<Projects/>},
    {path:'staffs', element:<Staffs/>},
    {path:'supportus', element:<Supportus/>},
    {path:'upcomingactivities', element:<UpcomingActivities/>},
    {path:'videos', element:<Videos/>},
  ]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)