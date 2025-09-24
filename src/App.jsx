import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet, useMatches } from "react-router-dom";
import ChatModal from "./Components/ChatModel";
import Logo from "./Components/Logo";
import BasicBreadcrumbs from "./Components/BasicBreadcrumbs";

function App() {
  const organizationName = "cdvs Nepal";
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
      <BasicBreadcrumbs />
      <Outlet context={{ organizationName, pathname: location.pathname }} />

      <Footer />
      <ChatModal />
    </div>
  );
}

export default App;
