import { Link } from "react-router-dom"
import { projects } from "../../../data/data"


const Project = () => {

  return (
    <div id="projects" className='w-full font-poppins bg-[#F7F7F7]'>
      <h1 className="font-bold text-center text-[2.3rem] py-9">My <span className="">Project</span></h1>
      <p className="text-center mb-3">Latest Project</p>
      <div className="w-full m-auto   px-4 py-4 flex gap-7 justify-center flex-wrap">
        {projects.map((project) => (
          <div className=" min-w-[100px] w-[300px] rounded-t-lg shadow-lg" key={project.id}>
            <div className="rounded-t-md">
              <img src={project.image} alt="" className="transition-transform object-cover" />
            </div>
            <div className="px-6 py-5 bg-white">
              <h1 className="text-[1.5rem]">{project.name}</h1>
              <p className="text-[0.9rem] mb-3 line-clamp-2">{project.desc}</p>
              <Link to={project.link} className="text-[0.9rem] py-2 px-4 bg-[#0072BB] text-white rounded-md hover:bg-[#004E64]">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project