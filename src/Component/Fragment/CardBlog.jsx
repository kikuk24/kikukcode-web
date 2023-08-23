/* eslint-disable react/prop-types */

const CardBlog = (props) => {
  const { children } = props
  return (
    <div className="w-[340px] shadow-lg bg-white rounded-md p-8 mb-8 mx-auto md:max-w-[400px] md:h-[500px] h-[500px]">
      {children}
    </div>
  )
}
const Header = (props) => {
const { img } = props
  return (
    <div className="w-full mx-auto">
      <img src={img } className="rounded-t-lg object-cover mx-auto my-4 items-center w-[400px] max-h-[200px]" alt="gambar" />
    </div>
  )
}
const Content = (props) => {
  const { title, desc } = props
  return (
    <div className="">
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <p className="text-sm line-clamp-3 mt-4 mb-2">{desc}</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="flex text-sm">
      <p>22-08-2021 <span className="text-custom-red">| Tirta</span></p>
    </div>
  )
}

CardBlog.Footer = Footer
CardBlog.Content = Content
CardBlog.Header = Header
export default CardBlog