import { sosials } from "../../../data/data"
import Button from "../../Button/Button"
import avatar from "../../../img/paskuning.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div id="home" className="flex md:flex-row flex-col md:justify-between md:items-center pt-4 pb-16 bg-[#141E46] font-poppins px-8" data-aos="fade-in" data-aos-duration="500">
      <div className="text-white md:mt-20 py-20 md:w-1/2">
        <h1 className="md:text-[3rem] text-[2rem] font-bold text-white">Hi There,<br/>I'm Tirta Afandi</h1>
        <p className="text-xl mt-2">I Am Into <TypeAnimation
      sequence={[
        'Web Developer', 
        1000, // Waits 1s
        'Designer Graphic', 
        2000, // Waits 2s
        'Photografer', 
        3000,
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
          style={{ fontSize: '1em', display: 'inline-block', color:'gray' }}
        /></p>
        <Button color="bg-custom-red hover:bg-[#a41818] w-[9rem]  my-3">About Us</Button>
        <ul className="list-none flex mb-7 content-center">
          {sosials.map((sosial) => (
            <li key={sosial.name} className="text-2xl ml-1">
              <a href={sosial.path}><img src={sosial.icon} className="w-8 mt-2" alt="" /></a>
            </li>
          ))}
        </ul>
        
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={avatar} alt="" className="md:w-[500px] w-[250px] rounded-full md:mt-4 " />
      </div>
    </div>
  )
}

export default Home