import { services } from "../../data/data"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Services = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className="min-h-screen py-[5rem] md:px-10 font-poppins" >
      <h1 className="text-xl px-10 font-bold md:text-left text-center" data-aos="fade-up-right" data-aos-duration="2000">Services</h1>
      <div className="flex justify-center items-center text-center flex-wrap" >
        {services.map((service) => (
          <div key={service.name} className={`mt-6 ${service.bg} items-center rounded-md p-8 md:ml-4 mx-5 md:w-1/4 text-white justify-center`} data-aos="fade-left" data-aos-duration="3000">
            <img src={service.Image} className="w-20 mx-auto my-4 items-center" alt="" />
            <h1 className="font-bold">{service.icon}</h1>
            <h1 className="font-bold">{service.name}</h1>
            <p className="mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services