
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home_temp";
import TrueProfitPrivacy from "./pages/privacy/shopifyapps/TrueProfitPrivacy";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privacy/true-profit"
          element={<TrueProfitPrivacy />}
        />
      </Routes>

      <Footer />
    </>
  );
}

