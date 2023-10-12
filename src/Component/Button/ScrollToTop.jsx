import { useEffect, useState } from "react"
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import AOS from "aos"
import 'aos/dist/aos.css'

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);
useEffect(() => {
    AOS.init()
  },[])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  },[])
  return (
    <div className="fixed md:bottom-2 md:right-2 bottom-12 right-6" data-aos="fade-down">
      {isVisible && (
        <button
        type="button"
        onClick={scrollToTop}
        className={`bg-custom-red hover:bg-custom-red inline-flex items-center rounded-full p-2 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}>
        <ChevronUpIcon className="w-4 h-4"/>
      </button>
      )}
    </div>
  )
}

export default ScrollToTop