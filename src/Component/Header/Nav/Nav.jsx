import { useState } from "react"
import { links } from "../../../data/navData"
import Button from "../../Button/Button"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
const Nav = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-poppins text-white">
      <div className="md:flex items-center justify-between bg-custom-blue py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          Kikuk Afandi.
        </div>
        <div className="absolute right-8 top-4 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-6 h-6"/> : <Bars3Icon className="w-6 h-6"/>}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 md:ml-0 absolute md:static bg-custom-blue md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 md:pl-0 pl-9 ease-in ${open ? 'top-10' : 'top-[-490px]' }`}>
        {links.map((link) => (
          <li key={link.name} className=" text-lg md:my-0 my-7">
            <a href={link.path} className="hover:text-white duration-500 md:hover:bg-custom-red hover:rounded md:px-3 md:py-2">{link.name}</a>
          </li>
        ))}
          <Button color="bg-custom-red md:ml-8" type="button">Get Started</Button>
      </ul>

      </div>
    </div>
  )
}

export default Nav