
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";

import Home from "./pages/Home";
import ServicesWebsites from "./pages/ServicesWebsites";
import TrueProfitPrivacy from "./pages/privacy/shopifyapps/TrueProfitPrivacy";

export default function App() {
  return (
    <>
      <Header />
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/websites" element={<ServicesWebsites />} />
        <Route
          path="/privacy/true-profit"
          element={<TrueProfitPrivacy />}
        />
      </Routes>

      <Footer />
    </>
  );
}
