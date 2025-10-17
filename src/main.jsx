import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Activities from "./Pages/Activities.jsx";
import Contactus from "./Pages/Contactus.jsx";
import Donate from "./Pages/Donate.jsx";

import Members from "./Pages/Members.jsx";
import Messages from "./Pages/Messages.jsx";
import Objectives from "./Pages/Objectives.jsx";
import Ourteam from "./Pages/Ourteam.jsx";
import Partners from "./Pages/Partners.jsx";
import PastActivities from "./Pages/PastActivities.jsx";

import Projects from "./Pages/Projects.jsx";

import Supportus from "./Pages/Supportus.jsx";
import UpcomingActivities from "./Pages/UpcomingActivities.jsx";
import Videos from "./Pages/Videos.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Faq from "./Pages/Faq.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Notice from "./Pages/Notice.jsx";
import Payment from "./Pages/Payment.jsx";
import QR from "./Pages/QR.jsx";
import Calendar from "./Pages/Calendar.jsx";
// import { Calendar } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />, handle: { title: "Home" } },
      { path: "about", element: <About />, handle: { title: "About Us" } },
      {
        path: "activities",
        element: <Activities />,
        handle: { title: "Activities" },
      },
      {
        path: "contact",
        element: <Contactus />,
        handle: { title: "Contact Us" },
      },
      { path: "donate", element: <Donate />, handle: { title: "Donate" } },

      { path: "gallery", element: <Gallery />, handle: { title: "Gallery" } },
      { path: "members", element: <Members />, handle: { title: "Members" } },
      {
        path: "messages",
        element: <Messages />,
        handle: { title: "Messages" },
      },
      {
        path: "objectives",
        element: <Objectives />,
        handle: { title: "Objectives" },
      },
      { path: "team", element: <Ourteam />, handle: { title: "Our Team" } },
      {
        path: "partners",
        element: <Partners />,
        handle: { title: "Partners" },
      },
      {
        path: "pastactivities",
        element: <PastActivities />,
        handle: { title: "Past Activities" },
      },

      {
        path: "projects",
        element: <Projects />,
        handle: { title: "Projects" },
      },

      {
        path: "support",
        element: <Supportus />,
        handle: { title: "Support Us" },
      },
      {
        path: "upcomingactivities",
        element: <UpcomingActivities />,
        handle: { title: "Upcoming Activities" },
      },
      { path: "videos", element: <Videos />, handle: { title: "Videos" } },
      { path: "FAQ", element: <Faq />, handle: { title: "FAQ" } },
      { path: "testimonials", element: <Testimonials />, handle: { title: "Testimonials" } },
      { path: "feedback", element: <Feedback />, handle: { title: "Feedback" } },
      { path: "notice", element: <Notice />, handle: { title: "Notice" } },
        { path: "payment", element: <Payment />, handle: { title: "Payment" } },
         { path: "QR", element: <QR />, handle: { title: "QR" } },
           { path: "Calendar", element: <Calendar />, handle: { title: "Calendar" } },
    ],

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
