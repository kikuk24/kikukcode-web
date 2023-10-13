/* eslint-disable react/no-unescaped-entities */
import { sosials } from "../../../data/data"
import Button from "../../Button/Button"
import avatar from "../../../img/paskuning.jpg"
// import AOS from "aos"
import "aos/dist/aos.css"
// import { useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import ParticlesBg from "particles-bg"


const Home = () => {
  return (
    <div id="home" className="flex md:flex-row flex-col md:justify-between md:items-center pt-4 pb-16  font-poppins px-8 md:px-[8rem] min-h-screen">
      <ParticlesBg color="454545" num={50} type="cobweb" bg={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        background: "#F7F7F7"
      }} />

      <div className="text-white md:mt-20 py-20 md:w-1/2">
        <h1 className="md:text-[3rem] text-[2rem] font-bold text-[#006ba6]">Hi There,<br />I'm Tirta <span className="text-custom-red">Afandi</span></h1>
        <p className="text-xl mt-2 text-black font-medium">I Am Into <TypeAnimation
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
          style={{ fontSize: '1em', display: 'inline-block', color: '#004E85' }}
        /></p>
        <Button color="bg-[#006ba6] shadow-lg shadow-[#006ba6]  hover:bg-[#004E85] w-[9rem]  my-3" ><a href="/#about" className="">About Us</a></Button>
        <div className="flex py-6">
          {sosials.map((sosial) => (
            <div className="ml-2  bg-black rounded-full p-2" key={sosial.name}>
            <a href={sosial.path} className="" ><img src={sosial.icon} alt={sosial.name} className="w-[25px]" /></a>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center ">
        <img src={avatar} alt="" className="md:w-[400px] w-[250px] rounded-full md:mt-4" />
      </div>
    </div>
  )
}

export default Home