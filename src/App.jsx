import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet, useMatches } from "react-router-dom";
import ChatModal from "./Components/ChatModel";
import Logo from "./Components/Logo";

function App() {
  const organizationName = "Conflict Victim and Disable Society | Nepal";
  const country = "Nepal";
  const city = "Kathmandu";
  const address2 = "Sankhu";
  const address1 = "Shalambutar";
  const municipality = "Shankharapur ";
  const wardno = "6";
  const email1 = "info@cvdsnepal.org.np";
  const email2 = "cvdsnepal@yahoo.com";
  const phone1 = "+977-9851160868";
  const phone2 = "+977-9841360868";
  const builtWith = "Broad Press";
  const facebook = "cvdsnepal/yubraj thapa bairagi";
  const established = "2005";
  const youtube = "https://www.youtubevideoembed.com";
  const poweredBy = "flickr embed";
  const accountNumber = "050000023543";
  const accountName = "Conflict victim and disable society nepal";

  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const pageTitle = currentMatch?.handle?.title || "Page";

  useEffect(() => {
    document.title = `${pageTitle} | ${organizationName}`;
  }, [pageTitle]);

  return (
    <div>
      <Logo />
      <Header />
      <h1>
        you are in{" "}
        {location.pathname === "/" ? "Home" : location.pathname.slice(1)} page
      </h1>

      <Outlet context={{ organizationName, pathname: location.pathname }} />

      <Footer />
      <ChatModal />
    </div>
  );
}

export default App;
