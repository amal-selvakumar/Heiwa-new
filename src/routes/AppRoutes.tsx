import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import WellnessPackages from "../pages/WellnessPackages/WellnessPackages"
import BoutiqueStayRetreat from "../pages/BoutiqueStayRetreat/BoutiqueStayRetreat"

function AppRoutes() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/wellness-packages" element={<WellnessPackages/>}></Route>
            <Route path="/boutique-stay-retreat" element={<BoutiqueStayRetreat/>}></Route>
        </Routes>
    </Router>
      
    </>
  )
}

export default AppRoutes
