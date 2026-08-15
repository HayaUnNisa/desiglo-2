import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import ScrollToHash from "../common/ScrollToHash";
import CookieConsent from "../cookies/CookieConsent";

export default function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#061820] text-white">
      <ScrollToHash />

      <Navbar />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />

      <CookieConsent />
    </div>
  );
}