import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import CreditTransfer from "./Pages/CreditTransfer";
import Packages from "./Pages/Packages";
import Operators from "./Pages/Operators";
import HowToPay from "./Pages/HowToPay";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Checkout from "./Pages/Checkout";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/credit-transfer" element={<CreditTransfer />} />
        <Route path="/packages/:pkg" element={<Packages />} />
        <Route path="/operators/:opt" element={<Operators />} />
        <Route path="/how-to-pay" element={<HowToPay />} />
        <Route path="/payment/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
