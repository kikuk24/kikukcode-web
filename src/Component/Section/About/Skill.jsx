import { skils } from "../../../data/data-skils"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Skill = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className="w-full flex flex-wrap md:p-9 items-center justify-center font-poppins">
      <div className="md:w-1/2 p-10">
        <h1 className="text-3xl font-bold md:text-left text-center">Skill</h1>
        <p className="text-xl mt-7">Dalam mendevelop sebuah program saya menggunakan beberapa teknologi yang saya kuasai yaitu sebagai berikut</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center px-6 py-7 gap-9 shadow-md">
        {skils.map((skil) => (
          <div key={skil.id} className="hover:scale-125 transition-all duration-150 ease-in-out flex flex-col items-center justify-center" data-aos="zoom-in">
            <img src={skil.icon} alt="" className="w-8 md:w-16 hover:scale-125 transition-all duration-150 ease-in-out" />
            <p className="text-center text-sm">{skil.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill