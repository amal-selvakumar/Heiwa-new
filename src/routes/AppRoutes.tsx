import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import WellnessPackages from "../pages/WellnessPackages/WellnessPackages"
import BoutiqueStayRetreat from "../pages/BoutiqueStayRetreat/BoutiqueStayRetreat"
import AyurvedaRetreat from "../pages/AyurvedaRetreat/AyurvedaRetreat"
import AyurvedaMassages from "../pages/AyurvedaMassages/AyurvedaMassages"
import AyurvedaPersonalizedTreatment from "../pages/AyurvedaPersonalizedTreatments/AyurvedaPersonalizedTreatment"
import { useEffect } from "react"

function AppRoutes() {
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/wellness-packages" element={<WellnessPackages/>}></Route>
            <Route path="/boutique-stay-retreat" element={<BoutiqueStayRetreat/>}></Route>
            <Route path="/ayurveda-retreat" element={<AyurvedaRetreat/>}/>
            <Route path="/ayurveda-massages" element={<AyurvedaMassages/>}/>
            <Route path="/ayurveda-personalized-treatments" element={<AyurvedaPersonalizedTreatment/>}/>
        </Routes>
    </Router>
      
    </>
  )
}

export default AppRoutes
