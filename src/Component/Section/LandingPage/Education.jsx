import { education } from "../../../data/main-data"

const Education = () => {
  return (
    <div className="bg-slate-300 font-poppins py-8" id="education">
      <div className="text-center px-5 py-6 ">
        <h1 className="font-bold text-[2rem]">My <span className="text-[#006ba6]">Education</span></h1>
        <p className="text-[12px]">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think</p>
      </div>
      <div className="flex flex-col gap-4">

        {education.map((item, i) => (
          <div className="flex bg-white md:w-[60%] rounded-md m-auto md:flex-row flex-col w-[90%] max-w-7xl mx-auto" key={i}>
            <img src={item.img} alt="smkn1tuban" className="bg-cover md:w-[200px] md:rounded-l-md rounded-t-md" />
        <div className="font-semibold px-4 flex flex-col gap-3 py-4">
              <h2 className="text-[1.5rem] ">{item.jurusan}</h2>
              <h3 className="font-medium">{item.nama}</h3>
              <p className="text-[1.1rem]">{item.tahunPendidikan}</p>
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education