import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./Component/Header/Nav/Nav"
import LandingPage from "./Component/pages/landingPage"


function App() {
  
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
