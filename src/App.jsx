import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./Component/Header/Nav/Nav"
import Footer from "../src/Component/Section/Footer"
import LandingPage from "./Component/pages/landingPage"
import AboutPage from "./Component/pages/aboutPage"
import NotFoundPage from "./Component/pages/notFoundPage"

function App() {
  
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
