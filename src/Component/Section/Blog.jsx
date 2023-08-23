import CardBlog from "../Fragment/CardBlog"
import { blogsPots } from "../../data/data"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Blog = () => {

  useEffect(() => {
    AOS.init()
  },[])


  return (
    <div className="min-h-screen py-[5rem] md:px-10 font-poppins">
      <h1 className="text-xl px-10 font-bold text-center md:text-left" data-aos="fade-up-right" data-aos-duration="1000">Latest Post</h1>
      <div className="flex justify-center items-center flex-wrap" data-aos="fade-up" data-aos-duration="2000">
        {blogsPots.map((blog) => (
          <CardBlog key={blog.id}>
            <CardBlog.Header img={blog.image} />
            <CardBlog.Content title={blog.title} desc={blog.desc}  />
            <CardBlog.Footer />
          </CardBlog>
          
        ))}
      </div>
      
    </div>
  )
}

export default Blog