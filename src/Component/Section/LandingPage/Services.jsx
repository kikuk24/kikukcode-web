import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { skils } from "../../../data/data-skils"

const Services = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className="min-h-screen py-[5rem] md:px-10 font-poppins bg-[#004E85]" >
      <h1 className="text-[2rem] px-16 font-bold text-white py-8 mb-7  text-center">Skill & <span className="">Abilities</span></h1>
        <div className="flex flex-wrap justify-center py-16 w-full px-12 bg-custom-red gap-5 rounded-md">
           {skils.map((skil) => (
          <div className="w-[130px] h-[100px]  bg-white rounded-md flex justify-center" key={skil.id}>
            <img src={skil.icon} alt={skil.name} className="w-[100px] px-2 py-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services