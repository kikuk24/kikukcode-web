/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react"
// import { skils } from "../../../data/data-skils"
import {ChevronRightIcon} from '@heroicons/react/24/solid'
import avatar from "../../../img/pasputih.png"
import Button from "../../Button/Button"
import AOS from "aos"
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div id="about" className="md:px-10 font-poppins max-w-7xl mx-auto" data-aos="fade-right" data-aos-duration="500">
      <h1 className="text-[2.3rem] px-10 font-bold text-center my-5">About<span className="text-[#004E85]">Me</span></h1>
      <div className="flex w-full flex-col md:flex-row items-center justify-center">
        <div className="md:ml-8 md:p-20">
          <img src={avatar} alt="my profile" className="w-[300px]" />
        </div>
        <div className="flex w-full md:w-1/2  justify-start px-9 md:py-10 flex-col md:px-16">
          <h1 className="text-lg font-bold">I'm Afandi</h1>
          <h2 className="font-bold text-[13px]">Full Stack Web Developer</h2>
          <p className="py-2 font-medium text-[13px]">I am Full-Stack wed developer based in Lamongan, Indonesia. I am still learning web development. I am also a graphic designer. I am very passionate about improving my coding skills & developing websites. I build Websites with ReactJS and PHP with CodeIgniter. Ilove to learn new technologies.</p>
          <p className="text-[12px]">Email: <a href="mailto:tirta.afandi24@gmail.com" className="text-custom-red">tirta.afandi24@gmail.com</a></p>
          <p className="text-[12px]">Place: <span className="text-custom-red">Lamongan, Indonesia - 62263</span></p>
          <Button color="bg-custom-red hover:bg-[#a41818] w-[10rem] my-8 flex justify-center" >Contact Me <ChevronRightIcon className="w-6 h-6 font-bold"/></Button>
        </div>
      </div>
    </div>
    
  )
}

export default About