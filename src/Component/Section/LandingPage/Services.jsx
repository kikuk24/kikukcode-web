import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { skils } from "../../../data/data-skils"

const Services = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className="font-poppins bg-[#1E91D6] w-full pb-[2.7rem]" id="skills">
      <h1 className="text-[2rem] font-bold text-white text-center py-5">Skill & <span className="text-[#004E64]">Abilities</span></h1>
        <div className="flex flex-wrap justify-center px-4 w-96% bg-[#0072BB] gap-5 rounded-md mx-7 py-2 md:w-[80%] md:m-auto">
           {skils.map((skil) => (
          <div className="w-[120px] h-[70px]  bg-[#F7F7F7] rounded-md flex justify-center" key={skil.id}>
            <img src={skil.icon} alt={skil.name} className="w-[100px] px-2 py-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services