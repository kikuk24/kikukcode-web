import { services } from "../../../data/data"
const Visi = () => {
  return (
    <div className="p-9 m-[4rem]">
      <div className="flex gap-9 flex-warp outline">
        {services.map((service) => (
          <div className="flex outline" key={service.name}>
            <img src={service.Image} alt="img" className="w-20 mx-auto my-4 items-center" />
          </div>
        ))}
      </div>
       <div className="">
          <h1 className="text-3xl font-bold md:text-left text-center">My Mission</h1>
        </div>
    </div>
  )
}

export default Visi