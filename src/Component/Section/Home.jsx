import { sosials } from "../../data/data"
import Button from "../Button/Button"
import avatar from "../../img/PAS FOTOy.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div id="home" className="flex flex-col md:text-center md:content-center justify-center items-center min-h-screen py-10 bg-[#141E46] font-poppins content-center" data-aos="fade-in" data-aos-duration="2000">
      <img src={avatar} alt="" className="w-70 h-70 rounded-full md:mt-4 mt-5 " />
      <div className="text-white text-center mt-6">
        <h1 className="text-xl font-bold text-white">Tirta Afandi</h1>
        <p className="text-lg text-center">saya seorang Programmer</p>
      </div>
      
      <ul className="list-none flex mb-7 content-center">
        {sosials.map((sosial) => (
          <li key={sosial.name} className="text-2xl ml-1">
            <a href={sosial.path}><img src={sosial.icon} className="w-8 mt-2" alt="" /></a>
          </li>
        ))}
      </ul>
        <Button color="bg-custom-red hover:bg-[#a41818]">Hire Me</Button>
    </div>
  )
}

export default Home