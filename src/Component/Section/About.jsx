import { useEffect } from "react"
import { skils } from "../../data/data-skils"
import avatar from "../../img/PAS FOTOy.jpg"
import Button from "../Button/Button"
import AOS from "aos"
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="min-h-screen py-[5rem] md:px-10 font-poppins" data-aos="fade-right" data-aos-duration="2000">
      <h1 className="text-xl px-10 font-bold md:text-left text-center mb-4">About</h1>
      <div className=" flex flex-wrap justify-center items-center mt-2" data-aos="fade-up" data-aos-duration="3000">
      <img src={avatar} alt="tirta" className="w-30 h-30 rounded-full md:mt-14  mt-5 items-center" />
      <div className="shadow-md flex flex-wrap mt-6 w-full md:w-1/2 md:ml-20 md:mt-14 p-10">
          <div className="md:mt-6 md:w-1/2 p-2 w-full">
            <p className="">Tirta Afandi adalah seorang programmer yang memiliki minat dalam bidang teknologi informasi. </p>
          <a href=""><Button color="bg-custom-red hover:bg-[#a41818] md:mt-6 mt-10">Download CV</Button></a>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-wrap">
            {skils.map((skil) => (
            <div key={skil.id} className="ml-4 mt-6 p-0 hover:scale-150 transition-all duration-500">
              <img src={skil.icon} alt={skil.name} className="w-[40px] h-[30px]" />
            </div>
          ))}
        </div>
        </div>
      </div>
      {/* <div className="mt-10">
        <div className="flex flex-wrap justify-center items-center">
          {reviews.map((review) => (
            <div key={review.id} className="mt-6 flex ml-4">
              <h1 className="font-bold">{review.icon}</h1>
              <h1 className="font-bold">{review.count}</h1>
              <div className="mt-5">
                <p className="mt-5">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
    
  )
}

export default About