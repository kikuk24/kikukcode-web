import Button from "../Button/Button"
import ItemsContainerFooter from "../Fragment/itemsContainerFooter"

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white font-poppins">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <h1 className="lg:text-3xl md:text-2xl md:mb-0 lg:leading-normal font-semibold md:w-2/5"><span className="text-custom-red">Afandi </span>Portofolio</h1>
        <div className="">
          <input type="text" placeholder="Your Email" className="text-gray-600 sm:w-72 sm:mr-1 lg:mb-0 mb-4 py-2 px-2 rounded focus:outline-none" />
          <Button color="bg-custom-red hover:bg-[#a41818] md:mt-6 mt-10 md:mr-1 ml-2 md:w-auto">Hire Me</Button>
        </div>
      </div>
      <ItemsContainerFooter />
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 px-10 py-9">
        <span>Copyright ©2023 - {new Date().getFullYear()} Kikuk Afandi - All right reserved with ❤ </span>
      </div>
    </footer>
  )
}

export default Footer