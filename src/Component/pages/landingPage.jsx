import About from "../Section/About"
import Blog from "../Section/Blog"
import Footer from "../Section/Footer"
import Home from "../Section/Home"
import Services from "../Section/Services"

const LandingPage = () => {
  return (
    <>
      <Home/>
      <About />
      <Services />
      <Blog />
      <Footer/>
    </>
  )
}

export default LandingPage