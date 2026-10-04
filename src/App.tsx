import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";

const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
import Home from "./pages/Home";
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const StartProject = lazy(() => import("./pages/StartProject"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Review = lazy(() => import("./pages/ReviewPage"));
const Reviews = lazy(() => import("./pages/Reviews"));

const Pay = lazy(() => import("./pages/Pay"));
const PaymentRequest = lazy(() => import("./pages/PaymentRequest"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentFailed = lazy(() => import("./pages/PaymentFailed"));

const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const Accessibility = lazy(() => import("./pages/legal/Accessibility"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="dg-container section-pad" role="status">
            Loading page…
          </div>
        }
      >
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />

            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/start-a-project" element={<StartProject />} />

            {/* Reviews */}
            <Route path="/review" element={<Review />} />
            <Route path="/reviews" element={<Reviews />} />

            {/* Payment routes */}
            <Route path="/pay" element={<Pay />} />

            <Route
              path="/pay/:transactionNumber"
              element={<PaymentRequest />}
            />

            <Route path="/payment/success" element={<PaymentSuccess />} />

            <Route path="/payment/failed" element={<PaymentFailed />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/terms" element={<Terms />} />

            <Route path="/cookie-policy" element={<CookiePolicy />} />

            <Route path="/accessibility" element={<Accessibility />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
