import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
